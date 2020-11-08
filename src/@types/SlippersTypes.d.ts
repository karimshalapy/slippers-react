export type SlippersTypes = "classic" | "canvas" | "flow" | "luxe"
export type Gender = "men" | "women"
export type UpperColorFilterTypes = "beige" | "black" | "grey" | "green" | "white" | "blue" | "pink"
export type SoleColorFilterTypes = "beige" | "white" | "grey" | "pink" | "purple" | "black" | "yellow"
export type ShortColorsTypes = "lig" | "sy" | "ss" | "pp" | "dg" | "sb" | "on" | "lw" | "aw" | "dk" | "js" | "lag" | "bg" | "kb" | "kg" | "ln" | "ks" | "as" | "fg" | "hp" | "ii"
export type FilterSectionTypes = "gender" | "sizes" | "collection" | "upperColor" | "soleColor"
export type Size = {
    eu: number,
    us: string,
}
export type Prices = {
    eur: number,
    gbp: number,
    usd: number
}
export interface ItemGenderSize {
    eu: number[],
    us: string[]
}
export type GenderSizeFilterTypes = [Size[], Size[]]
export enum GenderSizes { men, women }
export type FilterItemsTypes = string[] | GenderSizeFilterTypes

export type SlipperFilterState = {
    [section in FilterSectionTypes]: string | null
}

export interface SlippersFilterData {
    sortNumber: number,
    title: string,
    filterItems: FilterItemsTypes
}
export type AvailableFilters = {
    [key in FilterSectionTypes]: SlippersFilterData
}
export interface ProductShowcase {
    [image: string]: {
        imgUrl: string,
        imgAlt: string,
    }
}

export interface SlippersProductData {
    collection: SlippersTypes,
    mainImageUrl: string,
    mainImageAlt: string,
    secondaryImageUrl: string,
    secondaryImageAlt: string,
    colorText: string,
    upperColorLongText: string,
    soleColorLongText: string,
    upperColor: UpperColorFilterTypes[],
    soleColor: SoleColorFilterTypes[],
    upperColorShortened: ShortColorsTypes,
    soleColorShortened: ShortColorsTypes,
    menSizes: ItemGenderSize,
    womenSizes: ItemGenderSize,
    price: Prices,
    productShowcase: ProductShowcase
}

export type ProductArticles = {
    [item in SlippersTypes]: {
        articleText: string,
        imgUrl: string,
        imgAlt: string
    }
}

export interface SlippersData {
    filterData: AvailableFilters,
    productsData: SlippersProductData[],
    productArticles: ProductArticles,
}