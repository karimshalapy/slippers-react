import React, { useCallback, useEffect, useState } from 'react'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes';

interface Props {
    productData?: SlippersProductData[],
    updateGlobalActiveColorState: (x: string, type: "sole" | "upper") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
    upperColor: string
}

const UpperColor: React.FC<Props> = ({ productData, updateGlobalActiveColorState, activeUpperColor, activeSoleColor, upperColor }) => {

    const [activeLocalSoleColor, setActiveLocalSoleColor] = useState<string>()
    const [localProductsData, setLocalProductsData] = useState<SlippersProductData[]>()

    useEffect(() => { //useEffect to run once the component mount and set the local active sole to a default color
        if (productData) {
            const componentColorData = productData.filter(item => item.upperColorLongText === upperColor)
            setLocalProductsData(componentColorData)
            setActiveLocalSoleColor(componentColorData[0].soleColorLongText)
        }
    }, [productData, upperColor])

    useEffect(() => { //useEffect to run when the global sole color changes to update the local one if available
        if (
            localProductsData
            && activeSoleColor
            && localProductsData.map(item => item.soleColorLongText).includes(activeSoleColor)
        ) {
            setActiveLocalSoleColor(activeSoleColor)
        }
    }, [activeSoleColor, localProductsData])

    const clickHandler = useCallback(() => {
        if (activeUpperColor && activeLocalSoleColor) {
            updateGlobalActiveColorState(upperColor, "upper")
            updateGlobalActiveColorState(activeLocalSoleColor, "sole")
        }
    }, [activeLocalSoleColor, updateGlobalActiveColorState, activeUpperColor, upperColor])

    return (
        <div>
            <button onClick={clickHandler}>{upperColor}</button>
            <p style={{ display: "inline" }}>local: {activeLocalSoleColor}</p>
        </div>
    )
}

export default UpperColor
