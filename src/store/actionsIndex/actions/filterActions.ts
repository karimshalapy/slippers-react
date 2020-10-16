import { FilterSectionTypes } from "../../../pages/Slippers/SlippersTypes";
import * as actions from "../actionNames";
import { FilterAction } from "../actionTypes";
import * as H from 'history'

export const updateFilterState = (filterSectionType: FilterSectionTypes, value: string): FilterAction => ({
    type: actions.UPDATE_FILTER_STATE,
    value,
    filterSectionType,
})

export const resetFilterState = () => ({ type: actions.RESET_FILTER_STATE })

export const setParams = (history: H.History<unknown>) => ({
    type: actions.SET_PARAMS,
    history
})