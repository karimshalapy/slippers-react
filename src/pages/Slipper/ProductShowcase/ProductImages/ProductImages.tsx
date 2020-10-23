import React, { useState } from 'react'
import ProductSmallImages from './ProductSmallImages/ProductSmallImages'
import classes from './ProductImages.module.css'

interface Props {

}

const PrdouctImages: React.FC<Props> = props => {

    const [activeImage, setActiveImage] = useState(0)
    const imagesDummyData = [
        "https://cdn.mahabis.com/201806/products/MO-F-BK-SB-1.jpg?23",
        "https://cdn.mahabis.com/201806/products/MO-F-BK-SB-2.jpg?23",
        "https://cdn.mahabis.com/201806/products/MO-F-BK-SB-3.jpg?23",
        "https://cdn.mahabis.com/201806/products/MO-F-BK-SB-4.jpg?23",
        "https://cdn.mahabis.com/201806/products/MO-F-BK-SB-5.jpg?23",
        "https://cdn.shopify.com/s/files/1/0238/5795/files/MO-F-BK-SB-6_1024x1024.jpg?23",
    ]
    const clickHandler = (imageIndex: number) => {
        setActiveImage(imageIndex)
    }

    return (
        <div className={classes.Wrapper}>
            <ProductSmallImages images={imagesDummyData} clickHandler={clickHandler} activeImage={activeImage} />
            <div className={classes.ImageContainer}>
                <img src={imagesDummyData[activeImage]} alt="" className={classes.ProductBigImage} />
            </div>
        </div>
    )
}

export default PrdouctImages
