import React from 'react'
import classes from './NavDropdownMenu.module.css'
import Transitions from '../../../../components/hoc/Transitions/Transitions'
import { DropdownMenusTypes } from '../../../../@types/HeaderTypes'
import DropdownContent from './DropdownContent/DropdownContent'

interface Props {
    show: boolean,
    type: DropdownMenusTypes,
    reset: () => void
}

const NavDropdownMenu: React.FC<Props> = props => {
    return (
        <Transitions show={props.show} type="slideDown">
            {(nodeRef) => (
                <div className={classes.DropdownNav} ref={nodeRef}>
                    <div className={classes.Container}>
                        <DropdownContent reset={props.reset} type={props.type} />
                        <span className={props.type !== "gift" ? classes.CloseBtn : ""} onClick={() => props.reset()}></span>
                    </div>
                </div>
            )}
        </Transitions>
    )
}

export default NavDropdownMenu
