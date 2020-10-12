import React from 'react'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import classes from './Slippers.module.css'

interface Props {

}

const Slippers: React.FC<Props> = props => {
    return (
        <>
            <ScrollToTopOnPathChange />
            <h1 className={classes.PageHeader}>slippers</h1>
            <div className={classes.SlippersPageWrapper}>
                <aside></aside>
                <section></section>
            </div>
        </>
    )
}

export default Slippers
