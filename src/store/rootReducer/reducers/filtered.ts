import { ProductsData } from "../reducersTypes";
import * as actions from '../../actionsIndex/actionNames'
import { FilteredAction } from "../../actionsIndex/actionTypes";

const initialState: ProductsData = {}

export default (state = initialState, action: FilteredAction) => {
    switch (action.type) {
        case actions.SET_PRODCUTS:
            return {
                ...state,
                filteredProducts: action.products?.productsData,
                original: action.products
            }
        default:
            return state
    }
}
