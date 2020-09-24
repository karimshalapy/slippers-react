import React from 'react'
import classes from './SideNavMenuContainer.module.css'
import DropdownTransition from '../../../../../components/hoc/DropdownTransition/DropdownTransition'

interface Props {
    open: boolean
}

const SideNavMenuContainer: React.FC<Props> = props => {
    return (
        <DropdownTransition show={props.open}>
            {nodeRef => (
                <div ref={nodeRef} className={classes.SideMenuContainer}>

                </div>
            )}
        </DropdownTransition>
    )
}

export default SideNavMenuContainer
