import React, { useState } from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const toggleBtn = () => {
        setOpen(prevOpen => !prevOpen)
    }
    return (
        <>
            <SideMenuBtn open={open} clickHandler={toggleBtn} />
            <SideNavMenuContainer />
        </>
    )
}

export default SideNavMenu
