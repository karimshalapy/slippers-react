import React, { ReactElement, useRef } from 'react'
import { CSSTransition } from "react-transition-group"

interface Props {
    show: boolean,
    transitionClassNames: {
        enter: string,
        enterActive: string,
        exit: string,
        exitActive: string,
    }
    children: (x: React.MutableRefObject<null>) => ReactElement;
}

const NavDropdownMenu: React.FC<Props> = props => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={300}
            classNames={props.transitionClassNames}
            mountOnEnter
            unmountOnExit
        >
            {props.children(nodeRef)}
        </CSSTransition>
    )
}

export default NavDropdownMenu
