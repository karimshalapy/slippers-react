import React from 'react'
import classes from './FilterSection.module.css'

interface Props {
    title: string,
    filterItems: string[]
}

const FilterSection: React.FC<Props> = props => {
    return (
        <div>
            <h3 className={classes.FilterSectionHeader}>{props.title}</h3>
            {
                props.filterItems.map(item => (
                    <React.Fragment key={item}>
                        <input
                            type="checkbox"
                            id={`${props.title}-${item}`}
                            name={`${props.title}-${item}`}
                            className={classes.DefaultCheckBox}
                        />
                        <label
                            htmlFor={`${props.title}-${item}`}
                            className={classes.CheckboxLabel}
                        >
                            {item}
                        </label>
                    </React.Fragment>
                ))

            }
        </div>
    )
}

export default FilterSection
