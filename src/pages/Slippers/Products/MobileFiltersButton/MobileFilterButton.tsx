import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../@types/reducersTypes'
import classes from './MobileFiltersButton.module.css'

interface Props {
    changeOpen: () => void
}

const MobileFilterButton: React.FC<Props> = props => {

    const filtersCount = useSelector((state: RootReducer) => Object.values(state.filterState).filter(item => item).length)

    return (
        <button className={classes.FiltersButton} onClick={props.changeOpen}>
            filters
            {
                filtersCount > 0
                    ?
                    <div>
                        <span>
                            {filtersCount}
                        </span>
                    </div>
                    : null
            }
        </button>
    )
}

export default MobileFilterButton
