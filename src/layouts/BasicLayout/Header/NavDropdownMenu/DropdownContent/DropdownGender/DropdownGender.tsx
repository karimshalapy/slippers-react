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
                data: []
            }} />
            <DropdownSection type="textList" payload={{
                heading: "shop accessories",
                data: []
            }} />
            <DropdownSection type="imageBlocks" payload={{
                data: []
            }} />
        </>
    )
}

export default DropdownGender
