import React, { memo, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CircleSpinner from '../../../../components/CircleSpinner/CircleSpinner'
import Button from '../../../../components/Button/Button'
import classes from './OrderModalContent.module.css'

interface Props {
    orderLoading: boolean,
    orderError: boolean,
    orderSuccess: boolean,
    resetOrder: (e: React.MouseEvent) => void
    clearCart: (e: React.MouseEvent) => void,
}

const OrderModal: React.FC<Props> = ({
    orderLoading,
    orderError,
    orderSuccess,
    resetOrder,
    clearCart
}) => {
    const history = useHistory()

    const clearCartAndRedirect = useCallback((e: React.MouseEvent) => {
        clearCart(e)
        history.push("/slippers")
    }, [history, clearCart])


    if (orderLoading) return <CircleSpinner size={50} />
    if (orderSuccess) return (
        <section className={classes.OrderModalContentContainer}>
            <h2>Order Success</h2>
            <p>Thank you for buying from us <span role="img" aria-label="love">&#10084;&#65039;</span></p>
            <Button ghost clickHandler={clearCartAndRedirect}>continue shopping &amp; clear cart</Button>
            <Button ghost ><Link to="/slippers">continue shopping without clearing cart</Link></Button>
        </section>
    )
    if (orderError) return (
        <section className={classes.OrderModalContentContainer}>
            <h2>Order Failed"</h2>
            <p>something went wrong. Please try again later</p>
            <Button ghost clickHandler={resetOrder}>try again</Button>
        </section>
    )
    return null
}

export default memo(OrderModal)
