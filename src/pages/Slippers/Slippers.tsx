import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import useWindowWidth from '../../hooks/useWindowWidth'
import { filterProducts, getProdcuts, setfilterStateWParams } from '../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../@types/reducersTypes'
import FilterSidebar from './FilterSidebar/FilterSidebar'
import FliterProducts from './FliterProducts/FliterProducts'
import Products from './Products/Products'
import classes from './Slippers.module.css'

interface Props {

}

const Slippers: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const { filterState, productsData, filterData } = useSelector((state: RootReducer) => ({
        filterState: state.filterState,
        productsData: state.productsData.original?.productsData,
        filterData: state.productsData.original?.filterData
    }))
    const [filterSidebarIsOpen, setFilterSidebarIsOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const location = useLocation()

    const filterBtnClickHandler = useCallback(() => { setFilterSidebarIsOpen(prevOpen => !prevOpen) }, [])

    useEffect(() => {
        dispatch(setfilterStateWParams(location.search))
        dispatch(getProdcuts())
        //the next comment is sued to disable the dependency requirement because I want this to run only on first load not when everytime the deps change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (filterData) dispatch(filterProducts(filterState, filterData))
    }, [dispatch, filterState, productsData, filterData])

    return (
        <>
            <ScrollToTopOnPathChange />
            <h1 className={classes.PageHeader}>slippers</h1>
            <div className={classes.SlippersPageWrapper}>
                <FilterSidebar open={filterSidebarIsOpen} changeOpen={filterBtnClickHandler} />
                {
                    windowWidth && windowWidth > 600
                        ?
                        <aside className={classes.Filter}>
                            <FliterProducts />
                        </aside>
                        : null
                }
                <section className={classes.Products}>
                    <Products changeOpen={filterBtnClickHandler} />
                </section>
            </div>
        </>
    )
}

export default Slippers
