import Axios from 'axios'
import React, { memo, useContext, useEffect, useState } from 'react'
import { OrderInterface, OrdersInterface } from '../../@types/OrdersTypes'
import { FirebaseUserContext } from '../../App'
import Order from './Order/Order'
import classes from './Orders.module.css'

interface Props {

}

const Orders: React.FC<Props> = props => {

    const user = useContext(FirebaseUserContext)

    const [orderData, setOrderData] = useState<[string, OrderInterface][]>([])

    useEffect(() => {
        Axios.get<OrdersInterface>(`https://slippers-react.firebaseio.com/orders/${user?.uid}.json`)
            .then(res => { if (res.data && Object.entries(res.data).length > 0) setOrderData(Object.entries(res.data)) })
    }, [user])

    return (
        <section className={classes.OrdersContainer}>
            <h2>your previous orders</h2>
            <ul className={classes.OrdersList}>
                {
                    orderData.map(([key, value]) => (
                        <Order
                            key={key}
                            orderId={key}
                            uid={user!.uid}
                            address={value.address}
                            total={value.total.usd}
                            timeOrdered={value.timeOrdered}
                            orderItems={value.orderItems}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default Orders
