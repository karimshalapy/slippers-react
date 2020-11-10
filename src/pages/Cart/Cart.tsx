import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../@types/reducersTypes'
import { FirebaseUserContext } from '../../App'
import CircleSpinner from '../../components/CircleSpinner/CircleSpinner'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails'
import CartItems from './CartItems/CartItems'

interface Props {

}

const Cart: React.FC<Props> = props => {

    const { cartItemsEntries, cartLoading } = useSelector((state: RootReducer) => ({
        cartItemsEntries: Object.entries(state.cartData.cartItems),
        cartLoading: state.cartData.cartLoading
    }))
    const user = useContext(FirebaseUserContext)
    const [subTotal, setSubTotal] = useState(0)


    useEffect(() => {
        setSubTotal(cartItemsEntries.reduce((prev, [_, value]) => prev + (value.productData.price.usd * value.amount), 0))
    }, [cartItemsEntries])

    return (
        <>
            <ScrollToTopOnPathChange />
            <section className={classes.CartContainer}>
                <form>
                    <h2>your cart</h2>
                    {
                        cartLoading ?
                            <div className={classes.SpinnerContainer}><CircleSpinner size={25} /></div>
                            : null
                    }
                    <div className={classes.CartInfoContainer}>
                        <CartItems cartItemsEntries={cartItemsEntries} uid={user!.uid} loading={cartLoading} />
                        <CartDetails total={subTotal} uid={user!.uid} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Cart
