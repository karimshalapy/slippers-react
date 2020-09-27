export type MenuTypes = "main" | "men" | "women" | "gift" | "discover" | "discoverBack" | "help" | "about" | "customers"

export interface DataInfo {
    imgUrl?: string,
    goTo?: MenuTypes,
    text: string,
    isNext: boolean,
    link?: string,
}

export interface ContextValues {
    navigateMenuFunction: (menu: MenuTypes) => void,
    activeMenu: MenuTypes
}