import { SlippersTypes } from "../pages/Home/SlippersSwiper/SlippersSwiperTypes"
import { FilterItemsTypes, GenderSizeFilterTypes } from "../pages/Slippers/SlippersTypes"

export const isSizesFilterSection = (filterItems: FilterItemsTypes): filterItems is GenderSizeFilterTypes => {
    return typeof filterItems[0] !== "string"
}

export const isSlipperType = (item: string): item is SlippersTypes => item === "classic" || item === "canvas" || item === "flow" || item === "luxe"