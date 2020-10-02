import React, { ReactElement, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classes from './FadeSwitchTransition.module.css'

interface Props {
    switch: boolean,
    keyText: string,
    children: (x: React.RefObject<HTMLDivElement>) => ReactElement
}

const FadeSwitchTransition: React.FC<Props> = props => {
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={props.switch ? props.keyText : `not ${props.keyText}`}
                classNames={{
                    enter: classes["fade-enter"],
                    enterActive: classes["fade-enter-active"],
                    exit: classes["fade-exit"],
                    exitActive: classes["fade-exit-active"],
                }}
                addEndListener={done => nodeRef.current?.addEventListener("transitionend", done, false)}
                nodeRef={nodeRef}
                unmountOnExit
                mountOnEnter
            >
                {props.children(nodeRef)}

            </CSSTransition>
        </SwitchTransition>
    )
}

export default FadeSwitchTransition
