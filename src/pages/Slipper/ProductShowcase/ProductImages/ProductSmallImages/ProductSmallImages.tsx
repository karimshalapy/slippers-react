import React from 'react'
import { v4 } from 'uuid'
import classes from './ProductSmallImages.module.css'

interface Props {
    clickHandler: (index: number) => void,
    activeImage: number,
    images: string[]
}

const ProductSmallImages: React.FC<Props> = props => {
    return (
        <ul className={classes.SmallImagesContainer}>
            {
                props.images.map((item, i) => (

                    <li
                        key={v4()}
                        className={[classes.SmallImagesItem, i === props.activeImage ? classes.Active : ""].join(" ")}
                        onClick={props.clickHandler.bind(null, i)}
                    >
                        <img src={item} alt="" />
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductSmallImages
