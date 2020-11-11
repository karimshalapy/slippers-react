import { Gender, SlippersProductData } from "./SlippersTypes";
export interface CartItemInterface {
    productData: SlippersProductData,
    amount: number,
    gender: Gender,
    size: number,
}
export interface CartItemsInterface {
    [item: string]: CartItemInterface
}
export type CartButtonDatasetType = "increment" | "decrement" | "remove"
export interface CartInputs { address: string }