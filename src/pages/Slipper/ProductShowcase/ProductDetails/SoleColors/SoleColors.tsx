import React from 'react'
import { SlippersProductData } from '../../../../Slippers/SlippersTypes'
import classes from './SoleColors.module.css'

interface Props {
    pageProductsData?: SlippersProductData[],
    updateGlobalActiveColorState: (color: string, type: "upper" | "sole") => void,
    activeUpperColor?: string,
    activeSoleColor?: string,
}

const SoleColors: React.FC<Props> = props => {
    return (
        <div className={classes.SoleColrosContainer}>
            {
                props.pageProductsData && props.activeUpperColor
                    ?
                    props.pageProductsData.filter(item => item.upperColorLongText === props.activeUpperColor).map(item => (
                        <React.Fragment key={item.soleColorLongText}>
                            <input
                                className={classes.RadioButton}
                                type="radio"
                                name="soleColor"
                                id={`sole-${item.soleColorLongText}`}
                                value={item.soleColorLongText}
                                checked={props.activeSoleColor === item.soleColorLongText}
                                onChange={props.updateGlobalActiveColorState.bind(null, item.soleColorLongText, "sole")}
                            />
                            <label className={`${classes.SoleColor} ${classes[item.soleColorShortened]}`} htmlFor={`sole-${item.soleColorLongText}`}></label>
                        </React.Fragment>
                    ))
                    :
                    null
            }
        </div>
    )
}

export default SoleColors
