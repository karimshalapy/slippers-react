import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../@types/reducersTypes'
import { FirebaseUserContext } from '../../App'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'
import CartItems from './CartItems/CartItems'

interface Props {

}

const Cart: React.FC<Props> = props => {

    const cartItemsEntries = useSelector((state: RootReducer) => Object.entries(state.cartData.cartItems))
    const user = useContext(FirebaseUserContext)

    return (
        <>
            <ScrollToTopOnPathChange />
            <section className={classes.CartContainer}>
                <form>
                    <h2>welcome, {user?.displayName}!</h2> <span>not you?</span>
                    <h3>your cart</h3>
                    <div className={classes.CartInfoContainer}>
                        <CartItems cartItemsEntries={cartItemsEntries} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Cart
