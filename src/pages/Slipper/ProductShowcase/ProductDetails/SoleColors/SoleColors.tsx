import React from 'react'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'

interface Props {
    productData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "upper" | "sole") => void,
    activeUpperColor?: string
}

const SoleColors: React.FC<Props> = props => {
    return (
        <>
            {
                props.productData && props.activeUpperColor
                    ?
                    props.productData.filter(item => item.upperColorLongText === props.activeUpperColor).map(item => (
                        <button key={item.colorText} onClick={props.updateGlobalActiveColorState.bind(null, item.soleColorLongText, "sole")}>{item.soleColorLongText}</button>
                    ))
                    :
                    null
            }
        </>
    )
}

export default SoleColors
