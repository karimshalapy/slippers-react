import React, { ReactElement, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './Transitions.module.css'

interface Props {
    show: boolean,
    children: (x: React.MutableRefObject<null>) => ReactElement,
    type: "slideUp" | "slideDown"
}

const Transitions: React.FC<Props> = props => {
    const nodeRef = useRef(null)

    let transitionClasses = {};
    if (props.type === "slideDown") transitionClasses = {
        enter: classes["slideDown-enter"],
        enterActive: classes["slideDown-enter-active"],
        exit: classes["slideDown-exit"],
        exitActive: classes["slideDown-exit-active"],
    }
    else if (props.type === "slideUp") transitionClasses = {
        enter: classes["slideUp-enter"],
        enterActive: classes["slideUp-enter-active"],
        exit: classes["slideUp-exit"],
        exitActive: classes["slideUp-exit-active"]
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            classNames={transitionClasses}
            mountOnEnter
            unmountOnExit
            addEndListener={(done: () => void) => {
                const currentTarget = nodeRef.current as unknown as HTMLDivElement | HTMLElement
                currentTarget.addEventListener("transitionend", done, false)
            }}
        >
            {props.children(nodeRef)}
        </CSSTransition>
    )
}

export default Transitions
