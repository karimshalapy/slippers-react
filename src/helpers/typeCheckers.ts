import { SlippersTypes } from '../@types/SlippersSwiperTypes'
import { FilterItemsTypes, GenderSizeFilterTypes } from '../@types/SlippersTypes'

export const isSizesFilterSection = (filterItems: FilterItemsTypes): filterItems is GenderSizeFilterTypes => {
    return typeof filterItems[0] !== "string"
}

export const isSlipperType = (item: string): item is SlippersTypes => item === "classic" || item === "canvas" || item === "flow" || item === "luxe"