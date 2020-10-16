import { ProductsData } from "../reducersTypes";
import * as actions from '../../actionsIndex/actionNames'
import { FilteredAction } from "../../actionsIndex/actionTypes";
import { SlipperFilterState } from '../../../pages/Slippers/SlippersTypes'

const initialState: ProductsData = {}

export default (state = initialState, action: FilteredAction) => {
    switch (action.type) {
        case actions.SET_PRODCUTS:
            return {
                ...state,
                filteredProducts: action.products?.productsData,
                original: action.products
            }
        case actions.FILTER:
            const filtersArray = action.filterState
                ? Object.entries(action.filterState)
                    .filter(item => item[1] && item[0] !== "gender") as unknown as [keyof Omit<SlipperFilterState, "gender">, string][]
                : []

            const filteredSlippersProducts = state.original?.productsData.filter(item => {
                let condition = true
                filtersArray.forEach(([key, value]) => {
                    if (key !== "sizes") condition = condition && item[key] === value
                    else { //when we filter sizes we will need to determine which gender and check if the item has this size available
                        const genderText = `${action.filterState?.gender}Sizes` as "menSizes" | "womenSizes"
                        condition = condition && item[genderText].eu.includes(+value)
                    }
                })
                return condition
            })

            return {
                ...state,
                filteredProducts: filteredSlippersProducts
            }
        default:
            return state
    }
}
