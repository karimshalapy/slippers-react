import React, { useReducer, useCallback } from 'react'
import classes from './Header.module.css'
import { HeaderReducer, HeaderClickHandler } from '../../../@types/HeaderTypes'
import { reducer, initialState } from './HeaderReducer'
import { ReactComponent as Logo } from '../../../assets/mahabis-logo.svg'
import HeaderNavItems from './HeaderNavItems/HeaderNavItems'
import SideNavMenu from './SideNavMenu/SideNavMenu'
import UserPanel from './UserPanel/UserPanel'

const Header: React.FC = () => {

    const [state, dispatch] = useReducer<HeaderReducer>(reducer, initialState)

    const changeDropDown = useCallback<HeaderClickHandler>((actionType) => {
        dispatch({ type: actionType })
    }, [])

    const resetState = useCallback(() => {
        dispatch({ type: "init" })
    }, [])


    return (
        <header className={classes.MainNavHeader}>
            <a href="/" className={classes.LogoLink}>
                <Logo className={classes.Logo} />
                <span className={classes.LogoText}>mahabis</span>
            </a>
            <HeaderNavItems openState={state} reset={resetState} clickHandler={changeDropDown} />
            <SideNavMenu />
            <UserPanel />
        </header>
    )
}

export default Header
