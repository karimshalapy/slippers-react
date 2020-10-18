import React from 'react'
import classes from './MobileFiltersButton.module.css'

interface Props {
    changeOpen: () => void
}

const MobileFilterButton: React.FC<Props> = props => {
    return (
        <button className={classes.FiltersButton} onClick={props.changeOpen}>
            filters
            <div>
                <span>
                    1
                </span>
            </div>
        </button>
    )
}

export default MobileFilterButton
