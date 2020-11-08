import { SlippersProductData } from "./SlippersTypes";

export interface CartItems {
    [item: string]: {
        productData: SlippersProductData,
        amount: number,
        gender: Gender,
        size: number,
    }
}