import React from 'react'
import classes from './Backdrop.module.css'

interface Props {
    show: boolean,
    clickHandler: (e: React.MouseEvent) => void
}

const Backdrop: React.FC<Props> = props => {
    return props.show ? <div className={classes.Backdrop} onClick={props.clickHandler}></div> : null
}

export default Backdrop

