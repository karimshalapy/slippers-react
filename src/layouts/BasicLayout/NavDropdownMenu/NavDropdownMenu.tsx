import React from 'react'
import classes from './NavDropdownMenu.module.css'
import { CSSTransition } from "react-transition-group"

interface Props {
    show: boolean
}

const NavDropdownMenu: React.FC<Props> = props => {
    return (
        <CSSTransition
            in={props.show}
            timeout={300}
            classNames={{
                enter: classes["DropdownNav-enter"],
                enterActive: classes["DropdownNav-enter-active"],
                exit: classes["DropdownNav-exit"],
                exitActive: classes["DropdownNav-exit-active"],
            }}
            unmountOnExit
        >
            <ul className={classes.DropdownNav}>

            </ul>
        </CSSTransition>
    )
}

export default NavDropdownMenu
