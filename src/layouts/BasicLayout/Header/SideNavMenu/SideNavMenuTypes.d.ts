import { DropdownMenusTypes } from '../HeaderTypes'

export type MenuTypes = DropdownMenusTypes | "main" | "discoverBack" | "help" | "about" | "customers"

export interface sideNavDataInfo {
    imgUrl?: string,
    imgAlt?: string,
    goTo?: MenuTypes,
    text: string,
    isNext: boolean,
    url?: string,
}
export interface ImageBlock {
    imgUrl: string,
    imgAlt: string,
    url: string,
    text: string,
}

export type sideNavMenusDataType = {
    [menu in MenuTypes]: {
        level: "first" | "second" | "second & secondRev" | "third",
        data: sideNavDataInfo[],
        imageBlocks?: ImageBlock[]
    }
}

export interface sideNavContextValues {
    navigateMenuFunction: (menu: MenuTypes) => void,
    activeMenu: MenuTypes,
    toggleMenu: () => void
}