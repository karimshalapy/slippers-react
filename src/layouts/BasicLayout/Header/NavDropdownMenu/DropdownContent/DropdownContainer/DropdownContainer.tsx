import React, { memo, useCallback } from 'react'
import { v4 } from 'uuid'
import { DropdownSectionTypes, DropdownSectionData, DropdownSectionsData } from '../../../../../../@types/HeaderTypes'
import DropdownSection from './DropdownSection/DropdownSection'

interface Props {
    dropdownSectionData?: DropdownSectionsData
    reset: () => void
}

const DropdownContainer: React.FC<Props> = ({ dropdownSectionData, reset }) => {

    //use-defined type guard to tell whether the data is array or object
    const isArray = useCallback((item: DropdownSectionData | DropdownSectionData[]): item is DropdownSectionData[] => {
        return item instanceof Array
    }, [])

    //get render data
    const jsx = []
    //type guard to be sure the data is defined
    if (dropdownSectionData) {
        //looping on the data and mutating it into a jsx array
        let section: DropdownSectionTypes
        for (section in dropdownSectionData) {
            //defining the item outside of the if statement to apply the user-defined type guard
            const dropdownSectionItem = dropdownSectionData[section]
            //applying the type guard to make sure it's an array
            if (isArray(dropdownSectionItem)) {
                //looping over the array and pushing the items to the jsx array
                dropdownSectionItem.forEach(item => {// eslint-disable-line no-loop-func
                    jsx.push(
                        <DropdownSection
                            key={v4()}
                            type={section}
                            payload={item}
                            reset={reset}
                        />
                    )
                })

            } else {

                jsx.push(
                    <DropdownSection
                        key={v4()}
                        type={section}
                        payload={dropdownSectionItem}
                        reset={reset}
                    />
                )
            }
        }
    }
    return (
        <>
            {jsx.length > 0 ? jsx : null}
        </>
    )
}
export default memo(DropdownContainer)
