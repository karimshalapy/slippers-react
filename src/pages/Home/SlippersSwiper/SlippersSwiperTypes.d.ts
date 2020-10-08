export type SlippersTypes = "classic" | "canvas" | "flow" | "luxe"
export type AvatarNavTypes = SlippersTypes | "view all"

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