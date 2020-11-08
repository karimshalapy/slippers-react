import React, { useContext } from 'react'
import { SideMenuContext } from '../../Header'
import classes from './SideMenuBtn.module.css'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {

    const { sideMenuOpen, toggleMenu } = useContext(SideMenuContext)

    const btnClasses = [classes.SideMenuBtn, sideMenuOpen ? classes.Active : ""].join(" ")
    return (
        <div className={btnClasses} onClick={toggleMenu}>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
            <span className={classes.Line}></span>
        </div>
    )
}

export default SideNavMenu
