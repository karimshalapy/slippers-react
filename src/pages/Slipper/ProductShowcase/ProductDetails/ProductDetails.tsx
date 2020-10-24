import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getProdcuts } from '../../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import classes from './ProductDetails.module.css'
import SoleColors from './SoleColors/SoleColors'
import UpperColor from './UpperColor/UpperColor'

interface Props {

}

const ProductDetails: React.FC<Props> = props => {


    const detailsDummyData: { [item in SlippersTypes]: string } = {
        classic: "WARM. VERSATILE. COMFORTABLE.",
        canvas: "WOOL-LINED SLIPPERS",
        luxe: "PREMIUM NUBUCK LEATHER SLIPPERS",
        flow: "FLEXIBLE. LIGHTWEIGHT. COMFORTABLE."
    }
    const slipper = useLocation().pathname.split("/").pop() as SlippersTypes
    const productsData = useSelector((state: RootReducer) => state.productsData.original?.productsData)
    const dispatch = useDispatch()
    const [productData, setProductData] = useState<SlippersProductData[]>()
    const [upperColorsAvailable, setUpperColorsAvailable] = useState<string[]>([])
    const [activeUpperColor, setActiveUpperColor] = useState<string>()
    const [activeSoleColor, setActiveSoleColor] = useState<string>()

    const duplicatesSet = new Set(); //has to be axcluded from the useCallback deps because this is initiated each render cycle and it's only for the duplicates so no need for a state for that, in other words that's the expected behavior
    const getUpperColorsAvailable = useCallback(() => {
        if (productData) {
            return productData.filter(item => {
                const duplicate = duplicatesSet.has(item.upperColorShortened)
                duplicatesSet.add(item.upperColorShortened)
                return !duplicate
            }).map(item => item.upperColorLongText)
        } else return []

        //the next comment is used to ignore the useCallback's dependancy because if we add the set it will render each cycle and we don't want that
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productData])

    useEffect(() => { dispatch(getProdcuts()) }, [dispatch])
    useEffect(() => { if (productsData) setProductData(productsData.filter(item => item.collection === slipper)) }, [productsData, slipper])
    useEffect(() => {
        if (productData) {
            setUpperColorsAvailable(getUpperColorsAvailable())
            setActiveUpperColor(productData[0].upperColorLongText)
            setActiveSoleColor(productData[0].soleColorLongText)
        }
    }, [productData, getUpperColorsAvailable])

    const updateGlobalActiveColorState = useCallback((color: string, type: "sole" | "upper") => {
        if (type === "upper") setActiveUpperColor(color)
        if (type === "sole") setActiveSoleColor(color)
    }, [])

    return (
        <div className={classes.ProductDetails}>
            <p>{detailsDummyData[slipper]}</p>
            <h2>mahabis {slipper}</h2>
            <data value={109}>$109</data>
            <p>active color is: {activeUpperColor} &amp; {activeSoleColor}</p>
            <legend>choose your upper color:</legend>
            {
                upperColorsAvailable.map(item => (
                    <UpperColor
                        key={item}
                        productData={productData}
                        updateGlobalActiveColorState={updateGlobalActiveColorState}
                        activeUpperColor={activeUpperColor}
                        activeSoleColor={activeSoleColor}
                        upperColor={item}
                    />
                ))
            }
            <legend>choose your sole color:</legend>
            <SoleColors productData={productData} updateGlobalActiveColorState={updateGlobalActiveColorState} activeUpperColor={activeUpperColor} />

        </div>
    )
}

export default memo(ProductDetails)
