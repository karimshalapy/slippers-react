import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../@types/reducersTypes'
import Button from '../../../../components/Button/Button'
import classes from './MobileFiltersButton.module.css'

interface Props {
    changeOpen: () => void
}

const MobileFilterButton: React.FC<Props> = props => {

    const filtersCount = useSelector((state: RootReducer) => Object.values(state.filterState).filter(item => item).length)

    return (
        <Button ghost classNames={classes.FiltersButton} clickHandler={props.changeOpen}>
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
        </Button>
    )
}

export default MobileFilterButton
