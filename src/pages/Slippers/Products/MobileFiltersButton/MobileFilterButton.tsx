import React from 'react'
import classes from './MobileFiltersButton.module.css'

interface Props {

}

const MobileFilterButton: React.FC<Props> = props => {
    return (
        <p className={classes.FiltersButton}>
            <div>
                filters
                <div>
                    <span>
                        1
                    </span>
                </div>
            </div>
        </p>
    )
}

export default MobileFilterButton
