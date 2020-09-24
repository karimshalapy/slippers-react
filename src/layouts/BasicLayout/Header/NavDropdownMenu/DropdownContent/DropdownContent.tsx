import React from 'react'
import { ActionTypeOptions } from '../../HeaderTypes'
import DropdownGender from './DropdownGender/DropdownGender'
import classes from './DropdownContent.module.css'

interface Props {
    type: ActionTypeOptions
}

const DropdownContent: React.FC<Props> = props => {
    return (
        <ul className={classes.DropdownContent}>
            <DropdownGender type="men" />
        </ul>
    )
}

export default DropdownContent
