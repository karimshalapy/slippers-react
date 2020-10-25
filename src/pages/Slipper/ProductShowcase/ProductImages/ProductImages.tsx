import React, { useEffect, useState } from 'react'
import ProductSmallImages from './ProductSmallImages/ProductSmallImages'
import classes from './ProductImages.module.css'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'

interface Props {
    activeSlipperData?: SlippersProductData

}

const PrdouctImages: React.FC<Props> = ({ activeSlipperData }) => {

    const [activeImage, setActiveImage] = useState<string>()
    const clickHandler = (key: string) => { setActiveImage(key) }

    useEffect(() => {
        if (activeSlipperData) setActiveImage(Object.keys(activeSlipperData.productShowcase)[0])
    }, [activeSlipperData, setActiveImage])

    return (
        <div className={classes.Wrapper}>
            {
                activeSlipperData && activeImage ?
                    <ProductSmallImages
                        images={activeSlipperData?.productShowcase}
                        clickHandler={clickHandler}
                        activeImage={activeImage}
                    />
                    : null
            }
            <div className={classes.ImageContainer}>
                {
                    activeSlipperData && activeImage && Object.keys(activeSlipperData.productShowcase).includes(activeImage)
                        ?
                        <img
                            src={activeSlipperData.productShowcase[activeImage].imgUrl}
                            alt={activeSlipperData.productShowcase[activeImage].imgAlt}
                            className={classes.ProductBigImage}
                        />
                        : null
                }
            </div>
        </div>
    )
}

export default PrdouctImages
