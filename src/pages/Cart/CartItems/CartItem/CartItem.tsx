import React from 'react'
import { Link } from 'react-router-dom'
import TextToMarkup from '../../../../helpers/TextToMarkup'
import classes from './CartItem.module.css'

interface Props {
    imgUrl: string,
    imgAlt: string,
    itemName: string,
    itemColor: string,
    sizeGenderText: string,
    incrementOrDecrement: (e: React.MouseEvent) => void,
    disabled?: boolean,
    totalPrice: number,
    productId: string,
    itemAmount: number,
    productUrl: string
}

const CartItem: React.FC<Props> = props => {
    return (
        <li className={classes.CartItem}>
            <div className={classes.ImageContainer}>
                <img src={props.imgUrl} alt={props.imgAlt} />
            </div>
            <div className={classes.InfoContainer}>
                <Link to={props.productUrl}>{props.itemName}</Link>
                <p>
                    <span dangerouslySetInnerHTML={new TextToMarkup(props.itemColor)}></span>
                    <br />
                    {props.sizeGenderText}
                </p>
                <div className={classes.PriceAndAmountContainer}>
                    <div className={classes.IncrementDecrementContainer}>
                        <button
                            onClick={props.incrementOrDecrement}
                            disabled={props.disabled}
                            data-item={props.productId}
                            data-type="decrement"
                        >-</button>
                        <span>{props.itemAmount}</span>
                        <button
                            onClick={props.incrementOrDecrement}
                            disabled={props.disabled}
                            data-item={props.productId}
                            data-type="increment"
                        >+</button>
                    </div>
                    <data value={props.totalPrice}>${props.totalPrice}</data>
                </div>
            </div>
        </li>
    )
}

export default CartItem
