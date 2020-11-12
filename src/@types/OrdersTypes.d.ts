import { CartItemsInterface } from "./CartTypes";
import { Prices } from "./SlippersTypes";

export interface OrderInterface {
    address: string,
    orderItems: CartItemsInterface,
    timeOrdered: number,
    total: Prices
}
export interface OrdersInterface {
    [orderId: string]: OrderInterface
}