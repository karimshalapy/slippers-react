import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { sideNavDataInfo, ImageBlock } from '../../../../../../@types/SideNavMenuTypes'
import SideNavMenuItems from './SideNavMenuItems/SideNavMenuItems'
import { CSSTransition } from 'react-transition-group'
import classes from './MenuGenerator.module.css'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import disableScrollOnModalOpen from '../../../../../../helpers/disableScrollOnModalOpen'
import { SideMenuContext } from '../../../Header'

interface Props {
    data?: sideNavDataInfo[],
    level: "first" | "second" | "secondRev" | "third",
    enter: boolean,
    imageBlocks?: ImageBlock[]
}




const MainMenu: React.FC<Props> = props => {

    const { toggleMenu } = useContext(SideMenuContext)
    useEffect(disableScrollOnModalOpen, [])

    const nodeRef = useRef<HTMLDivElement>(null)
    // destructuring the dependencies from Props
    const { level } = props
    const getTransitionClasses = useCallback(() => {
        switch (level) {
            case "first":
                return {
                    enter: classes["MainLevel-enter"],
                    enterActive: classes["MainLevel-enter-active"],
                    exit: classes["MainLevel-exit"],
                    exitActive: classes["MainLevel-exit-active"],
                }
            case "second":
            case "secondRev":
            case "third":
                return {
                    enter: classes["SecondaryLevel-enter"],
                    enterActive: classes["SecondaryLevel-enter-active"],
                    exit: classes["SecondaryLevel-exit"],
                    exitActive: level === "secondRev" ? classes["SecondaryLevel-exit-active-rev"] : classes["SecondaryLevel-exit-active"],
                }
        }
    },
        [level])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.enter}
            timeout={500}
            classNames={getTransitionClasses()}
            exit={false}
            mountOnEnter
            unmountOnExit
        >
            <div ref={nodeRef}>
                <div>
                    {props.data ? <SideNavMenuItems data={props.data} /> : null}
                    {
                        props.imageBlocks
                            ?
                            <div className={classes.imageBlocksContainer}>
                                {props.imageBlocks.map(item => (
                                    <Link to={item.url} key={v4()} onClick={toggleMenu}>
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                        <span>{item.text}</span>
                                    </Link>
                                ))}
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </CSSTransition>
    )
}

export default MainMenu
