import React from 'react'
import CartItem from './CartItem/CartItem'
import mapSizes from '../../../helpers/mapSizes'
import { CartButtonDatasetType, CartItemInterface } from '../../../@types/CartTypes'
import classes from './CartItems.module.css'
import { useDispatch } from 'react-redux'
import { cartButtonsActionsRemotely } from '../../../store/actionsIndex/actions/cartActions'

interface Props {
    cartItemsEntries: [string, CartItemInterface][],
    uid: string,
    loading: boolean
}

const CartItems: React.FC<Props> = props => {

    const dispatch = useDispatch()

    const cartButtonsActions = (e: React.MouseEvent) => {
        e.preventDefault()
        const clickTarget = e.target as HTMLButtonElement
        const productId = clickTarget.dataset.item
        const buttonType = clickTarget.dataset.type as CartButtonDatasetType

        if (buttonType === "remove" ||
            buttonType === "decrement" ||
            buttonType === "increment") dispatch(cartButtonsActionsRemotely(productId!, buttonType, props.uid))

    }

    return (
        <ul className={classes.CartItemsContainer}>
            {
                props.cartItemsEntries.map(([key, value]) => (
                    <CartItem
                        key={key}
                        imgUrl={value.productData.mainImageUrl}
                        imgAlt={value.productData.mainImageAlt}
                        itemAmount={value.amount}
                        itemColor={value.productData.colorText}
                        itemName={`mahabis ${value.productData.collection}`}
                        productId={key}
                        sizeGenderText={`size us ${value.gender} ${mapSizes[value.size]} (EU ${value.size})`}
                        totalPrice={value.amount * value.productData.price.usd}
                        productUrl={`/slipper/${value.productData.collection}?gender=${value.gender}&size=${value.size}&upper=${value.productData.upperColorShortened}&sole=${value.productData.soleColorShortened}`}
                        cartButtonsActions={cartButtonsActions}
                        disabled={props.loading}
                    />
                ))
            }
        </ul>
    )
}

export default CartItems
