import React, { useContext } from 'react'
import { SideMenuContext } from '../../Header'
import { MenuTypes } from '../../../../../@types/SideNavMenuTypes'
import classes from './GoBackBtn.module.css'

interface Props {

}

const GoBackBtn: React.FC<Props> = props => {

    const { navigateSideMenu, activeSideMenu, sideMenuOpen } = useContext(SideMenuContext)
    const btnClasses = [classes.GoBackBtn, sideMenuOpen && activeSideMenu !== "main" ? classes.ShowBtn : ""].join(" ")
    const getGoBackText: () => [MenuTypes, string] = () => {
        if (
            activeSideMenu === "men" ||
            activeSideMenu === "women" ||
            activeSideMenu === "discover" ||
            activeSideMenu === "discoverBack" ||
            activeSideMenu === "gift"
        ) return ["main", "main menu"]
        else return ["discoverBack", "discover more"]
    }
    const [goBackType, goBackText] = getGoBackText()
    return (
        <div onClick={navigateSideMenu.bind(null, goBackType, true)} className={btnClasses}>
            <span className={classes.GoBackText}>{goBackText}</span>
        </div>
    )
}

export default GoBackBtn
