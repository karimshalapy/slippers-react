import React, { memo, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SlipperFeatures from '../../../../components/SlipperFeatures/SlipperFeatures'
import { RootReducer } from '../../../../@types/reducersTypes'
import { SlippersTypes } from '../../../../@types/SlippersSwiperTypes'
import { SlippersProductData } from '../../../../@types/SlippersTypes'
import classes from './ProductDetails.module.css'
import ProductDetailsHeader from './ProductDetailsHeader/ProductDetailsHeader'
import ProductSizes from './ProductSizes/ProductSizes'
import SoleColorsFieldset from './SoleColorsFieldset/SoleColorsFieldset'
import UpperColorsFieldset from './UpperColorsFieldset/UpperColorsFieldset'
import { addToCartRemotely, resetCartState, setCartState } from '../../../../store/actionsIndex/actionIndex'
import { FirebaseUserContext } from '../../../../App'
import { useHistory } from 'react-router-dom'
import CircleSpinner from '../../../../components/CircleSpinner/CircleSpinner'
import Button from '../../../../components/Button/Button'
import ModalGenerator from '../../../../components/hoc/ModalGenerator/ModalGenerator'
import SlipperModalContent from './SlipperModalContent/SlipperModalContent'

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

    const { slipperFeaturesArray, cartLoading, cartError, cartSuccess } = useSelector((state: RootReducer) => {
        return {
            slipperFeaturesArray: state.mainResources.slippersTypeSwiper
                ?.filter(item => item.type === props.slipper)[0].features,
            cartLoading: state.cartData.cartLoading,
            cartError: state.cartData.cartError,
            cartSuccess: state.cartData.cartSuccess
        }
    })
    const user = useContext(FirebaseUserContext)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)
    const formIsValid = () => {
        return !!(props.activeGender && props.activeSize && props.activeUpperColor && props.activeSoleColor)
    }
    const toggleModal = (e?: MouseEvent) => {
        e?.preventDefault()
        setModalOpen(prev => !prev)
        dispatch(resetCartState())
    }
    const addToCart = (e: React.FormEvent) => {
        e.preventDefault()
        if (user) {
            toggleModal()
            dispatch(resetCartState())
            setCartState(true, "loading")
            dispatch(addToCartRemotely(props.activeSlipperData!, props.activeGender!, props.activeSize!, user?.uid))
        }
        else history.push("/auth")
    }

    return (
        <div className={classes.ProductDetails}>
            <ProductDetailsHeader
                slipper={props.slipper}
                activeSlipperData={props.activeSlipperData}
                PerserveWidthWhenLoadingClass={classes.PerserveWidthWhenLoading} //passed down the class as props because it has shared styling accross upper, lower colors and the details header
            />
            <form className={classes.ColorsForm} onSubmit={addToCart}>
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
                <div className={classes.ButtonContainer}>
                    {
                        cartLoading
                            ?
                            <CircleSpinner size={30} />
                            :
                            <Button tomato disabled={!formIsValid()}> add to cart </Button>
                    }
                </div>
                <ModalGenerator closeModalHandler={toggleModal} show={modalOpen}>
                    <SlipperModalContent
                        closeModalHandler={toggleModal}
                        cartError={cartError}
                        cartSuccess={cartSuccess}
                        cartLoading={cartLoading}
                    />
                </ModalGenerator>
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
