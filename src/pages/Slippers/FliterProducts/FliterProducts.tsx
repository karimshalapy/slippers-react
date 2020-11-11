import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { updateFilterState } from '../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../@types/reducersTypes'
import { FilterSectionTypes } from '../../../@types/SlippersTypes'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'
import useDisableScrollOnModalOpen from '../../../hooks/useDisableScrollOnModalOpen'

interface Props {
    inSideBar?: boolean,
}

const FliterProducts: React.FC<Props> = props => {

    const filterData = useSelector((state: RootReducer) => (state.productsData.original?.filterData))
    const [isAnimationDone, setIsAnimationDone] = useState(false)
    const dispatch = useDispatch()

    const changeHandler = (type: FilterSectionTypes, value: string) => {
        dispatch(updateFilterState(type, value))
    }

    useEffect(() => { //this useEffect is to initiate the animation of the buttons on bottom of sidebar when sidebar is done animating to slide in the buttons at the bottom.
        const timeout = setTimeout(() => {
            setIsAnimationDone(true)
        }, 500)
        return () => {
            setIsAnimationDone(false)
            clearTimeout(timeout)
        }
    }, [])

    useDisableScrollOnModalOpen(!!props.inSideBar)//this is needed to disable and enable scrolling ONLY if the FilterProducts is rendered in a sidebar not in main content

    return (
        <form className={[classes.FilterSection, props.inSideBar ? classes.InSideBar : "", isAnimationDone ? classes.AnimationDone : ""].join(" ")}> {/*adding the class name with the styling for when it renders in a sidebar*/}
            <h2>filters</h2>
            <div className={classes.FiltersWrapper}>
                {
                    filterData
                        ?
                        Object.entries(filterData)
                            .sort(([_, value1], [_2, value2]) => value1.sortNumber - value2.sortNumber) //sortNumbers are provided in the filterData to sort the sections according to them
                            .map(([key, value]) => (
                                <FilterSection
                                    key={value.title}
                                    title={value.title}
                                    filterItems={value.filterItems}
                                    type={key as FilterSectionTypes}
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
