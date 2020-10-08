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

    const getClassName = (className: string) => props.fast ? className.concat("-fast") : className


    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={props.transitionKey}
                classNames={{
                    enter: classes[getClassName("fade-enter")],
                    enterActive: classes[getClassName("fade-enter-active")],
                    exit: classes[getClassName("fade-exit")],
                    exitActive: classes[getClassName("fade-exit-active")],
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
