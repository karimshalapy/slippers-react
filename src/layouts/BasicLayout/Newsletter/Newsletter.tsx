import React, { useCallback, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import classes from './Newsletter.module.css'
import Button from '../../../components/Button/Button'
import { useForm } from 'react-hook-form'
import { Inputs, schema } from './newsletterValidation'
import FadeSwitchTransition from '../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import NewsletterSubmitResult from './NewsletterSubmitResult/NewsletterSubmitResult'
import CircleSpinner from '../../../components/CircleSpinner/CircleSpinner'
import { database } from '../../../Firebase'

const Newsletter: React.FC = () => {
    const [subscribed, setSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [alreadySubscribed, setAlreadySubscribed] = useState(false)

    const { register, handleSubmit, errors } = useForm<Inputs>({
        defaultValues: {
            newsletterMail: ""
        },
        mode: "onSubmit",
        resolver: schema
    })

    const submitHandler = useCallback((data: Inputs) => {
        setIsLoading(true)
        //patching newsletterSubscribers to add another key value pair to it if not duplicate and replacing all dots with _____dot_____ in the email in order to use it as a key in firebase database
        database.ref("/newsletterSubscribers").update({ [data.newsletterMail.replace(/\./g, "_____dot_____")]: true })
            .then(() => {
                setIsLoading(false)
                setSubscribed(true)
            })
            .catch((err) => {
                console.log(err.code)
                setIsLoading(false)
                if (err.code === "PERMISSION_DENIED") setAlreadySubscribed(true)
                else setError(true)
            })
    }, [])

    const resetForm = useCallback(() => {
        setSubscribed(false)
        setAlreadySubscribed(false)
        setIsLoading(false)
        setError(false)
    }, [])

    return (
        <section className={classes.Newsletter}>
            <FadeSwitchTransition transitionKey={`form-result-values${subscribed}${alreadySubscribed}${error}`}>
                {
                    nodeRef => (
                        subscribed || alreadySubscribed || error
                            ?
                            <NewsletterSubmitResult
                                ref={nodeRef}
                                subscribed={subscribed}
                                alreadySubscribed={alreadySubscribed}
                                error={error}
                                NewsletterHeading={classes.NewsletterHeading}
                                SubscribeText={classes.SubscribeText}
                                resetForm={resetForm}
                            />
                            :
                            <div ref={nodeRef}>
                                <h2 className={classes.NewsletterHeading}>sign up and receive 10% off your first order</h2>
                                <p className={classes.SubscribeText}>subscribe to our newsletter to hear about the latest news, promotions and more</p>
                                <form className={classes.NewsletterForm} onSubmit={handleSubmit(submitHandler)} noValidate>
                                    <div className={classes.InputContainer}>
                                        <input
                                            ref={register}
                                            name="newsletterMail"
                                            type="email"
                                            placeholder="Enter Email Address"
                                            className={[classes.NewsletterInput, errors.newsletterMail ? classes.IsError : ""].join(" ")}
                                        />
                                        {errors.newsletterMail ? <p className={classes.ErrorMessage}>{errors.newsletterMail.message}</p> : null}
                                    </div>
                                    <Button classNames={[classes.NewsletterBtn]} disabled={isLoading}>sign up</Button>
                                    {isLoading ? <div className={classes.LoadingSinnerContainer}><CircleSpinner size={20} /></div> : null}
                                </form>
                                <p className={classes.Disclaimer}>by signing up to our newsletter you are agreeing to our <Link to="/privacy" target="_blank">privacy policy</Link><br />please note: only new subscribers and customers will receive an email</p>
                            </div>
                    )

                }
            </FadeSwitchTransition>
        </section>
    )
}

export default memo(Newsletter)
