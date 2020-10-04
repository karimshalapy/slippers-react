import React from 'react'
import { DropdownMenusTypes } from '../../HeaderTypes'
import DropdownContainer from './DropdownContainer/DropdownContainer'
import classes from './DropdownContent.module.css'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../../store/rootReducer/reducersTypes'

interface Props {
    type: DropdownMenusTypes
}

const DropdownContent: React.FC<Props> = props => {
    const dropdownData = useSelector((state: RootReducer) => state.mainResources.dropdown)

    return (
        <ul className={classes.DropdownContent}>
            <DropdownContainer dropdownSectionData={dropdownData ? dropdownData[props.type] : undefined} />
        </ul>
    )
}

export default DropdownContent
