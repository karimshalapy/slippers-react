import React from 'react'
import classes from './NavDropdownMenu.module.css'
import DropdownTransition from '../../../../components/hoc/DropdownTransition/DropdownTransition'
import { ActionTypeOptions } from '../HeaderTypes'
import DropdownContent from './DropdownContent/DropdownContent'

interface Props {
    show: boolean,
    type: ActionTypeOptions,
    reset: () => void
}

const NavDropdownMenu: React.FC<Props> = props => {
    return (
        <DropdownTransition show={props.show} transitionClassNames={{
            enter: classes["DropdownNav-enter"],
            enterActive: classes["DropdownNav-enter-active"],
            exit: classes["DropdownNav-exit"],
            exitActive: classes["DropdownNav-exit-active"],
        }}>
            {(nodeRef) => (
                <div className={classes.DropdownNav} ref={nodeRef}>
                    <div className={classes.Container}>
                        <DropdownContent type={props.type} />
                        <span className={classes.CloseBtn} onClick={() => props.reset()}></span>
                    </div>
                </div>
            )}
        </DropdownTransition>
    )
}

export default NavDropdownMenu
