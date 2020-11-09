import React from 'react'
import CartItem from './CartItem/CartItem'
import mapSizes from '../../../helpers/mapSizes'
import { CartItemInterface } from '../../../@types/CartTypes'
import classes from './CartItems.module.css'

interface Props {
    cartItemsEntries: [string, CartItemInterface][]
}

const CartItems: React.FC<Props> = props => {

    const incrementOrDecrement = (e: React.MouseEvent) => { e.preventDefault() }

    return (
        <ul className={classes.CartItemsContainer}>
            {
                props.cartItemsEntries.map(([key, value]) => (
                    <CartItem
                        key={key}
                        imgUrl={value.productData.mainImageUrl}
                        imgAlt={value.productData.mainImageAlt}
                        incrementOrDecrement={incrementOrDecrement}
                        itemAmount={value.amount}
                        itemColor={value.productData.colorText}
                        itemName={`mahabis ${value.productData.collection}`}
                        productId={key}
                        sizeGenderText={`size us ${value.gender} ${mapSizes[value.size]} (EU ${value.size})`}
                        totalPrice={value.amount * value.productData.price.usd}
                        productUrl={`/slipper/${value.productData.collection}?gender=${value.gender}&size=${value.size}&upper=${value.productData.upperColorShortened}&sole=${value.productData.soleColorShortened}`}
                    />
                ))
            }
        </ul>
    )
}

export default CartItems
