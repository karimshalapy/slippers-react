import React from 'react'
import classes from './Backdrop.module.css'

interface Props {
    show: boolean,
    clickHandler: (e: React.MouseEvent) => void,
    zIndex?: number
}

const Backdrop: React.FC<Props> = props => {
    return props.show ? <div style={{ zIndex: props.zIndex }} className={classes.Backdrop} onClick={props.clickHandler}></div> : null
}

export default Backdrop

