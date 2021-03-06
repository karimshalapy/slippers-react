import React, { memo, useCallback } from 'react'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { SlippersProductData } from '../../../../../@types/SlippersTypes'
import classes from './ProductBigImage.module.css'

interface Props {
    activeSlipperData?: SlippersProductData,
    activeImage?: string,
}

const ProductBigImage: React.FC<Props> = ({ activeSlipperData, activeImage }) => {

    const getRenderData = useCallback(() => {
        if (
            activeSlipperData
            && activeImage
        ) {
            if (activeImage === "classicVideo" || activeImage === "flowVideo") {
                return (
                    <div className={`${classes.ImageContainer} ${classes.BackgroundFix}`}>
                        <video className={classes.ProductBigImage} autoPlay>
                            <source type="video/mp4" src={
                                activeImage === "classicVideo"
                                    ?
                                    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fclassic%2FclassicThumbVideo2.mp4?alt=media"
                                    :
                                    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fflow%2Fflow-video-pdp-final.mp4?alt=media"
                            } />
                        </video>
                    </div>
                )
            } else if (Object.keys(activeSlipperData.productShowcase).includes(activeImage)) {
                return (
                    <div className={`${classes.ImageContainer} ${classes.BackgroundFix}`}>
                        <img
                            src={activeSlipperData.productShowcase[activeImage].imgUrl}
                            alt={activeSlipperData.productShowcase[activeImage].imgAlt}
                            className={classes.ProductBigImage}
                        />
                    </div>
                )

            }
        } else {
            return (<div className={`${classes.ImageContainer} Loading`}></div>)
        }
    }, [activeImage, activeSlipperData])

    return (
        <FadeSwitchTransition fast transitionKey={`active-image-${v4()}-changed`}>
            {nodeRef => (
                <div ref={nodeRef}>
                    { getRenderData()}
                </div>
            )}
        </FadeSwitchTransition>
    )
}

export default memo(ProductBigImage)
