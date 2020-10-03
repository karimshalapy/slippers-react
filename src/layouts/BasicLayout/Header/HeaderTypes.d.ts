import React from 'react'

//header state in useReducer interface
export type HeaderState = {
    [type in DropdownMenusTypes]: boolean
};

//DropdownMenus types permitted
export type DropdownMenusTypes = "men" | "women" | "discover" | "gift"
//actions permitted for the header reducer to be dispatched
export type HeaderActionTypeOptions = (DropdownMenusTypes | "init")

//header useReducer action type
interface Action {
    type: HeaderActionTypeOptions
}

//header useReducer type
export type HeaderReducer = React.Reducer<HeaderState, Action>

//header onClick function type
export type HeaderClickHandler = (x: ActionTypeOptions) => void

//dropdownSection data type
export interface DropdownSectionData {
    heading?: string,
    data: {
        imgUrl?: string,
        imgAlt?: string,
        url: string,
        text: string,
    }[]
}

//DropdownSection types permitted 
export type DropdownSectionTypes = "textList" | "imageList" | "imageBlocks"