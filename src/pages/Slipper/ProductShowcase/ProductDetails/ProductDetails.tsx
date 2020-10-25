import React, { memo } from 'react'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import classes from './ProductDetails.module.css'
import SoleColors from './SoleColors/SoleColors'
import UpperColor from './UpperColor/UpperColor'

interface Props {
    slipper: SlippersTypes,
    activeUpperColor?: string,
    activeSoleColor?: string,
    upperColorsAvailable: string[],
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "sole" | "upper") => void,
    activeSlipperData?: SlippersProductData

}

const ProductDetails: React.FC<Props> = props => {


    const detailsDummyData: { [item in SlippersTypes]: string } = {
        classic: "WARM. VERSATILE. COMFORTABLE.",
        canvas: "WOOL-LINED SLIPPERS",
        luxe: "PREMIUM NUBUCK LEATHER SLIPPERS",
        flow: "FLEXIBLE. LIGHTWEIGHT. COMFORTABLE."
    }

    return (
        <div className={classes.ProductDetails}>
            <p>{detailsDummyData[props.slipper]}</p>
            <h2>mahabis {props.slipper}</h2>
            <data value={props.activeSlipperData?.price.usd}>$ {props.activeSlipperData?.price.usd}</data>
            <p>active color is: {props.activeUpperColor} &amp; {props.activeSoleColor}</p>
            <legend>choose your upper color:</legend>
            {
                props.upperColorsAvailable.map(item => (
                    <UpperColor
                        key={item}
                        pageProductsData={props.pageProductsData}
                        updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                        activeUpperColor={props.activeUpperColor}
                        activeSoleColor={props.activeSoleColor}
                        upperColor={item}
                    />
                ))
            }
            <legend>choose your sole color:</legend>
            <SoleColors pageProductsData={props.pageProductsData} updateGlobalActiveColorState={props.updateGlobalActiveColorState} activeUpperColor={props.activeUpperColor} />

        </div>
    )
}

export default memo(ProductDetails)
