import { ResourcesState } from './reducersTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import * as actionTypes from '../store/actionsIndex/actionNames'
import { AvailableFilters, FilterSectionTypes, Gender, SlipperFilterState, SlippersData, SlippersProductData } from './SlippersTypes'
import * as H from 'history'
import { CartItemsInterface } from './CartTypes'

//resources action types
export interface ResourcesAction {
    type: actionTypes.SET_RESOURCES,
    resources: ResourcesState
}
//resources Thunk action type
export type AppThunk<State> = () => ThunkAction<void, State, unknown, Action<string>>


//filter action types
export interface FilterAction {
    type: actionTypes.UPDATE_FILTER_STATE | actionTypes.RESET_FILTER_STATE | actionTypes.SET_PARAMS | actionTypes.UPDATE_FILTER_STATE_W_PARAMS,
    value?: string,
    filterSectionType?: FilterSectionTypes,
    history?: H.History<unknown>,
    params?: string,
    filterItemType?: keyof SlipperFilterState
}

//filtered action types
export interface FilteredAction {
    type: actionTypes.SET_PRODCUTS | actionTypes.FILTER,
    products?: SlippersData,
    filterState?: SlipperFilterState,
    filterData?: AvailableFilters,
}

//cart action types
export interface CartActions {
    type: actionTypes.ADD_TO_CART | actionTypes.REMOVE_ITEM_CART | actionTypes.INCREMENT_CART | actionTypes.DECREMENT_CART | actionTypes.SET_CART_DATA | actionTypes.SET_CART_LOADING | actionTypes.SET_CART_ERROR,
    itemToBeAdded?: SlippersProductData,
    gender?: Gender,
    size?: number,
    cartItems?: CartItemsInterface,
    loading?: boolean,
    error?: boolean,
    itemId?: string,
}