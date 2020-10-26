import React, { memo } from 'react'
import { v4 } from 'uuid'
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
                <fieldset>
                    {
                        props.pageProductsData
                            ?
                            <>
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
                            </>
                            :
                            <>
                                <legend className={`${classes.PerserveWidthWhenLoading} Loading`}>&nbsp;</legend>
                                {
                                    [...Array(5)].map(() => (
                                        <UpperColor
                                            key={v4()}
                                            updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                                            upperColor=""
                                            loading
                                        />
                                    ))
                                }
                            </>
                    }
                </fieldset>
                <fieldset>
                    {
                        props.pageProductsData
                            ?
                            <>
                                <legend>choose your sole color <span className={classes.ActiveColorSpan}> &nbsp;| &nbsp;{props.activeSoleColor}</span></legend>
                                <SoleColors
                                    pageProductsData={props.pageProductsData}
                                    updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                                    activeUpperColor={props.activeUpperColor}
                                    activeSoleColor={props.activeSoleColor}
                                />
                            </>
                            :
                            <>
                                <legend className={`${classes.PerserveWidthWhenLoading} Loading`}>&nbsp;</legend>
                                <SoleColors
                                    updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                                />
                            </>
                    }
                </fieldset>
            </form>

        </div>
    )
}

export default memo(ProductDetails)
