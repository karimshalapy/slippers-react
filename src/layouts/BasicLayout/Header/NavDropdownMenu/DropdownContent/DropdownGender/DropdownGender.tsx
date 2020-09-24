import React from 'react'
import DropdownSection from '../DropdownSection/DropdownSection'

interface Props {
    type: "men" | "women"
}

const DropdownGender: React.FC<Props> = props => {
    return (
        <>
            <DropdownSection type="imageList" payload={{
                heading: "Shop men's slippers",
                data: [
                    { link: "/", text: "classic", img: { url: "https://cdn.mahabis.com/website/navigation/nav-men-classic.jpg?id=1", alt: "" } },
                    { link: "/", text: "classic", img: { url: "https://cdn.mahabis.com/website/navigation/nav-men-classic.jpg?id=1", alt: "" } },
                    { link: "/", text: "classic", img: { url: "https://cdn.mahabis.com/website/navigation/nav-men-classic.jpg?id=1", alt: "" } },
                    { link: "/", text: "classic", img: { url: "https://cdn.mahabis.com/website/navigation/nav-men-classic.jpg?id=1", alt: "" } },
                    { link: "/", text: "classic", img: { url: "https://cdn.mahabis.com/website/navigation/nav-men-classic.jpg?id=1", alt: "" } },
                ]
            }} />
            <DropdownSection type="textList" payload={{
                heading: "shop accessories",
                data: [
                    { link: "/", text: "slipper bags" },
                    { link: "/", text: "gift boxes" },
                    { link: "/", text: "digital gift cards" },
                ]
            }} />
            <DropdownSection type="imageBlocks" payload={{
                data: [
                    { link: "/", text: "shop new colours", img: { url: "https://cdn.shopify.com/s/files/1/0238/5795/files/2_ea24876e-d93b-4c26-a355-c7a402dee24a_1024x.jpg?v=1591847641", alt: "" } },
                    { link: "/", text: "outlet slippers", img: { url: "https://cdn.shopify.com/s/files/1/0238/5795/files/4_2_c6ffe03c-e9ce-4f87-9145-be4834f7ad15_1024x.jpg?v=1586940931", alt: "" } },
                ]
            }} />
        </>
    )
}

export default DropdownGender
