import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { isSizesFilterSection } from '../../../../helpers/typeCheckers'
import { RootReducer } from '../../../../@types/reducersTypes'
import { FilterItemsTypes, FilterSectionTypes, GenderSizes } from '../../../../@types/SlippersTypes.d'
import classes from './FilterSection.module.css'

interface Props {
    title?: string,
    filterItems?: FilterItemsTypes,
    loading?: boolean,
    type?: FilterSectionTypes,
    changeHandler?: (type: FilterSectionTypes, value: string) => void,
}

const FilterSection: React.FC<Props> = ({ title, filterItems, loading, type, changeHandler }) => {

    const state = useSelector((state: RootReducer) => state.filterState)

    const getSectionJsx = useCallback((value: string, extraData?: string) => {
        return (
            <React.Fragment key={value}>
                <input
                    type="checkbox"
                    id={`${type}-${value}`}
                    name={type}
                    className={classes.DefaultCheckBox}
                    value={value}
                    checked={state![type!] === value}
                    onChange={e => changeHandler!(type!, e.target.value)}
                />
                <label
                    htmlFor={`${type}-${value}`}
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
    }, [changeHandler, state, type])

    const getRenderData = useCallback(() => {
        if (filterItems && !loading && changeHandler && state && type) {
            return (
                <>
                    <h3 className={classes.FilterSectionHeader}>{title}</h3>
                    { !isSizesFilterSection(filterItems)
                        ?
                        filterItems.map(item => getSectionJsx(item))
                        : (
                            state.gender === "men" || state.gender === "women"
                                ?
                                filterItems[GenderSizes[state.gender]].map(item => getSectionJsx(item.eu.toString(), item.us))
                                :
                                <label className={`${classes.CheckboxLabel} ${classes.ChooseAbove}`}>please select men or women above to see available sizes</label>
                        )}
                </>
            )

        }

        //rendering blank grey blocks when loading
        return (
            <>
                <h3 className={`${classes.FilterSectionHeader} ${classes.PerserveWidthWhileLoading} Loading `}>&nbsp;</h3>
                {[...Array(5)].map(() => (
                    <React.Fragment key={v4()}>
                        <label className={`${classes.CheckboxLabel} ${classes.PerserveWidthWhileLoading} Loading  `}>&nbsp;</label>
                    </React.Fragment>
                ))}
            </>
        )
    }, [filterItems, loading, title, type, changeHandler, state, getSectionJsx])

    return (
        <div>
            {
                getRenderData()
            }
        </div>
    )
}

export default FilterSection
