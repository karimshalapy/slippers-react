import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { v4 } from 'uuid'
import disableScrollOnModalOpen from '../../../helpers/disableScrollOnModalOpen'
import { updateFilterState, setfilterStateWParams } from '../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import { FilterSectionTypes } from '../SlippersTypes'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'

interface Props {
    inSideBar?: boolean
}

const FliterProducts: React.FC<Props> = props => {

    const filterData = useSelector((state: RootReducer) => (state.productsData.original?.filterData))
    const dispatch = useDispatch()
    const location = useLocation()

    const changeHandler = (type: FilterSectionTypes, value: string) => {
        dispatch(updateFilterState(type, value))
    }

    useEffect(() => { //setting the state according to the search params when the component renders
        dispatch(setfilterStateWParams(location.search))
        //the next comment is sued to disable the dependency requirement because I want this to run only on first load not when everytime the deps change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(props.inSideBar ? disableScrollOnModalOpen : () => { }, []) //this is needed to disable and enable scrolling ONLY if the FilterProducts is rendered in a sidebar not in main content

    return (
        <form className={[classes.FilterSection, props.inSideBar ? classes.InSideBar : ""].join(" ")}> //adding the class name with the styling for when it renders in a sidebar
            <h2>filters</h2>
            <div className={classes.FiltersWrapper}>
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
                        [...Array(5)].map(() => (
                            <FilterSection key={v4()} loading />
                        ))

                }
            </div>
        </form>
    )
}

export default FliterProducts
