import React from 'react'
import FilterSection from './FilterSection/FilterSection'
import classes from './FliterProducts.module.css'

interface Props {

}

const FliterProducts: React.FC<Props> = props => {
    return (
        <form className={classes.FilterSection}>
            <h2>filters</h2>
            <FilterSection title="shopping for:" filterItems={["men", "women", "helicopter"]} />
            <FilterSection title="collections:" filterItems={["classic", "luxe", "canvas", "flow"]} />
            <FilterSection title="upper colour:" filterItems={["beige", "black", "grey", "green", "white", "blue", "pink",]} />
            <FilterSection title="sole colour:" filterItems={["beige", "white", "grey", "pink", "purple", "black", "yellow", "SYMC",]} />
        </form>
    )
}

export default FliterProducts
