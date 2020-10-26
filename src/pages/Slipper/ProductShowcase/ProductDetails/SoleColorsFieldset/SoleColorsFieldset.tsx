import React from 'react'
import SoleColors from './SoleColors/SoleColors'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'

interface Props {
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "upper" | "sole") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
    PerserveWidthWhenLoadingClass: string
}

const SoleColorsFieldset: React.FC<Props> = props => {
    return (
        <fieldset>
            {
                props.pageProductsData
                    ?
                    <>
                        <legend>choose your sole color <span> &nbsp;| &nbsp;{props.activeSoleColor}</span></legend>
                        <SoleColors
                            pageProductsData={props.pageProductsData}
                            updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                            activeUpperColor={props.activeUpperColor}
                            activeSoleColor={props.activeSoleColor}
                        />
                    </>
                    :
                    <>
                        <legend className={`${props.PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</legend>
                        <SoleColors
                            updateGlobalActiveColorState={props.updateGlobalActiveColorState}
                        />
                    </>
            }
        </fieldset>
    )
}

export default SoleColorsFieldset
