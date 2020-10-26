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
            <div className={classes.ProductDetailsHeadingWrapper}>
                <p>{detailsDummyData[props.slipper]}</p>
                <h2>mahabis {props.slipper}</h2>
                <data value={props.activeSlipperData?.price.usd}>{"$" + props.activeSlipperData?.price.usd}</data>
            </div>
            <form className={classes.ColorsForm}>
                <fieldset>
                    <legend>choose your upper color <span className={classes.ActiveColorSpan}> &nbsp;| &nbsp;{props.activeUpperColor}</span></legend>
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
                </fieldset>
                <fieldset>
                    <legend>choose your sole color <span className={classes.ActiveColorSpan}> &nbsp;| &nbsp;{props.activeSoleColor}</span></legend>
                    <SoleColors
                        pageProductsData={props.pageProductsData}
                        updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                        activeUpperColor={props.activeUpperColor}
                        activeSoleColor={props.activeSoleColor}
                    />
                </fieldset>
            </form>

        </div>
    )
}

export default memo(ProductDetails)
