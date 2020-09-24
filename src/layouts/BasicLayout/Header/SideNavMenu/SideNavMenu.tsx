import React, { useState } from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'
import classes from './SideNavMenu.module.css'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const toggleBtn = () => {
        setOpen(prevOpen => !prevOpen)
    }
    return (
        <>
            <div className={classes.Container}>
                <SideMenuBtn open={open} clickHandler={toggleBtn} />
            </div>
            <SideNavMenuContainer open={open} />
        </>
    )
}

export default SideNavMenu
