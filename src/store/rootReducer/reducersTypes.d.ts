import { GalleryData } from '../../pages/Home/Gallery/GalleryTypes'
import { PressData } from '../../layouts/BasicLayout/Press/PressTypes'
import { InstagramData } from '../../layouts/BasicLayout/InstagramPhotos/InstagramPhotosTypes'
import { FooterData } from '../../layouts/BasicLayout/Footer/FooterTypes'
import { DropdownMenusData } from '../../layouts/BasicLayout/Header/HeaderTypes'
import { sideNavMenusDataType } from '../../layouts/BasicLayout/Header/SideNavMenu/SideNavMenuTypes'
import { HeroData } from '../../pages/Home/Hero/HeroTypes'


export interface ResourcesState {
    galleryData?: GalleryData[],
    press?: PressData[],
    insta?: InstagramData[],
    footerNav?: FooterData[],
    socialNav?: FooterData[],
    dropdown?: DropdownMenusData,
    sideNav?: sideNavMenusDataType,
    hero?: HeroData[],
}

interface RootReducer {
    mainResources: ResourcesState
}