export type MenuTypes = "main" | "men" | "women" | "gifting" | "discover more" | "help" | "about us" | "existing customers"

export interface DataInfo {
    imgUrl?: string,
    text: MenuTypes,
    parent: MenuTypes | null,
    isNext: boolean,
    link?: string,
}

export interface ContextValues {
    nextMenuFunction: (menu: MenuTypes) => void,
    activeMenu: MenuTypes
}