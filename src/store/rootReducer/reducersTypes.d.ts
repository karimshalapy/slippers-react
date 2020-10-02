import { GalleryData } from '../../layouts/BasicLayout/Gallery/GalleryTypes'
import { PressData } from '../../layouts/BasicLayout/Press/PressTypes'
import { InstagramData } from '../../layouts/BasicLayout/InstagramPhotos/InstagramPhotosTypes'
import { FooterData } from '../../layouts/BasicLayout/Footer/FooterTypes'

export interface ResourcesState {
    resources: {
        galleryData?: GalleryData[],
        press?: PressData[],
        insta?: InstagramData[],
        footerNav?: FooterData[],
        socialNav?: FooterData[],
    }
}
