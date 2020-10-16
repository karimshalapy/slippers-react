import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { updateFilterState } from '../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import { FilterSectionTypes } from '../SlippersTypes'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'

interface Props {

}

const FliterProducts: React.FC<Props> = props => {

    const filterData = useSelector((state: RootReducer) => (state.mainResources.slippers?.filterData))
    const dispatch = useDispatch()


    const changeHandler = (type: FilterSectionTypes, value: string) => {
        dispatch(updateFilterState(type, value))
    }

    return (
        <form className={classes.FilterSection}>
            <h2>filters</h2>
            {
                filterData
                    ?
                    filterData.map(item => (
                        <FilterSection
                            key={item.title}
                            title={item.title}
                            filterItems={item.filterItems}
                            type={item.type}
                            changeHandler={changeHandler}
                        />
                    ))
                    :
                    [...Array(3)].map(() => (
                        <FilterSection key={v4()} loading />
                    ))
            }
        </form>
    )
}

export default FliterProducts
