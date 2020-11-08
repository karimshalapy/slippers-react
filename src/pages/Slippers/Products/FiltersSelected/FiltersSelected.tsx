import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilterState, updateFilterState } from '../../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../../@types/reducersTypes'
import { SlipperFilterState } from '../../../../@types/SlippersTypes'
import classes from './FiltersSelected.module.css'

interface Props {

}

const mapFilterStateToText = {
    "gender": "gender",
    "sizes": "size",
    "collection": "collection",
    "upperColor": "upper color",
    "soleColor": "sole color",
}

const FiltersSelected: React.FC<Props> = props => {

    const filterState = useSelector((state: RootReducer) => state.filterState)
    const dispatch = useDispatch()

    const clickHandler = useCallback((e: React.MouseEvent) => {
        const targetClicked = e.target as HTMLButtonElement
        const typeClicked = targetClicked.dataset.type as keyof SlipperFilterState | "viewAll"
        const valueClicked = targetClicked.dataset.value

        if (typeClicked === "viewAll") dispatch(resetFilterState())
        else if (valueClicked) dispatch(updateFilterState(typeClicked, valueClicked))

    }, [dispatch])

    return (
        <ul className={classes.SelectedFiltersList}>
            {
                Object.entries(filterState)
                    .filter((item): item is [keyof SlipperFilterState, string | null] => !!item[1])
                    .map(([key, value]) => (
                        <li key={`${key}-${value}`} className={classes.SelectedFilter} >
                            <button
                                data-type={key}
                                data-value={value}
                                onClick={clickHandler}
                            >
                                {mapFilterStateToText[key]}: {value}
                            </button>
                        </li>
                    ))
            }
            {

                Object.values(filterState) //loop over all values to check if there's at least one that's not null 
                    .map(item => !!item)
                    .reduce((accm, item) => accm || item, false)
                    ? // show the view all button if there's at least one value that's not null
                    <li className={classes.SelectedFilter} >
                        <button data-type="viewAll" onClick={clickHandler}>view all</button>
                    </li>
                    : null //hide the button if there's no values
            }
        </ul>
    )
}

export default FiltersSelected
