import { ResourcesState } from "../rootReducer/reducersTypes";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import * as actionTypes from './actionNames'
import { FilterSectionTypes } from "../../pages/Slippers/SlippersTypes";

//resources action types
export interface ResourcesAction {
    type: actionTypes.SET_RESOURCES,
    resources: ResourcesState
}
//resources Thunk action type
export type AppThunk<State> = () => ThunkAction<void, State, unknown, Action<string>>


//filter action types
export interface FilterAction {
    type: actionTypes.UPDATE_FILTER_STATE | actionTypes.RESET_FILTER_STATE,
    value?: string,
    filterSectionType?: FilterSectionTypes
}