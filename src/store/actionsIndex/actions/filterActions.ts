import { FilterSectionTypes } from '../../../@types//SlippersTypes'
import * as actions from '../actionNames'
import { FilterAction } from '../../../@types/actionTypes'
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

export const setfilterStateWParams = (params: string) => ({
    type: actions.UPDATE_FILTER_STATE_W_PARAMS,
    params
})