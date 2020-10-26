import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getProdcuts } from '../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import { SlippersTypes } from '../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../Slippers/SlippersTypes'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductImages from './ProductImages/ProductImages'
import classes from './ProductShowcase.module.css'

interface Props {

}

const ProductShowcase: React.FC<Props> = props => {

    const slipper = useLocation().pathname.split("/").pop() as SlippersTypes
    const productsData = useSelector((state: RootReducer) => state.productsData.original?.productsData)
    const dispatch = useDispatch()
    const [pageProductsData, setPageProductsData] = useState<SlippersProductData[]>()
    const [upperColorsAvailable, setUpperColorsAvailable] = useState<string[]>([])
    const [activeUpperColor, setActiveUpperColor] = useState<string>()
    const [activeSoleColor, setActiveSoleColor] = useState<string>()
    const [activeSlipperData, setActiveSlipperData] = useState<SlippersProductData>()

    const duplicatesSet = new Set(); //has to be axcluded from the useCallback deps because this is initiated each render cycle and it's only for the duplicates so no need for a state for that, in other words that's the expected behavior
    //a function that filters and maps the full data array into a string array of available upper colors without duplicates using the set above
    const getUpperColorsAvailable = useCallback(() => {
        if (pageProductsData) {
            return pageProductsData.filter(item => {
                const duplicate = duplicatesSet.has(item.upperColorShortened)
                duplicatesSet.add(item.upperColorShortened)
                return !duplicate
            }).map(item => item.upperColorLongText)
        } else return []

        //the next comment is used to ignore the useCallback's dependancy because if we add the set it will render each cycle and we don't want that
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageProductsData])

    //useEffect to fetch the data from the server
    useEffect(() => { dispatch(getProdcuts()) }, [dispatch])
    //useEffect to filter the data to only match the slipper in this page and updates the state accordingly
    useEffect(() => { if (productsData) setPageProductsData(productsData.filter(item => item.collection === slipper)) }, [productsData, slipper])
    //useEffect to map the data to only a string array of the available upper colors using getUpperColorsAvailable() and sets the state with it and also sets the default active colors to the first element in the full data array
    useEffect(() => {
        if (pageProductsData) {
            setUpperColorsAvailable(getUpperColorsAvailable())
            setActiveUpperColor(pageProductsData[0].upperColorLongText)
            setActiveSoleColor(pageProductsData[0].soleColorLongText)
        }
    }, [pageProductsData, getUpperColorsAvailable])
    //useEffect to set the active slipper data state whenever the colors change
    useEffect(() => {
        if (pageProductsData) {
            setActiveSlipperData(
                pageProductsData
                    .filter(item => {
                        return item.upperColorLongText === activeUpperColor && item.soleColorLongText === activeSoleColor
                    })[0]
            )
        }
    }, [activeUpperColor, activeSoleColor, pageProductsData])

    const updateGlobalActiveColorState = useCallback((color: string, type: "sole" | "upper") => {
        if (type === "upper") setActiveUpperColor(color)
        if (type === "sole") setActiveSoleColor(color)
    }, [])

    return (
        <section className={classes.ProductShowcase}>
            <div className={classes.ProductShowcaseWrapper}>
                <ProductImages
                    activeSlipperData={activeSlipperData}
                    slipper={slipper}
                />
                <ProductDetails
                    activeSoleColor={activeSoleColor}
                    activeUpperColor={activeUpperColor}
                    pageProductsData={pageProductsData}
                    slipper={slipper}
                    updateGlobalActiveColorState={updateGlobalActiveColorState}
                    upperColorsAvailable={upperColorsAvailable}
                    activeSlipperData={activeSlipperData}
                />
            </div>
        </section>
    )
}

export default ProductShowcase
