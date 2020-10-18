import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import FilterProducts from '../FliterProducts/FliterProducts'
import classes from './FilterSidebar.module.css'

interface Props {
    open: boolean
    changeOpen: () => void
}

const FilterSidebar: React.FC<Props> = props => {
    const nodeRef = useRef(null)

    return (
        <>
            <CSSTransition
                in={props.open}
                timeout={500}
                classNames={{
                    enter: classes["FilterSidebar-enter"],
                    enterActive: classes["FilterSidebar-enter-active"],
                    exit: classes["FilterSidebar-exit"],
                    exitActive: classes["FilterSidebar-exit-active"],
                }}
                exit={false}
                nodeRef={nodeRef}
                mountOnEnter
                unmountOnExit
            >
                <aside className={classes.FilterSidebar} ref={nodeRef}>
                    <FilterProducts inSideBar />
                    <button className={classes.CloseBtn} onClick={props.changeOpen}>d</button>
                </aside>

            </CSSTransition>
        </>
    )
}

export default FilterSidebar
