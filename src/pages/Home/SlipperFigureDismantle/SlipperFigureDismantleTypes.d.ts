type LayerTypes = "SlipperTop" | "SlipperWool" | "SlipperFootbed" | "SlipperSole"

export interface LayerData {
    imgUrl: string,
    imgAlt: string,
    style?: {
        transform: string
    },
    title: string,
    text: string,
    layerType: LayerTypes
}