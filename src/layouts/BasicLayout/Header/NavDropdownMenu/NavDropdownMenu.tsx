import React, { useRef } from 'react'
import classes from './NavDropdownMenu.module.css'
import { CSSTransition } from "react-transition-group"
import { ActionTypeOptions } from '../HeaderTypes'
import DropdownContent from './DropdownContent/DropdownContent'

interface Props {
    show: boolean,
    type: ActionTypeOptions,
    reset: () => void
}

const NavDropdownMenu: React.FC<Props> = props => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={300}
            classNames={{
                enter: classes["DropdownNav-enter"],
                enterActive: classes["DropdownNav-enter-active"],
                exit: classes["DropdownNav-exit"],
                exitActive: classes["DropdownNav-exit-active"],
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className={classes.DropdownNav} ref={nodeRef}>
                <div className={classes.Container}>
                    <DropdownContent type={props.type} />
                    <span className={classes.CloseBtn} onClick={() => props.reset()}></span>
                </div>
            </div>
        </CSSTransition>
    )
}

export default NavDropdownMenu
