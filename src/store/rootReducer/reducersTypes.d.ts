import { GalleryData } from '../../layouts/BasicLayout/Gallery/GalleryTypes'
import { PressData } from '../../layouts/BasicLayout/Press/PressTypes'
import { InstagramData } from '../../layouts/BasicLayout/InstagramPhotos/InstagramPhotosTypes'
import { FooterData } from '../../layouts/BasicLayout/Footer/FooterTypes'
import { DropdownSectionData, DropdownSectionTypes, DropdownMenusTypes } from '../../layouts/BasicLayout/Header/HeaderTypes'

type dropdownSectionsData = {
    [sectionType in DropdownSectionTypes]: DropdownSectionData | DropdownSectionData[]
}


export interface ResourcesState {
    galleryData?: GalleryData[],
    press?: PressData[],
    insta?: InstagramData[],
    footerNav?: FooterData[],
    socialNav?: FooterData[],
    dropdown?: {
        [menuType in DropdownMenusTypes]: dropdownSectionsData
    }
}

interface RootReducer {
    mainResources: ResourcesState
}