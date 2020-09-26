import React from 'react'
import classes from './SideNavMenuContainer.module.css'
import DropdownTransition from '../../../../../components/hoc/DropdownTransition/DropdownTransition'
import SideNavMenuItems from '../SideNavMenuItems/SideNavMenuItems'
import { DataInfo } from '../SideNavMenuTypes'

interface Props {
    open: boolean
}

const data: DataInfo[] = [
    {
        text: "men",
        parent: null,
        isNext: true,
    },
    {
        text: "women",
        parent: null,
        isNext: true,
    },
    {
        text: "gifting",
        parent: null,
        isNext: true,
    },
    {
        text: "discover more",
        parent: null,
        isNext: true,
    },
]

const SideNavMenuContainer: React.FC<Props> = props => {
    return (
        <DropdownTransition show={props.open}>
            {nodeRef => (
                <ul ref={nodeRef} className={classes.SideMenuContainer}>
                    <SideNavMenuItems data={data} />
                </ul>
            )}
        </DropdownTransition>
    )
}

export default SideNavMenuContainer
