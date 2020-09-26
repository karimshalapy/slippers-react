import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataInfo } from '../../SideNavMenuTypes'
import { SideMenuContext } from '../../SideNavMenu'
import classes from './SideNavMenuItem.module.css'

const SideNavMenuItem: React.FC<DataInfo> = props => {
    const { nextMenuFunction } = useContext(SideMenuContext)

    if (props.imgUrl) {
        return null
    } else if (props.isNext) {
        return <li onClick={nextMenuFunction.bind(null, props.text)} className={classes.SideMenuItem}>
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
