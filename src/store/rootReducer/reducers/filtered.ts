import { ProductsData } from "../reducersTypes";
import * as actions from '../../actionsIndex/actionNames'
import { FilteredAction } from "../../actionsIndex/actionTypes";
import { GenderSizes, SlipperFilterState, SlippersProductData } from '../../../pages/Slippers/SlippersTypes.d'
import { isSizesFilterSection } from "../../../helpers/typeCheckers";

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
            if (action.filterData) {
                //getting all the filters that're not null in filtersArray
                const filtersArray = action.filterState
                    ? Object.entries(action.filterState)
                        .filter(item => item[1] && item[0] !== "gender") as unknown as [keyof Omit<SlipperFilterState, "gender">, string][]
                    : []

                //filtering products logic function
                const filteringSlippersProducts = (item: SlippersProductData) => {
                    //starting condition
                    let condition = true
                    //running each filter in filters Array on the item of SlipperProductData
                    filtersArray.forEach(([key, value]) => {
                        if (action.filterData && Object.keys(action.filterData).includes(key)) {// checking if the filterdata is available and also that the key we have in filtersArray is present in the filtersData to prevent wrong inputs
                            const filterItems = action.filterData[key].filterItems
                            if (key !== "sizes" && !isSizesFilterSection(filterItems) && filterItems.includes(value)) { //filtering logic for all sections except sizes filter section
                                condition = condition && item[key] === value

                            } else if (key === "sizes" && isSizesFilterSection(filterItems)) { //when we filter sizes we will need to determine which gender and check if the item has this size available
                                const sizes = filterItems.map(item => item.map(size => size.eu)) // switch the data from [[{eu, us},...],[{eu, us},...]] to [[eu,eu,eu,...], [eu,eu,eu,...]]
                                const availableGenders = action.filterData.gender.filterItems as string[]
                                condition = action.filterState?.gender && availableGenders.includes(action.filterState.gender)
                                    ? condition && sizes[GenderSizes[action.filterState.gender as "men" | "women"]].includes(+value)
                                    : false
                            } else condition = false
                        } else condition = false
                    })
                    //returning the condition after mutating it by the loop above
                    return condition
                }

                //applying the filter function to the original products
                const filteredSlippersProducts = state.original?.productsData.filter(filteringSlippersProducts)
                return {
                    ...state,
                    filteredProducts: filteredSlippersProducts
                }

            } else return state
        default:
            return state
    }
}
