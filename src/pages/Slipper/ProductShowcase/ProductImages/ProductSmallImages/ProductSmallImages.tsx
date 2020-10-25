import React from 'react'
import { v4 } from 'uuid'
import { ProductShowcase } from '../../../../Slippers/SlippersTypes'
import classes from './ProductSmallImages.module.css'

interface Props {
    clickHandler: (key: string) => void,
    activeImage?: string,
    images?: ProductShowcase
}

const ProductSmallImages: React.FC<Props> = props => {
    return (
        <ul className={classes.SmallImagesContainer}>
            {
                props.images
                    ?
                    Object.entries(props.images)
                        .map(([itemKey, itemValue], i) => (

                            <li
                                key={itemKey}
                                className={[classes.SmallImagesItem, itemKey === props.activeImage ? classes.Active : ""].join(" ")}
                                onClick={props.clickHandler.bind(null, itemKey)}
                            >
                                <img src={itemValue.imgUrl} alt={itemValue.imgAlt} />
                            </li>
                        ))
                    :
                    [...Array(5)].map(() => (
                        <li
                            key={v4()}
                            className={`${classes.SmallImagesItem} Loading`}
                        ></li>
                    ))
            }
        </ul>
    )
}

export default ProductSmallImages
