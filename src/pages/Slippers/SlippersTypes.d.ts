export type SlippersTypes = "classic" | "canvas" | "flow" | "luxe"
export type Gender = "men" | "women"
export type UpperColorFilterTypes = "beige" | "black" | "grey" | "green" | "white" | "blue" | "pink"
export type SoleColorFilterTypes = "beige" | "white" | "grey" | "pink" | "purple" | "black" | "yellow"
export type ShortColorsTypes = "lig" | "sy" | "ss" | "pp" | "dg" | "sb" | "on" | "lw" | "aw" | "dk" | "js" | "lag" | "bg" | "kb" | "kg" | "ln" | "ks" | "as" | "fg" | "hp" | "ii"
export type Size = {
    eu: number,
    us: string,
}
export type Prices = {
    eur: number,
    gbp: number,
    usd: number
}
export type GenderSizeFilterTypes = [Size[], Size[]]
export type FilterItemsTypes = string[] | GenderSizeFilterTypes

export interface SlippersFilterData {
    title: string,
    filterItems: FilterItemsTypes
}

export interface SlippersProductData {
    type: SlippersTypes,
    mainImageUrl: string,
    mainImageAlt: string,
    secondaryImageUrl: string,
    secondaryImageAlt: string,
    colorText: string,
    upperColor: string,
    soleColor: string,
    upperColorFilterText: UpperColorFilterTypes[],
    soleColorFilterText: SoleColorFilterTypes[],
    upperColorShortened: ShortColorsTypes,
    soleColorShortened: ShortColorsTypes,
    menSizes: Size[],
    wommenSizes: Size[]
    price: Prices,
}

export interface SlippersData {
    filterData: SlippersFilterData[],
    productsData: SlippersProductData[],
}