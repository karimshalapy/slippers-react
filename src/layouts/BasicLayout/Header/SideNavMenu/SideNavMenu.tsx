import React, { useState } from 'react'
import classes from './SideNavMenu.module.css'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {
    const [open, setOpen] = useState(false)

    const btnClasses = [classes.SideMenuBtn, open ? classes.Active : ""].join(" ");
    const toggleBtn = () => {
        setOpen(prevOpen => !prevOpen)
    }
    return (
        <div className={btnClasses} onClick={toggleBtn}>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
        </div>
    )
}

export default SideNavMenu
