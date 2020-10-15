import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import { FilterItemsTypes, FilterSectionTypes, GenderSizeFilterTypes, GenderSizes } from '../../SlippersTypes.d'
import classes from './FilterSection.module.css'

interface Props {
    title?: string,
    filterItems?: FilterItemsTypes,
    loading?: boolean,
    type?: FilterSectionTypes,
    changeHandler?: (type: FilterSectionTypes, value: string) => void,
}

const FilterSection: React.FC<Props> = ({ title, filterItems, loading, type, changeHandler }) => {

    const isSizesSection = useCallback((filterItems: FilterItemsTypes): filterItems is GenderSizeFilterTypes => {
        return typeof filterItems[0] !== "string"
    }, [])

    const state = useSelector((state: RootReducer) => state.filterState)

    const getSectionJsx = useCallback((value: string, extraData?: string) => {
        return (
            <React.Fragment key={value}>
                <input
                    type="checkbox"
                    id={`${title}-${value}`}
                    name={type}
                    className={classes.DefaultCheckBox}
                    value={value}
                    checked={state![type!] === value}
                    onChange={e => changeHandler!(type!, e.target.value)}
                />
                <label
                    htmlFor={`${title}-${value}`}
                    className={classes.CheckboxLabel}
                >
                    {type === "sizes"
                        ?
                        <>
                            {extraData!} <span>(EU {value})</span>
                        </>
                        :
                        value
                    }
                </label>
            </React.Fragment>
        )
    }, [changeHandler, state, title, type])

    const getRenderData = useCallback(() => {
        if (filterItems && !loading && changeHandler && state && type) {
            return (
                <>
                    <h3 className={classes.FilterSectionHeader}>{title}</h3>
                    { !isSizesSection(filterItems)
                        ?
                        filterItems.map(item => getSectionJsx(item))
                        :
                        state.gender
                            ?
                            filterItems[GenderSizes[state.gender as "men" | "women"]].map(item => getSectionJsx(item.eu.toString(), item.us))
                            :
                            <label className={`${classes.CheckboxLabel} ${classes.ChooseAbove}`}>please select men or women above to see available sizes</label>

                    }
                </>
            )

        }
        return null
    }, [filterItems, loading, title, type, isSizesSection, changeHandler, state, getSectionJsx])

    return (
        <div>
            {
                getRenderData()
            }
        </div>
    )
}

export default FilterSection
