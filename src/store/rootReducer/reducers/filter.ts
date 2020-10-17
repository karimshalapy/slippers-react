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
            const params = Object.entries(state)
                .filter(item => item[1])
                .map(item => item.join("="))
                .join("&")
            action.history!.push({
                search: `?${params}`
            })
            return state

        case !!(action.type === actions.UPDATE_FILTER_STATE_W_PARAMS && action.params):
            //create an opject from the params
            const paramsObj: SlipperFilterState = action.params
                .substring(1)
                .split("&")
                .map((item: string) => item.split("="))
                .reduce((obj: { [x in keyof SlipperFilterState]: string | null }, [key, value]: [keyof SlipperFilterState, string]) => {
                    obj[key] = value
                    return obj
                }, {})

            return {
                ...state,
                ...paramsObj
            }
        case !!(actions.RESET_FILTER_ITEM && action.filterItemType):
            return {
                ...state,
                [action.filterItemType!]: null
            }
        case !!(action.type === actions.RESET_FILTER_STATE):
            return initialState
        default:
            return state
    }
}