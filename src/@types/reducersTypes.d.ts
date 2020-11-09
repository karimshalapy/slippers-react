import { GalleryData } from './GalleryTypes'
import { PressData } from './PressTypes'
import { InstagramData } from './InstagramPhotosTypes'
import { FooterData } from './FooterTypes'
import { DropdownMenusData } from './HeaderTypes'
import { sideNavMenusDataType } from './SideNavMenuTypes'
import { HeroData } from './HeroTypes'
import { SlipperImageSwiperData, SlipperSwiperAvatarData } from './SlippersSwiperTypes'
import { SlipperFilterState, SlippersData, SlippersProductData } from './SlippersTypes'
import { CartItemsInterface } from './CartTypes'


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
}

interface ProductsData {
    original?: SlippersData,
    filteredProducts?: SlippersProductData[]
}

interface CartState {
    cartItems: CartItemsInterface,
    cartLoading: boolean,
    cartError: boolean
}

interface RootReducer {
    mainResources: ResourcesState,
    filterState: SlipperFilterState,
    productsData: ProductsData,
    cartData: CartState,
}