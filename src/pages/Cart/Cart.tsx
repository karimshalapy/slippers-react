import React, { useContext } from 'react'
import { FirebaseUserContext } from '../../App'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Cart.module.css'

interface Props {

}

const Cart: React.FC<Props> = props => {

    const user = useContext(FirebaseUserContext)

    return (
        <>
            <ScrollToTopOnPathChange />
            <section className={classes.CartContainer}>
                <div>
                    <h2>welcome, {user?.displayName}!</h2> <span>not you?</span>
                    <h3>your cart</h3>
                </div>
            </section>
        </>
    )
}

export default Cart
