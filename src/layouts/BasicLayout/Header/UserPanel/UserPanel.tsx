import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as User } from '../../../../assets/user-regular.svg'
import classes from './UserPanel.module.css'
import UserPanelDropdown from './UserPanelDropdown/UserPanelDropdown'

interface Props {

}

const UserPanel: React.FC<Props> = props => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const location = useLocation()

    useEffect(() => setDropdownActive(false), [location.pathname])

    return (
        <div className={`${classes.UserPanelContainer} ${location.pathname === "/auth" ? classes.Hide : ""}`}>
            <div className={classes.UserIconContainer} onClick={() => setDropdownActive(prev => !prev)}>
                <User className={classes.UserIcon} />
            </div>
            <UserPanelDropdown dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
        </div>
    )
}

export default UserPanel
