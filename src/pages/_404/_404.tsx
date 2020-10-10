import React from 'react'
import { Link } from 'react-router-dom'
import classes from './_404.module.css'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'

const _404: React.FC = () => {
    return (
        <section className={classes._404}>
            <ScrollToTopOnPathChange />
            <h1>Page not found</h1>
            <p>We're sorry, but the page you're looking for could not be found. Go back to our <Link to="/">homepage</Link>, or check out some of our favourite items below:</p>
        </section>
    )
}

export default _404
