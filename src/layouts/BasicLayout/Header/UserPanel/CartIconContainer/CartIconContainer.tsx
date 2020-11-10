import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { RootReducer } from '../../../../../@types/reducersTypes'
import { FirebaseUserContext } from '../../../../../App'
import { ReactComponent as CartIcon } from '../../../../../assets/shopping-cart.svg'
import classes from './CartIconContainer.module.css'

interface Props {
    hide: boolean,
    iconClass: string,
    iconContainerClass: string,
    hideIconClass: string,
}

const CartIconContainer: React.FC<Props> = props => {

    const location = useLocation()
    const user = useContext(FirebaseUserContext)
    const cartItemsCount = useSelector((state: RootReducer) => {
        return Object.values(state.cartData.cartItems).reduce((prev, { amount }) => prev + amount, 0)
    })

    return (
        <Link
            to="/cart"
            className={`${props.iconContainerClass} ${location.pathname === "/cart" || !user || props.hide ? props.hideIconClass : ""}`}
        >
            {cartItemsCount > 0 ? <span className={classes.CartItemsCounter}>{cartItemsCount}</span> : null}
            <CartIcon className={props.iconClass} />
        </Link>
    )
}

export default CartIconContainer
