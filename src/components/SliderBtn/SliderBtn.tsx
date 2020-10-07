import React from 'react'
import classes from './SliderBtn.module.css'

interface Props {
    type: "prev" | "next",
    sliderBtnClass: string,
}

const SliderBtn: React.FC<Props> = ({ type, sliderBtnClass }) => {
    return <div className={[type === "next" ? classes.SliderNext : classes.SliderPrev, sliderBtnClass].join(" ")}></div>
}

export default SliderBtn
