import queryParamsFromEntries from "../../../helpers/queryParamsFromEntries"
import queryParamsSplitIntoArray from "../../../helpers/queryParamsSplitIntoArray"
import { SlipperFilterState } from "../../../pages/Slippers/SlippersTypes"
import * as actions from '../../actionsIndex/actionNames'
import { FilterAction } from "../../actionsIndex/actionTypes"

const initialState: SlipperFilterState = {
    sizes: null,
    collection: null,
    gender: null,
    soleColor: null,
    upperColor: null
}

export default (state = initialState, action: FilterAction) => {
    switch (true) {
        case !!(action.type === actions.UPDATE_FILTER_STATE && action.filterSectionType && action.value): //updating the state on change
            return {
                ...state,
                sizes: action.filterSectionType === "gender" ? null : state.sizes,
                [action.filterSectionType!]: state[action.filterSectionType!] === action.value ? null : action.value,
            }

        case !!(action.type === actions.SET_PARAMS && action.history): //Setting Params on change
            //getting the params from the filter state
            const params = queryParamsFromEntries(Object.entries(state))
            action.history!.replace({
                search: `?${params}`
            })
            return state

        case !!(action.type === actions.UPDATE_FILTER_STATE_W_PARAMS && action.params):
            //create an object from the params
            const paramsObj: SlipperFilterState = Object.fromEntries(queryParamsSplitIntoArray(action.params!)
                .filter(([key]) => key in initialState))
            return {
                ...state,
                ...paramsObj
            }
        case !!(action.type === actions.RESET_FILTER_STATE):
            return initialState
        default:
            return state
    }
}