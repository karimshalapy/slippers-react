import React, { useEffect, useState } from 'react'
import ProductSmallImages from './ProductSmallImages/ProductSmallImages'
import classes from './ProductImages.module.css'
import { SlippersProductData, SlippersTypes } from '../../../Slippers/SlippersTypes'
import ProductBigImage from './ProductBigImage/ProductBigImage'

interface Props {
    activeSlipperData?: SlippersProductData
    slipper: SlippersTypes
}

const PrdouctImages: React.FC<Props> = ({ activeSlipperData, slipper }) => {

    const [activeImage, setActiveImage] = useState<string>()
    const clickHandler = (key: string) => { setActiveImage(key) }

    useEffect(() => {
        if (activeSlipperData) setActiveImage(Object.keys(activeSlipperData.productShowcase)[0])
    }, [activeSlipperData, setActiveImage])

    return (
        <div className={classes.Wrapper}>
            <ProductSmallImages
                slipper={slipper}
                images={activeSlipperData?.productShowcase}
                clickHandler={clickHandler}
                activeImage={activeImage}
            />
            <ProductBigImage activeSlipperData={activeSlipperData} activeImage={activeImage} />
        </div>
    )
}

export default PrdouctImages
