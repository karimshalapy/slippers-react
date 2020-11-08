import React, { useContext } from 'react'
import { SideMenuContext } from '../SideNavMenu'
import { MenuTypes } from '../../../../../@types/SideNavMenuTypes'
import classes from './GoBackBtn.module.css'

interface Props {
    show: boolean
}

const GoBackBtn: React.FC<Props> = props => {

    const { navigateMenuFunction, activeMenu } = useContext(SideMenuContext)
    const btnClasses = [classes.GoBackBtn, props.show ? classes.ShowBtn : ""].join(" ")
    const getGoBackText: () => [MenuTypes, string] = () => {
        if (
            activeMenu === "men" ||
            activeMenu === "women" ||
            activeMenu === "discover" ||
            activeMenu === "discoverBack" ||
            activeMenu === "gift"
        ) return ["main", "main menu"]
        else return ["discoverBack", "discover more"]
    }
    const [goBackType, goBackText] = getGoBackText()
    return (
        <div onClick={navigateMenuFunction.bind(null, goBackType, true)} className={btnClasses}>
            <span className={classes.GoBackText}>{goBackText}</span>
        </div>
    )
}

export default GoBackBtn
