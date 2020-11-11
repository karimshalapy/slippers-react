import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartInputs } from '../../@types/CartTypes'
import { RootReducer } from '../../@types/reducersTypes'
import { FirebaseUserContext } from '../../App'
import firebase from 'firebase'
import CircleSpinner from '../../components/CircleSpinner/CircleSpinner'
import EmptyPageTextWrapper from '../../components/EmptyPageTextWrapper/EmptyPageTextWrapper'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails'
import CartItems from './CartItems/CartItems'
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
    const cartItemsEntries = Object.entries(cartItems)
    const dispatch = useDispatch()

    useEffect(() => {
        setSubTotal(cartItemsEntries.reduce((prev, [_, value]) => prev + (value.productData.price.usd * value.amount), 0))
    }, [cartItemsEntries])

    const clearCart = (e?: React.MouseEvent) => {
        e?.preventDefault()
        dispatch(setCartDataRemotely({}, user!.uid))
    }

    const cartFormSubmitHandler = (data: CartInputs) => {
        const order = {
            ...data,
            orderItems: cartItems,
            total: { usd: subTotal },
            timeOrdered: firebase.database.ServerValue.TIMESTAMP
        }
        Axios.post(`https://slippers-react.firebaseio.com/orders/${user!.uid}.json`, order)
            .then(() => clearCart())
            .catch(err => console.log(err))
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
                                />
                                <CartDetails
                                    total={subTotal}
                                    uid={user!.uid}
                                    ref={register}
                                    error={errors.address?.message}
                                    clearCart={clearCart}
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
