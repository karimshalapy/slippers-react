import React, { useContext } from 'react'
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
import GoBackBtn from './GoBackBtn/GoBackBtn'
import SideNavMenuContainer from './SideNavMenuContainer/SideNavMenuContainer'
import classes from './SideNavMenu.module.css'
import Transitions from '../../../../components/hoc/Transitions/Transitions'
import { SideMenuContext } from '../Header'

interface Props {

}

const SideNavMenu: React.FC<Props> = props => {

    const { sideMenuOpen } = useContext(SideMenuContext)

    return (
        <>
            <div className={classes.Background}>
                <SideMenuBtn />
                <GoBackBtn />
            </div>
            <Transitions show={sideMenuOpen} type="slideDown">
                {nodeRef => (
                    <SideNavMenuContainer ref={nodeRef} />
                )}
            </Transitions>
        </>
    )
}

export default SideNavMenu
