import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { OrderInterface, OrdersInterface } from '../../@types/OrdersTypes'
import { FirebaseUserContext } from '../../App'
import EmptyPageTextWrapper from '../../components/EmptyPageTextWrapper/EmptyPageTextWrapper'
import Order from './Order/Order'
import classes from './Orders.module.css'

interface Props {

}

const Orders: React.FC<Props> = props => {

    const user = useContext(FirebaseUserContext)
    const history = useHistory()
    const [getOrdersLoading, setGetOrdersLoading] = useState(false)
    const [getOrdersError, setGetOrdersError] = useState(false)
    const [orderData, setOrderData] = useState<[string, OrderInterface][]>([])

    useEffect(() => {
        setGetOrdersError(false)
        setGetOrdersLoading(true)
        if (user) {
            Axios.get<OrdersInterface>(`https://slippers-react.firebaseio.com/orders/${user.uid}.json`)
                .then(res => {
                    setGetOrdersLoading(false)
                    if (res.data && Object.entries(res.data).length > 0) setOrderData(Object.entries(res.data))
                })
                .catch(() => {
                    setGetOrdersLoading(false)
                    setGetOrdersError(true)
                })
        }
        const timeoutId = setTimeout(() => {
            if (!user) history.replace("/auth")
        }, 3000)
        return () => { clearTimeout(timeoutId) }
    }, [user, history])

    if (getOrdersLoading) return (
        <section className={classes.OrdersContainer}>
            <ul className={classes.OrdersList}>
                {
                    [...Array(3)].map((_, i) => (
                        <Order
                            orderId=""
                            uid=""
                            address=""
                            total={0}
                            timeOrdered={0}
                            orderItems={{}}
                            loading
                        />
                    ))
                }
            </ul>
        </section>
    )
    if (getOrdersError) return (
        <section className={classes.OrdersContainer}>
            <EmptyPageTextWrapper>Something went wrong! <a href="/orders">try again</a></EmptyPageTextWrapper>
        </section>
    )
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
