import React, { useState, createContext } from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import GoBackBtn from './GoBackBtn/GoBackBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'
import classes from './SideNavMenu.module.css'
import { MenuTypes, sideNavContextValues } from './SideNavMenuTypes'

interface Props {

}

export const SideMenuContext = createContext<sideNavContextValues>({
    navigateMenuFunction: () => { },
    activeMenu: "main",
    toggleMenu: () => { },
})

const SideNavMenu: React.FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<MenuTypes>("main")

    const navigateMenuFunction = (menu: MenuTypes) => {
        setActiveMenu(menu)
    };

    const toggleBtn = () => {
        setOpen(prevOpen => !prevOpen)
        setActiveMenu("main")
    }

    return (
        <>
            <SideMenuContext.Provider value={{ navigateMenuFunction, activeMenu, toggleMenu: toggleBtn }}>
                <div className={classes.Background}>
                    <SideMenuBtn open={open} clickHandler={toggleBtn} />
                    <GoBackBtn show={open && activeMenu !== "main"} />
                </div>
                <SideNavMenuContainer open={open} />
            </SideMenuContext.Provider>
        </>
    )
}

export default SideNavMenu
