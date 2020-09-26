import React from 'react'
import SideNavMenuItem from './SideNavMenuItems/SideNavMenuItem'
import { DataInfo } from '../SideNavMenuTypes'
import { v4 } from 'uuid'

interface Props {
    data: DataInfo[]
}

const SideNavMenuItems: React.FC<Props> = props => {
    return (
        <div>
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
}

export default SideNavMenuItems
