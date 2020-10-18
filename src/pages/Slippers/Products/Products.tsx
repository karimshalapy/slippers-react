import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setParams } from '../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import FiltersSelected from './FiltersSelected/FiltersSelected'
import ProductArticle from './ProductArticle/ProductArticle'
import ProductsList from './ProductsList/ProductsList'

interface Props {

}

const Products: React.FC<Props> = props => {

    const { productsData, filterState } = useSelector((state: RootReducer) => ({
        productsData: state.productsData.filteredProducts,
        filterState: state.filterState
    }))
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setParams(history))
    }, [dispatch, history, filterState])

    return (
        <>
            <ProductArticle />
            <FiltersSelected />
            <ProductsList productsData={productsData} />
        </>
    )
}

export default Products
