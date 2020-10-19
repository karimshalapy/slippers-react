import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import Button from '../../../components/Button/Button'
import { resetFilterState } from '../../../store/actionsIndex/actionIndex'
import FilterProducts from '../FliterProducts/FliterProducts'
import classes from './FilterSidebar.module.css'

interface Props {
    open: boolean
    changeOpen: () => void
}

const FilterSidebar: React.FC<Props> = props => {
    const nodeRef = useRef(null)

    const dispatch = useDispatch()
    const clearFilters = useCallback(() => dispatch(resetFilterState()), [dispatch])

    return (
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

                <div className={classes.FilterButtonsContainer}>
                    <Button
                        outlined
                        classNames={[classes.WideBtn]}
                        clickHandler={clearFilters}
                    >CLEAR</Button>
                    <Button
                        classNames={[classes.WideBtn]}
                        clickHandler={props.changeOpen}
                    >APPLY</Button>
                </div>
            </aside>

        </CSSTransition>
    )
}

export default FilterSidebar
