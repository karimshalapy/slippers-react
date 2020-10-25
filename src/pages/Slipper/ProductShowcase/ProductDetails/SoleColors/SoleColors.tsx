import React from 'react'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'

interface Props {
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "upper" | "sole") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
}

const SoleColors: React.FC<Props> = props => {
    return (
        <>
            {
                props.pageProductsData && props.activeUpperColor
                    ?
                    props.pageProductsData.filter(item => item.upperColorLongText === props.activeUpperColor).map(item => (
                        <React.Fragment key={item.soleColorLongText}>
                            <input
                                type="radio"
                                name="soleColor"
                                id={`sole-${item.soleColorLongText}`}
                                value={item.soleColorLongText}
                                checked={props.activeSoleColor === item.soleColorLongText}
                                onChange={props.updateGlobalActiveColorState.bind(null, item.soleColorLongText, "sole")}
                            />
                            <label htmlFor={`sole-${item.soleColorLongText}`}>{item.soleColorLongText}</label>
                        </React.Fragment>
                    ))
                    :
                    null
            }
        </>
    )
}

export default SoleColors
