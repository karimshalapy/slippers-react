import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataInfo } from '../../SideNavMenuTypes'
import { SideMenuContext } from '../../SideNavMenu'
import classes from './SideNavMenuItem.module.css'

const SideNavMenuItem: React.FC<DataInfo> = props => {
    const { navigateMenuFunction } = useContext(SideMenuContext)

    if (props.imgUrl) {
        return <li className={classes.SideMenuItem}></li>
    } else if (props.isNext && props.goTo) {
        return <li onClick={navigateMenuFunction.bind(null, props.goTo)} className={classes.SideMenuItem}>
            {props.text}
        </li>
    } else if (!props.isNext && props.link) {
        return <li className={classes.SideMenuItem}>
            <Link to={props.link}>{props.text}</Link>
        </li>
    } else {
        return null
    }
}

export default SideNavMenuItem
