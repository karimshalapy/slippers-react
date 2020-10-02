import React from 'react'
import classes from './NavDropdownMenu.module.css'
import DropdownTransition from '../../../../components/hoc/DropdownTransition/DropdownTransition'
import { HeaderActionTypeOptions } from '../HeaderTypes'
import DropdownContent from './DropdownContent/DropdownContent'

interface Props {
    show: boolean,
    type: HeaderActionTypeOptions,
    reset: () => void
}

const NavDropdownMenu: React.FC<Props> = props => {
    return (
        <DropdownTransition show={props.show}>
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
