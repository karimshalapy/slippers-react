import { FilterSectionTypes } from "../../../pages/Slippers/SlippersTypes";
import * as actions from "../actionNames";
import { FilterAction } from "../actionTypes";

export const updateFilterState = (filterSectionType: FilterSectionTypes, value: string): FilterAction => ({
    type: actions.UPDATE_FILTER_STATE,
    value,
    filterSectionType
})

export const resetFilterState = () => ({ type: actions.RESET_FILTER_STATE })