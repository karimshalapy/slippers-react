import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Newsletter.module.css'
import HomePrimaryBtn from '../../../components/HomePrimaryBtn/HomePrimaryBtn'

interface Props {

}

const Newsletter: React.FC<Props> = props => {
    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
    }

    return (
        <section className={classes.Newsletter}>
            <h2 className={classes.NewsletterHeading}>sign up and receive 10% off your first order</h2>
            <p className={classes.SubscribeText}>subscribe to our newsletter to hear about the latest news, promotions and more</p>
            <form>
                <input type="email" placeholder="Enter Email Address" className={classes.NewsletterInput} />
                <HomePrimaryBtn classNames={[classes.NewsletterBtn]} clickHandler={submitHandler}>sign up</HomePrimaryBtn>
            </form>
            <p className={classes.Disclaimer}>by signing up to our newsletter you are agreeing to our <Link to="/privacy" target="_blank">privacy policy</Link><br />
please note: only new subscribers and customers will receive an email</p>
        </section>
    )
}

export default Newsletter
