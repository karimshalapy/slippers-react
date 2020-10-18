import React from 'react'
import classes from './MobileFiltersButton.module.css'

interface Props {

}

const MobileFilterButton: React.FC<Props> = props => {
    return (
        <button className={classes.FiltersButton}>
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
