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


export interface SlipperSwiperAvatarData {
    imgAlt: string,
    imgUrl: string,
    type: AvatarNavTypes,
    url?: string,
}

export interface SlipperImageSwiperData {
    type: SlippersTypes,
    imgUrl: string,
    imgAlt: string,
    features: SlippersFeaturesType[],
}