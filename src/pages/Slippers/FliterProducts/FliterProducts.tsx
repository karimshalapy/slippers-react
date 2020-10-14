import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'

interface Props {

}

const FliterProducts: React.FC<Props> = props => {

    const filterData = useSelector((state: RootReducer) => state.mainResources.slippers?.filterData)

    return (
        <form className={classes.FilterSection}>
            <h2>filters</h2>
            {
                filterData
                    ?
                    filterData.map(item => (
                        <FilterSection key={item.title} title={item.title} filterItems={item.filterItems} />
                    ))
                    :
                    [...Array(5)].map(() => (
                        <FilterSection loading />
                    ))
            }
        </form>
    )
}

export default FliterProducts
