import React, { ReactElement, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classes from './FadeSwitchTransition.module.css'

interface Props {
    transitionKey: string,
    fast?: boolean
    children: (x: React.RefObject<HTMLDivElement>) => ReactElement,
}

const FadeSwitchTransition: React.FC<Props> = props => {
    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={props.transitionKey}
                classNames={{
                    enter: classes["fade-enter"],
                    enterActive: classes[props.fast ? "fade-enter-active-fast" : "fade-enter-active"],
                    exit: classes["fade-exit"],
                    exitActive: classes[props.fast ? "fade-exit-active-fast" : "fade-exit-active"],
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
