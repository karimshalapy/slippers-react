import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import { FilterSectionTypes, SlipperFilterState } from '../SlippersTypes'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'

interface Props {

}

const FliterProducts: React.FC<Props> = props => {

    const filterData = useSelector((state: RootReducer) => state.mainResources.slippers?.filterData)

    const [filterSectionsState, setFilterSectionsState] = useState<SlipperFilterState>({
        sizes: null,
        collection: null,
        gender: null,
        soleColor: null,
        upperColor: null
    })

    const changeHandler = (type: FilterSectionTypes, value: string) => {
        console.log(type, value)
        setFilterSectionsState(prevFilterState => {
            return {
                ...prevFilterState,
                sizes: type === "gender" ? null : prevFilterState.sizes,
                [type]: prevFilterState[type] === value ? null : value,
            }
        })
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
                            state={filterSectionsState}
                            changeHandler={changeHandler}
                        />
                    ))
                    :
                    [...Array(5)].map(() => (
                        <FilterSection key={v4()} loading />
                    ))
            }
        </form>
    )
}

export default FliterProducts
