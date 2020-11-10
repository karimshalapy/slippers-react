import React from 'react'
import classes from './CartDetails.module.css'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCartDataRemotely } from '../../../store/actionsIndex/actionIndex'

interface Props {
    total: number,
    uid: string
}

const CartDetails: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const clearCart = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(setCartDataRemotely({}, props.uid))
    }

    return (
        <div className={classes.ProductDetails}>
            <div className={classes.PriceDetailsContainer}>
                <p className={classes.Label}>subtotal</p>
                <data value={props.total}>${props.total}</data>
            </div>
            <label className={classes.Label} htmlFor="address">delivery address</label>
            <input type="text" name="address" id="address" placeholder="input your delivery address" />
            <Button tomato>checkout</Button>
            <button className={classes.ProductDetailsBtn}><Link to="/slippers">continue shopping</Link></button>
            <button className={classes.ProductDetailsBtn} onClick={clearCart}>clear cart</button>
        </div>
    )
}

export default CartDetails
