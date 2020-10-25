import React from 'react'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'
import classes from './ProductBigImage.module.css'

interface Props {
    activeSlipperData?: SlippersProductData,
    activeImage?: string,
}

const ProductBigImage: React.FC<Props> = props => {
    return (
        <FadeSwitchTransition fast transitionKey={`active-image-${v4()}-changed`}>
            {nodeRef => (
                <div className={`${classes.ImageContainer} Loading`} ref={nodeRef}>
                    {
                        props.activeSlipperData
                            && props.activeImage
                            && Object.keys(props.activeSlipperData.productShowcase).includes(props.activeImage)
                            ?
                            <img
                                src={props.activeSlipperData.productShowcase[props.activeImage].imgUrl}
                                alt={props.activeSlipperData.productShowcase[props.activeImage].imgAlt}
                                className={classes.ProductBigImage}
                            />
                            : null
                    }
                </div>
            )}
        </FadeSwitchTransition>
    )
}

export default ProductBigImage
