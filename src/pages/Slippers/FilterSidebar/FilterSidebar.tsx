import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import FilterProducts from '../FliterProducts/FliterProducts'
import classes from './FilterSidebar.module.css'

interface Props {

}

const FilterSidebar: React.FC<Props> = props => {
    const nodeRef = useRef(null)

    return (
        <>
            <CSSTransition
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
                    <FilterProducts />
                    <button className={classes.CloseBtn}>d</button>
                </aside>

            </CSSTransition>
        </>
    )
}

export default FilterSidebar
