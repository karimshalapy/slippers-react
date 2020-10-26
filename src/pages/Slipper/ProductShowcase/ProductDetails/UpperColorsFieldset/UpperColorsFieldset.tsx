import React from 'react'
import { v4 } from 'uuid'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'
import UpperColor from './UpperColor/UpperColor'

interface Props {
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (x: string, type: "sole" | "upper") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
    upperColorsAvailable: string[],
    PerserveWidthWhenLoadingClass: string
}

const UpperColors: React.FC<Props> = props => {
    return (
        <fieldset>
            {
                props.pageProductsData
                    ?
                    <>
                        <legend>choose your upper color <span> &nbsp;| &nbsp;{props.activeUpperColor}</span></legend>
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
                        <legend className={`${props.PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</legend>
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
    )
}

export default UpperColors
