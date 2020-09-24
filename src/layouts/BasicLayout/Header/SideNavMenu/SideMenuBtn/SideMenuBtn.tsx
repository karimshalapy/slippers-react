import React from 'react'
import classes from './SideMenuBtn.module.css'

interface Props {
    open: boolean,
    clickHandler: () => void
}

const SideNavMenu: React.FC<Props> = props => {

    const btnClasses = [classes.SideMenuBtn, props.open ? classes.Active : ""].join(" ");
    return (
        <div className={btnClasses} onClick={props.clickHandler}>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
        </div>
    )
}

export default SideNavMenu
