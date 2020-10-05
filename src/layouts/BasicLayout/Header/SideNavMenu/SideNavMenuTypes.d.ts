import { DropdownMenusTypes } from '../HeaderTypes'

export type MenuTypes = DropdownMenusTypes | "main" | "discoverBack" | "help" | "about" | "customers"

export interface sideNavDataInfo {
    imgUrl?: string,
    goTo?: MenuTypes,
    text: string,
    isNext: boolean,
    link?: string,
}

export interface sideNavContextValues {
    navigateMenuFunction: (menu: MenuTypes) => void,
    activeMenu: MenuTypes,
    toggleMenu: () => void
}