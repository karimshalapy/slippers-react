import React, { forwardRef } from 'react'
import classes from './CartDetails.module.css'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import Modal from '../../../components/Modal/Modal'

interface Props {
    total: number,
    uid: string,
    error?: string,
    clearCart: (e: React.MouseEvent) => void
}

const CartDetails = forwardRef<HTMLInputElement, Props>((props, nodeRef) => {

    return (
        <div className={classes.ProductDetails}>
            <Modal show backdropClickHandler={() => { }}><p>HELLO</p></Modal>
            <div className={classes.PriceDetailsContainer}>
                <p className={classes.Label}>subtotal</p>
                <data value={props.total}>${props.total}</data>
            </div>
            <label className={classes.Label} htmlFor="address">delivery address</label>
            <div className={classes.InputWithErrorContainer}>
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="input your delivery address"
                    ref={nodeRef}
                    className={props.error ? classes.Error : ""}
                />
                <span className={classes.ErrorMessage}>{props.error}</span>
            </div>
            <Button tomato>checkout</Button>
            <button className={classes.ProductDetailsBtn}><Link to="/slippers">continue shopping</Link></button>
            <button className={classes.ProductDetailsBtn} onClick={props.clearCart}>clear cart</button>
        </div>
    )
})

export default CartDetails
