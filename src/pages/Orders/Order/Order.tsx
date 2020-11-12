import React from 'react'
import { CartItemsInterface } from '../../../@types/CartTypes'
import CartItems from '../../../components/CartItems/CartItems'
import classes from './Order.module.css'

interface Props {
    orderId: string,
    uid: string,
    address: string,
    total: number,
    timeOrdered: number,
    orderItems: CartItemsInterface,
}

const Order: React.FC<Props> = props => {
    return (
        <li className={classes.Order}>
            <ul>
                <li><p><span>order id:</span> {props.orderId}</p></li>
                <li>
                    <p><span>ordered items:</span></p>
                    <CartItems
                        cartItemsEntries={Object.entries(props.orderItems)}
                        uid={props.uid}
                        classNames={classes.OrderedItemsList}
                    />
                </li>
                <li><p><span>order total:</span> ${props.total}</p></li>
                <li><p><span>order address:</span> {props.address}</p></li>
                <li><p><span>ordered on:</span> {new Date(props.timeOrdered).toString()}</p></li>
            </ul>
        </li>
    )
}

export default Order
