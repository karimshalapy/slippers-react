import React, { useCallback, useEffect, useState } from 'react'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes';
import classes from './UpperColor.module.css'

interface Props {
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (x: string, type: "sole" | "upper") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
    upperColor: string,
    loading?: boolean
}

const UpperColor: React.FC<Props> = ({
    pageProductsData,
    updateGlobalActiveColorState,
    activeUpperColor,
    activeSoleColor,
    upperColor,
    loading
}) => {

    const [activeLocalSoleColor, setActiveLocalSoleColor] = useState<string>()
    const [localProductsData, setLocalProductsData] = useState<SlippersProductData[]>()
    const [localActiveProduct, setLocalActiveProduct] = useState<SlippersProductData>()

    useEffect(() => { //useEffect to run once the component mount and set the local active sole to a default color
        if (pageProductsData) {
            const componentColorData = pageProductsData.filter(item => item.upperColorLongText === upperColor)
            setLocalProductsData(componentColorData)
            setActiveLocalSoleColor(componentColorData[0].soleColorLongText)
        }
    }, [pageProductsData, upperColor])

    //useEffect to run when the global sole color changes to update the local one if available
    useEffect(() => {
        if (
            localProductsData
            && activeSoleColor
            && localProductsData.map(item => item.soleColorLongText).includes(activeSoleColor)
        ) {
            setActiveLocalSoleColor(activeSoleColor)
        }
    }, [activeSoleColor, localProductsData])

    //useEffect to set the local active product to use its image in the label and this will update if the global sole color is available with the component upper color
    useEffect(() => {
        if (localProductsData && activeLocalSoleColor) {
            setLocalActiveProduct(localProductsData.filter(item => item.soleColorLongText === activeLocalSoleColor)[0])
        }
    }, [activeLocalSoleColor, localProductsData])

    const changeHandler = useCallback(() => {
        if (activeUpperColor && activeLocalSoleColor) {
            updateGlobalActiveColorState(upperColor, "upper")
            updateGlobalActiveColorState(activeLocalSoleColor, "sole")
        }
    }, [activeLocalSoleColor, updateGlobalActiveColorState, activeUpperColor, upperColor])

    return (
        <>
            <input
                className={classes.RadioButton}
                type="radio"
                id={`upper-${upperColor}`}
                name="upperColor" value={upperColor}
                checked={activeUpperColor === upperColor}
                onChange={changeHandler}
            />
            <label className={[classes.ProductLabel, loading ? "Loading" : ""].join(" ")} htmlFor={`upper-${upperColor}`}>
                <div className={classes.ProductLabelImageContainer}>
                    <img src={localActiveProduct?.mainImageUrl} alt={localActiveProduct?.mainImageAlt} />
                </div>
            </label>
        </>
    )
}

export default UpperColor
