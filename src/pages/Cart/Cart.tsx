import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../@types/reducersTypes'
import { FirebaseUserContext } from '../../App'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails'
import CartItems from './CartItems/CartItems'

interface Props {

}

const Cart: React.FC<Props> = props => {

    const cartItemsEntries = useSelector((state: RootReducer) => Object.entries(state.cartData.cartItems))
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
                    <div className={classes.CartInfoContainer}>
                        <CartItems cartItemsEntries={cartItemsEntries} />
                        <CartDetails total={subTotal} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Cart
