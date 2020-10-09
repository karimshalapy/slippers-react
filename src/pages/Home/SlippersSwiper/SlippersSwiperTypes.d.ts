export type SlippersTypes = "classic" | "canvas" | "flow" | "luxe"
export type AvatarNavTypes = SlippersTypes | "view all"
export interface SlippersFeaturesType {
    featureIcon: "slipper" | "wool" | "sole" | "water" | "wooven" | "foot" | "leather",
    featureText: string,
}

export enum SlippersTypesEnum {
    classic,
    canvas,
    flow,
    luxe
}
interface SwiperImage<T> {
    type: T,
    imgUrl: string,
    imgAlt: string,
    url?: string
}

export interface SlipperSwiperAvatarData extends SwiperImage<AvatarNavTypes> { }

export interface SlipperImageSwiperData extends SwiperImage<SlippersTypes> {
    features: SlippersFeaturesType[],
}