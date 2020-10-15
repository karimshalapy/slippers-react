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
        case action.type === actions.UPDATE_FILTER_STATE && !!action.filterSectionType && !!action.value:
            return {
                ...state,
                sizes: action.filterSectionType === "gender" ? null : state.sizes,
                [action.filterSectionType!]: state[action.filterSectionType!] === action.value ? null : action.value,
            }
        case action.type === actions.RESET_FILTER_STATE:
            return initialState
        default:
            return state
    }
}