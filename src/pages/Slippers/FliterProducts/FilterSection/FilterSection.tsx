import React, { useCallback } from 'react'
import { FilterItemsTypes, GenderSizeFilterTypes } from '../../SlippersTypes.d'
import classes from './FilterSection.module.css'

interface Props {
    title?: string,
    filterItems?: FilterItemsTypes,
    loading?: boolean
}

const FilterSection: React.FC<Props> = ({ title, filterItems, loading }) => {

    const isGenderSection = useCallback((filterItems: FilterItemsTypes): filterItems is GenderSizeFilterTypes => {
        return typeof filterItems[0] !== "string"
    }, [])

    const getRenderData = useCallback(() => {
        if (filterItems && !loading) {
            if (!isGenderSection(filterItems)) {
                return (
                    <>
                        <h3 className={classes.FilterSectionHeader}>{title}</h3>
                        {
                            filterItems.map(item => (
                                <React.Fragment key={item}>
                                    <input
                                        type="checkbox"
                                        id={`${title}-${item}`}
                                        name={item}
                                        className={classes.DefaultCheckBox}
                                    />
                                    <label
                                        htmlFor={`${title}-${item}`}
                                        className={classes.CheckboxLabel}
                                    >
                                        {item}
                                    </label>
                                </React.Fragment>
                            ))

                        }
                    </>
                )
            } else {
                return null
            }
        }
        return null
    }, [filterItems, loading, title, isGenderSection])

    return (
        <div>
            {
                getRenderData()
            }
        </div>
    )
}

export default FilterSection
