import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartInputs } from '../../@types/CartTypes'
import { RootReducer } from '../../@types/reducersTypes'
import { FirebaseUserContext } from '../../App'
import firebase from 'firebase/app'
import CircleSpinner from '../../components/CircleSpinner/CircleSpinner'
import EmptyPageTextWrapper from '../../components/EmptyPageTextWrapper/EmptyPageTextWrapper'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails'
import CartItems from '../../components/CartItems/CartItems'
import cartSchema from './CartValidation'
import { setCartDataRemotely } from '../../store/actionsIndex/actionIndex'

interface Props {

}

const Cart: React.FC<Props> = props => {

    const { register, handleSubmit, errors } = useForm<CartInputs>({
        mode: "onChange",
        defaultValues: {
            address: ""
        },
        resolver: cartSchema
    })

    const { cartItems, cartLoading } = useSelector((state: RootReducer) => ({
        cartItems: state.cartData.cartItems,
        cartLoading: state.cartData.cartLoading
    }))
    const user = useContext(FirebaseUserContext)
    const [subTotal, setSubTotal] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [orderLoading, setOrderLoading] = useState(false)
    const [orderError, setOrderError] = useState(false)
    const [orderSuccess, setOrderSuccess] = useState(false)
    const cartItemsEntries = Object.entries(cartItems)
    const dispatch = useDispatch()

    useEffect(() => {
        setSubTotal(cartItemsEntries.reduce((prev, [_, value]) => prev + (value.productData.price.usd * value.amount), 0))
    }, [cartItemsEntries])

    const clearCart = (e?: React.MouseEvent) => {
        e?.preventDefault()
        dispatch(setCartDataRemotely({}, user!.uid))
    }

    const toggleShowModal = !orderLoading ? () => setShowModal(prev => !prev) : () => { }

    const resetOrder = (e?: React.MouseEvent) => {
        e?.preventDefault()
        setOrderLoading(false)
        setOrderSuccess(false)
        setOrderError(false)
    }

    const cartFormSubmitHandler = (data: CartInputs) => {
        const order = {
            ...data,
            orderItems: cartItems,
            total: { usd: subTotal },
            timeOrdered: firebase.database.ServerValue.TIMESTAMP
        }
        toggleShowModal()
        resetOrder()
        setOrderLoading(true)
        Axios.post(`https://slippers-react.firebaseio.com/orders/${user!.uid}.json`, order)
            .then(() => {
                setOrderLoading(false)
                setOrderSuccess(true)
            })
            .catch(() => {
                setOrderLoading(false)
                setOrderError(true)
            })
    }


    return (
        <>
            <ScrollToTopOnPathChange />
            <section className={classes.CartContainer}>
                {
                    cartItemsEntries.length > 0
                        ?
                        <form onSubmit={handleSubmit(cartFormSubmitHandler)}>
                            <h2>your cart</h2>
                            {
                                cartLoading ?
                                    <div className={classes.SpinnerContainer}><CircleSpinner size={25} /></div>
                                    : null
                            }
                            <div className={classes.CartInfoContainer}>
                                <CartItems
                                    cartItemsEntries={cartItemsEntries}
                                    uid={user!.uid}
                                    loading={cartLoading}
                                    inCart
                                />
                                <CartDetails
                                    total={subTotal}
                                    uid={user!.uid}
                                    ref={register}
                                    error={errors.address?.message}
                                    clearCart={clearCart}
                                    closeModalHandler={toggleShowModal}
                                    showModal={showModal}
                                    orderLoading={orderLoading}
                                    orderError={orderError}
                                    orderSuccess={orderSuccess}
                                    resetOrder={resetOrder}
                                />
                            </div>
                        </form>
                        :
                        <EmptyPageTextWrapper>
                            You don't have any items in your cart yet, <Link to="/slippers">continue shopping.</Link>
                        </EmptyPageTextWrapper>
                }
            </section>
        </>
    )
}

export default Cart
