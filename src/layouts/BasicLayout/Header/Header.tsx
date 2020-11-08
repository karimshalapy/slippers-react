import React, { useReducer, useCallback, useState, createContext } from 'react'
import classes from './Header.module.css'
import { HeaderReducer, HeaderClickHandler } from '../../../@types/HeaderTypes'
import { reducer, initialState } from './HeaderReducer'
import { ReactComponent as Logo } from '../../../assets/mahabis-logo.svg'
import HeaderNavItems from './HeaderNavItems/HeaderNavItems'
import SideNavMenu from './SideNavMenu/SideNavMenu'
import UserPanel from './UserPanel/UserPanel'
import { MenuTypes, sideNavContextValues } from '../../../@types/SideNavMenuTypes'


export const SideMenuContext = createContext<sideNavContextValues>({
    navigateSideMenu: () => { },
    activeSideMenu: "main",
    sideMenuOpen: false,
    toggleMenu: () => { },
})

const Header: React.FC = () => {

    const [state, dispatch] = useReducer<HeaderReducer>(reducer, initialState)
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [activeSideMenu, setActiveSideMenu] = useState<MenuTypes>("main")

    const changeDropDown = useCallback<HeaderClickHandler>((actionType) => {
        dispatch({ type: actionType })
    }, [])

    const resetDropdownState = useCallback(() => {
        dispatch({ type: "init" })
    }, [])

    const navigateSideMenu = (menu: MenuTypes) => {
        setActiveSideMenu(menu)
    }

    const toggleMenu = () => {
        setSideMenuOpen(prevOpen => !prevOpen)
        setActiveSideMenu("main")
    }

    return (
        <header className={classes.MainNavHeader}>
            <a href="/" className={classes.LogoLink}>
                <Logo className={classes.Logo} />
                <span className={classes.LogoText}>mahabis</span>
            </a>
            <HeaderNavItems openState={state} reset={resetDropdownState} clickHandler={changeDropDown} />
            <SideMenuContext.Provider value={{ navigateSideMenu, sideMenuOpen, activeSideMenu, toggleMenu }}>
                <SideNavMenu />
            </SideMenuContext.Provider>
            <UserPanel />
        </header>
    )
}

export default Header
