import React, { useState, createContext } from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'
import classes from './SideNavMenu.module.css'
import { MenuTypes, ContextValues } from './SideNavMenuTypes'

interface Props {

}

export const SideMenuContext = createContext<ContextValues>({
    nextMenuFunction: () => { },
    activeMenu: "main",
})

const SideNavMenu: React.FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<MenuTypes>("main")

    const nextMenuFunction = (menu: MenuTypes) => {
        console.log(`[SideNavMenu.tsx] Setting Active Menu to "${menu}"`)
        setActiveMenu(menu)
    };

    const toggleBtn = () => {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <>
            <div className={classes.Container}>
                <SideMenuBtn open={open} clickHandler={toggleBtn} />
            </div>
            <SideMenuContext.Provider value={{ nextMenuFunction, activeMenu }}>
                <SideNavMenuContainer open={open} />
            </SideMenuContext.Provider>
        </>
    )
}

export default SideNavMenu
