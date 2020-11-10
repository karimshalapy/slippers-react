import React from 'react'
import classes from './CartDetails.module.css'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'

interface Props {
    total: number
}

const CartDetails: React.FC<Props> = props => {
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
            <button className={classes.ProductDetailsBtn}>clear cart</button>
        </div>
    )
}

export default CartDetails
