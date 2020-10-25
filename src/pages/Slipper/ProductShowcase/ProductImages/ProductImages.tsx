import React, { useEffect, useState } from 'react'
import ProductSmallImages from './ProductSmallImages/ProductSmallImages'
import classes from './ProductImages.module.css'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { v4 } from 'uuid'

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
            <FadeSwitchTransition fast transitionKey={`active-image-${v4()}-changed`}>
                {nodeRef => (
                    <div className={classes.ImageContainer} ref={nodeRef}>
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
                )}
            </FadeSwitchTransition>
        </div>
    )
}

export default PrdouctImages
