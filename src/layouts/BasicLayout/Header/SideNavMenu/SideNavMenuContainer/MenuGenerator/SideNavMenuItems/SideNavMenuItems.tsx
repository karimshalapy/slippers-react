import React, { forwardRef } from 'react'
import SideNavMenuItem from './SideNavMenuItem/SideNavMenuItem'
import { sideNavDataInfo } from '../../../SideNavMenuTypes'
import { v4 } from 'uuid'

interface Props {
    data: sideNavDataInfo[]
}

const SideNavMenuItems = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div ref={ref}>
            {
                props.data.map(item => (
                    <SideNavMenuItem
                        key={v4()}
                        {...item}
                    />
                ))
            }
        </div>
    )
})

export default SideNavMenuItems
