import React from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import GoBackBtn from './GoBackBtn/GoBackBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'
import classes from './SideNavMenu.module.css'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {


    return (
        <>
            <div className={classes.Background}>
                <SideMenuBtn />
                <GoBackBtn />
            </div>
            <SideNavMenuContainer />
        </>
    )
}

export default SideNavMenu
