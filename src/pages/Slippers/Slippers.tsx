import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import { filterProducts, getProdcuts } from '../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../store/rootReducer/reducersTypes'
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const filterBtnClickHandler = useCallback(() => { setFilterSidebarIsOpen(prevOpen => !prevOpen) }, [])

    useEffect(() => {
        dispatch(getProdcuts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (filterData) dispatch(filterProducts(filterState, filterData))
    }, [dispatch, filterState, productsData, filterData])

    //using window.innerHeight in state and updating it by using an event listener on the window resize and updating it accordingly
    const updateWindowSizeOnResize = useCallback(() => setWindowWidth(window.innerWidth), [])
    useEffect(() => {
        window.addEventListener("resize", updateWindowSizeOnResize);
        return () => {
            window.removeEventListener("resize", updateWindowSizeOnResize);
        }
    }, [updateWindowSizeOnResize])

    return (
        <>
            <ScrollToTopOnPathChange />
            <h1 className={classes.PageHeader}>slippers</h1>
            <div className={classes.SlippersPageWrapper}>
                <FilterSidebar open={filterSidebarIsOpen} changeOpen={filterBtnClickHandler} />
                {
                    windowWidth > 600
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
