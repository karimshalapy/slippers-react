import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FirebaseUserContext } from '../../../../../App'
import { ReactComponent as CartIcon } from '../../../../../assets/shopping-cart.svg'

interface Props {
    hide: boolean,
    iconClass: string,
    iconContainerClass: string,
    hideIconClass: string,
}

const CartIconContainer: React.FC<Props> = props => {

    const location = useLocation()
    const user = useContext(FirebaseUserContext)

    return (
        <Link
            to="/cart"
            className={`${props.iconContainerClass} ${location.pathname === "/cart" || !user || props.hide ? props.hideIconClass : ""}`}
        >
            <CartIcon className={props.iconClass} />
        </Link>
    )
}

export default CartIconContainer
