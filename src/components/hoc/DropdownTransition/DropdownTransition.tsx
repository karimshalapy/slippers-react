import React, { ReactElement, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './DropdownTransition.module.css'

interface Props {
    show: boolean,
    children: (x: React.MutableRefObject<null>) => ReactElement
}

const NavDropdownMenu: React.FC<Props> = props => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={300}
            classNames={{
                enter: classes["Dropdown-enter"],
                enterActive: classes["Dropdown-enter-active"],
                exit: classes["Dropdown-exit"],
                exitActive: classes["Dropdown-exit-active"],
            }}
            mountOnEnter
            unmountOnExit
        >
            {props.children(nodeRef)}
        </CSSTransition>
    )
}

export default NavDropdownMenu
