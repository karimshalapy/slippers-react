import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as User } from '../../../../assets/user-regular.svg'
import classes from './UserPanel.module.css'
import UserPanelDropdown from './UserPanelDropdown/UserPanelDropdown'
import CartIconContainer from './CartIconContainer/CartIconContainer'

interface Props {
    hide: boolean
}

const UserPanel: React.FC<Props> = ({ hide }) => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const location = useLocation()

    useEffect(() => setDropdownActive(false), [location.pathname, hide])

    return (
        <div className={classes.UserPanelContainer}>
            <CartIconContainer hide={hide}
                iconClass={classes.Icon}
                iconContainerClass={classes.IconContainer}
                hideIconClass={classes.Hide}
            />
            <div
                onClick={() => setDropdownActive(prev => !prev)}
                className={`${classes.IconContainer} ${location.pathname === "/auth" || hide ? classes.Hide : ""}`}
            >
                <User className={classes.Icon} />
            </div>
            <UserPanelDropdown dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
        </div>
    )
}

export default UserPanel
