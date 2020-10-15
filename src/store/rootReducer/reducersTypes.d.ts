import { GalleryData } from '../../pages/Home/Gallery/GalleryTypes'
import { PressData } from '../../layouts/BasicLayout/Press/PressTypes'
import { InstagramData } from '../../layouts/BasicLayout/InstagramPhotos/InstagramPhotosTypes'
import { FooterData } from '../../layouts/BasicLayout/Footer/FooterTypes'
import { DropdownMenusData } from '../../layouts/BasicLayout/Header/HeaderTypes'
import { sideNavMenusDataType } from '../../layouts/BasicLayout/Header/SideNavMenu/SideNavMenuTypes'
import { HeroData } from '../../pages/Home/Hero/HeroTypes'
import { SlipperImageSwiperData, SlipperSwiperAvatarData } from '../../pages/Home/SlippersSwiper/SlippersSwiperTypes'
import { SlipperFilterState, SlippersData } from '../../pages/Slippers/SlippersTypes'


export interface ResourcesState {
    galleryData?: GalleryData[],
    press?: PressData[],
    insta?: InstagramData[],
    footerNav?: FooterData[],
    socialNav?: FooterData[],
    dropdown?: DropdownMenusData,
    sideNav?: sideNavMenusDataType,
    hero?: HeroData[],
    slippersTypeSwiperAvatarImgs?: SlipperSwiperAvatarData[],
    slippersTypeSwiper?: SlipperImageSwiperData[],
    slippers?: SlippersData,
}

interface RootReducer {
    mainResources: ResourcesState,
    filterState: SlipperFilterState
}