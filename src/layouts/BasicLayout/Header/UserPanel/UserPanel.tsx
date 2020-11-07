import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as User } from '../../../../assets/user-regular.svg'
import { ReactComponent as Cart } from '../../../../assets/shopping-cart.svg'
import classes from './UserPanel.module.css'
import UserPanelDropdown from './UserPanelDropdown/UserPanelDropdown'
import { FirebaseUserContext } from '../../../../App'

interface Props {

}

const UserPanel: React.FC<Props> = props => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const location = useLocation()
    const user = useContext(FirebaseUserContext)

    useEffect(() => setDropdownActive(false), [location.pathname])

    return (
        <div className={classes.UserPanelContainer}>
            <Link
                to="/cart"
                className={`${classes.IconContainer} ${location.pathname === "/cart" || !user ? classes.Hide : ""}`}
            >
                <Cart className={classes.Icon} />
            </Link>
            <div
                onClick={() => setDropdownActive(prev => !prev)}
                className={`${classes.IconContainer} ${location.pathname === "/auth" ? classes.Hide : ""}`}
            >
                <User className={classes.Icon} />
            </div>
            <UserPanelDropdown dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
        </div>
    )
}

export default UserPanel
