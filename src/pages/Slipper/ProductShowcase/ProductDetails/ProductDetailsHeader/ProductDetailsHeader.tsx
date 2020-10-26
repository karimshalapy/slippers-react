import React from 'react'
import { SlippersTypes } from '../../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'
import classes from './ProductDetailsHeader.module.css'

interface Props {
    slipper: SlippersTypes,
    activeSlipperData?: SlippersProductData,
    PerserveWidthWhenLoadingClass: string
}

const ProductDetailsHeader: React.FC<Props> = props => {

    const detailsDummyData: { [item in SlippersTypes]: string } = {
        classic: "WARM. VERSATILE. COMFORTABLE.",
        canvas: "WOOL-LINED SLIPPERS",
        luxe: "PREMIUM NUBUCK LEATHER SLIPPERS",
        flow: "FLEXIBLE. LIGHTWEIGHT. COMFORTABLE."
    }

    return (
        <div className={classes.ProductDetailsHeaderWrapper}>
            {
                props.activeSlipperData
                    ?
                    <>
                        <p>{detailsDummyData[props.slipper]}</p>
                        <h2>mahabis {props.slipper}</h2>
                        <data value={props.activeSlipperData?.price.usd}>{"$" + props.activeSlipperData?.price.usd}</data>
                    </>
                    :
                    <>
                        <p className={`${props.PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</p>
                        <h2 className={`${props.PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</h2>
                        <data className={`${props.PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</data>
                    </>
            }
        </div>
    )
}

export default ProductDetailsHeader
