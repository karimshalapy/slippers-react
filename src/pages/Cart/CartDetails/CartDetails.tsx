import React, { forwardRef } from 'react'
import classes from './CartDetails.module.css'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import OrderModalContent from './OrderModalContent/OrderModalContent'
import ModalGenerator from '../../../components/hoc/ModalGenerator/ModalGenerator'

interface Props {
    total: number,
    uid: string,
    error?: string,
    clearCart: (e: React.MouseEvent) => void,
    showModal: boolean,
    closeModalHandler: () => void,
    orderLoading: boolean,
    orderError: boolean,
    orderSuccess: boolean,
    resetOrder: (e: React.MouseEvent) => void
}

const CartDetails = forwardRef<HTMLInputElement, Props>((props, nodeRef) => {

    return (
        <div className={classes.ProductDetails}>
            <ModalGenerator show={props.showModal} closeModalHandler={props.closeModalHandler}>
                <OrderModalContent
                    orderLoading={props.orderLoading}
                    orderError={props.orderError}
                    orderSuccess={props.orderSuccess}
                    resetOrder={props.resetOrder}
                    clearCart={props.clearCart}
                />
            </ModalGenerator>
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
            <Button tomato disabled={props.orderLoading}>checkout</Button>
            <button className={classes.ProductDetailsBtn}><Link to="/slippers">continue shopping</Link></button>
            <button className={classes.ProductDetailsBtn} onClick={props.clearCart}>clear cart</button>
        </div>
    )
})

export default CartDetails
