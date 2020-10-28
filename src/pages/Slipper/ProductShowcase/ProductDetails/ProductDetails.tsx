import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import SlipperFeatures from '../../../../components/SlipperFeatures/SlipperFeatures'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import classes from './ProductDetails.module.css'
import ProductDetailsHeader from './ProductDetailsHeader/ProductDetailsHeader'
import ProductSizes from './ProductSizes/ProductSizes'
import SoleColorsFieldset from './SoleColorsFieldset/SoleColorsFieldset'
import UpperColorsFieldset from './UpperColorsFieldset/UpperColorsFieldset'

interface Props {
    slipper: SlippersTypes,
    activeUpperColor?: string,
    activeSoleColor?: string,
    upperColorsAvailable: string[],
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "sole" | "upper") => void,
    activeSlipperData?: SlippersProductData,
    activeGender?: "men" | "women",
    setActiveGender: React.Dispatch<React.SetStateAction<"men" | "women" | undefined>>,
    activeSize?: number,
    setActiveSize: React.Dispatch<React.SetStateAction<number | undefined>>


}

const ProductDetails: React.FC<Props> = props => {

    const slipperFeaturesArray = useSelector((state: RootReducer) => {
        return state.mainResources.slippersTypeSwiper
            ?.filter(item => item.type === props.slipper)[0].features
    })
    const formIsValid = () => {
        return !!(props.activeGender && props.activeSize && props.activeUpperColor && props.activeSoleColor)
    }

    return (
        <div className={classes.ProductDetails}>
            <ProductDetailsHeader
                slipper={props.slipper}
                activeSlipperData={props.activeSlipperData}
                PerserveWidthWhenLoadingClass={classes.PerserveWidthWhenLoading} //passed down the class as props because it has shared styling accross upper, lower colors and the details header
            />
            <form className={classes.ColorsForm} onSubmit={e => e.preventDefault()}>
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
                <ProductSizes
                    activeGender={props.activeGender}
                    setActiveGender={props.setActiveGender}
                    activeSize={props.activeSize}
                    setActiveSize={props.setActiveSize}
                    activeSlipperData={props.activeSlipperData}
                    PerserveWidthWhenLoadingClass={classes.PerserveWidthWhenLoading} //passed down the class as props because it has shared styling accross upper, lower colors and the details header
                />
                <button className={classes.addToCartBtn} disabled={!formIsValid()}> add to cart </button>
                {!formIsValid()
                    ?
                    <p>You have to select all fields above to add to cart</p>
                    :
                    null
                }
            </form>
            <SlipperFeatures features={slipperFeaturesArray} wrapperClassname={classes.SlipperFeaturesWrapper} featureClassname={classes.FeatureOverride} />
        </div>
    )
}

export default memo(ProductDetails)
