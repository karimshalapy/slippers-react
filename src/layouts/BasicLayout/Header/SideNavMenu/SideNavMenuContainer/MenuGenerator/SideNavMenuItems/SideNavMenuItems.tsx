import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { sideNavDataInfo } from '../../../SideNavMenuTypes'
import { SideMenuContext } from '../../../SideNavMenu'
import { v4 } from 'uuid'
import classes from './SideNavMenuItems.module.css'

interface Props {
    data: sideNavDataInfo[]
}

const SideNavMenuItems: React.FC<Props> = props => {
    const { navigateMenuFunction, toggleMenu } = useContext(SideMenuContext)

    return (
        <>
            {
                props.data.map(item => {
                    if (item.isNext && item.goTo) {
                        return (
                            <li
                                key={v4()}
                                onClick={navigateMenuFunction.bind(null, item.goTo)}
                                className={classes.SideMenuItem}
                            >
                                <span>{item.text}</span>
                            </li>
                        )
                    } else if (!item.isNext && item.url) {
                        if (item.imgUrl && item.imgAlt) {
                            return (
                                <li
                                    key={v4()}
                                    className={classes.SideMenuItem}
                                >
                                    <a href={item.url} onClick={toggleMenu}>
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                        {item.text}
                                    </a>
                                </li>
                            )
                        } else {
                            return (
                                <li
                                    key={v4()}
                                    className={classes.SideMenuItem}
                                >
                                    <Link to={item.url} onClick={toggleMenu}>{item.text}</Link>
                                </li>
                            )
                        }
                    } else {
                        return null
                    }
                })
            }
        </>
    )
}
export default SideNavMenuItems
