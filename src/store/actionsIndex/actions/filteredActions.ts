import { AvailableFilters, SlipperFilterState, SlippersData } from '../../../@types/SlippersTypes'
import { FilteredAction } from '../../../@types/actionTypes'
import * as actions from '../actionNames'
import asyncThunkGet from '../../../helpers/asyncThunkGet'

const setProducts: (x: SlippersData) => FilteredAction = (products) => ({
    type: actions.SET_PRODCUTS,
    products
})

export const getProdcuts = asyncThunkGet<SlippersData, FilteredAction>("slippers.json", setProducts)

export const filterProducts = (filterState: SlipperFilterState, filterData: AvailableFilters) => ({
    type: actions.FILTER,
    filterState,
    filterData
})
