import React, { useCallback, useRef } from 'react'
import { sideNavDataInfo } from '../../SideNavMenuTypes'
import SideNavMenuItems from './SideNavMenuItems/SideNavMenuItems'
import { CSSTransition } from 'react-transition-group'
import classes from './MenuGenerator.module.css'

interface Props {
    data: sideNavDataInfo[],
    level: "first" | "second" | "secondRev" | "third",
    enter: boolean
}




const MainMenu: React.FC<Props> = props => {
    const nodeRef = useRef<HTMLDivElement>(null)
    // destructuring the dependencies from Props
    const { level } = props
    const getTransitionClasses = useCallback(() => {
        if (level === "first") {
            return {
                enter: classes["MainLevel-enter"],
                enterActive: classes["MainLevel-enter-active"],
                exit: classes["MainLevel-exit"],
                exitActive: classes["MainLevel-exit-active"],
            }
        }
        if (level === "second" || level === "secondRev") {
            return {
                enter: classes["SecondaryLevel-enter"],
                enterActive: classes["SecondaryLevel-enter-active"],
                exit: classes["SecondaryLevel-exit"],
                exitActive: level === "second" ? classes["SecondaryLevel-exit-active"] : classes["SecondaryLevel-exit-active-rev"],
            }
        }
        if (level === "third") {
            return {
                enter: classes["ThirdLevel-enter"],
                enterActive: classes["ThirdLevel-enter-active"],
                exit: classes["ThirdLevel-exit"],
                exitActive: classes["ThirdLevel-exit-active"],
            }
        }
    },
        [level]);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.enter}
            timeout={500}
            classNames={getTransitionClasses()}
            mountOnEnter
            unmountOnExit
        >
            <div ref={nodeRef}>
                <SideNavMenuItems data={props.data} />
            </div>
        </CSSTransition>
    )
}

export default MainMenu
