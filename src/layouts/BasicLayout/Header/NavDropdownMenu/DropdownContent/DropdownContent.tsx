import React from 'react'
import { HeaderActionTypeOptions } from '../../HeaderTypes'
import DropdownGender from './DropdownGender/DropdownGender'
import classes from './DropdownContent.module.css'

interface Props {
    type: HeaderActionTypeOptions
}

const DropdownContent: React.FC<Props> = props => {
    return (
        <ul className={classes.DropdownContent}>
            <DropdownGender type="men" />
        </ul>
    )
}

export default DropdownContent
