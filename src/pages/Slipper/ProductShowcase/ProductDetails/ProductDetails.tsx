import React, { memo } from 'react'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import classes from './ProductDetails.module.css'
import SoleColorsFieldset from './SoleColorsFieldset/SoleColorsFieldset'
import UpperColorsFieldset from './UpperColorsFieldset/UpperColorsFieldset'

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
                            <p className={`${classes.PerserveWidthWhenLoading} Loading`}>&nbsp;</p>
                            <h2 className={`${classes.PerserveWidthWhenLoading} Loading`}>&nbsp;</h2>
                            <data className={`${classes.PerserveWidthWhenLoading} Loading`}>&nbsp;</data>
                        </>
                }
            </div>
            <form className={classes.ColorsForm}>
                <UpperColorsFieldset
                    updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                    upperColorsAvailable={props.upperColorsAvailable}
                    activeSoleColor={props.activeSoleColor}
                    activeUpperColor={props.activeUpperColor}
                    pageProductsData={props.pageProductsData}
                    PerserveWidthWhenLoadingClass={classes.PerserveWidthWhenLoading} //passed down the class as props because it has shared styling accross upper, lower colors and the details header
                />
                <SoleColorsFieldset
                    updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                    activeSoleColor={props.activeSoleColor}
                    activeUpperColor={props.activeUpperColor}
                    pageProductsData={props.pageProductsData}
                    PerserveWidthWhenLoadingClass={classes.PerserveWidthWhenLoading} //passed down the class as props because it has shared styling accross upper, lower colors and the details header
                />
            </form>
        </div>
    )
}

export default memo(ProductDetails)
