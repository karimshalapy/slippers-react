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
    const { filterState, productsData } = useSelector((state: RootReducer) => ({ filterState: state.filterState, productsData: state.productsData.original?.productsData }))
    const [filterSidebarIsOpen, setFilterSidebarIsOpen] = useState(false)

    const filterBtnClickHandler = useCallback(() => { setFilterSidebarIsOpen(prevOpen => !prevOpen) }, [])

    useEffect(() => {
        dispatch(getProdcuts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(filterProducts(filterState))
    }, [dispatch, filterState, productsData])

    return (
        <>
            <ScrollToTopOnPathChange />
            <h1 className={classes.PageHeader}>slippers</h1>
            <div className={classes.SlippersPageWrapper}>
                <FilterSidebar open={filterSidebarIsOpen} changeOpen={filterBtnClickHandler} />
                <aside className={classes.Filter}>
                    <FliterProducts />
                </aside>
                <section className={classes.Products}>
                    <Products changeOpen={filterBtnClickHandler} />
                </section>
            </div>
        </>
    )
}

export default Slippers
