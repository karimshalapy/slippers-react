import React, { useCallback, useState, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import classes from './Newsletter.module.css'
import HomePrimaryBtn from '../../../components/HomePrimaryBtn/HomePrimaryBtn'
import { useForm } from 'react-hook-form'
import { Inputs, schema } from './newsletterValidation'
import FadeSwitchTransition from '../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'

const Newsletter: React.FC = () => {
    const [subscribed, setSubscribed] = useState(false)

    const { register, handleSubmit, errors } = useForm<Inputs>({
        defaultValues: {
            newsletterMail: ""
        },
        mode: "onSubmit",
        resolver: schema
    })

    const submitHandler = (data: Inputs) => {
        console.log(data);
        setSubscribed(true);
    }

    const getSectionData = useCallback<(x: React.RefObject<HTMLDivElement>) => ReactElement>((nodeRef) => {
        if (subscribed) {
            return (
                <div ref={nodeRef}>
                    <h2 className={classes.NewsletterHeading}>thanks for signing up</h2>
                    <p className={classes.SubscribeText}>check your inbox for your welcome email<br />please note: you will not receive an email if you are already a customer, or have already subscribed</p>
                </div>
            )
        } else {
            return (
                <div ref={nodeRef}>
                    <h2 className={classes.NewsletterHeading}>sign up and receive 10% off your first order</h2>
                    <p className={classes.SubscribeText}>subscribe to our newsletter to hear about the latest news, promotions and more</p>
                    <form onSubmit={handleSubmit(submitHandler)} noValidate>
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
                        <HomePrimaryBtn classNames={[classes.NewsletterBtn]}>sign up</HomePrimaryBtn>
                    </form>
                    <p className={classes.Disclaimer}>by signing up to our newsletter you are agreeing to our <Link to="/privacy" target="_blank">privacy policy</Link><br />please note: only new subscribers and customers will receive an email</p>
                </div>
            )
        }
    }, [handleSubmit, register, subscribed, errors])
    return (
        <section className={classes.Newsletter}>
            <FadeSwitchTransition switch={subscribed} keyText="subscribed">
                {getSectionData}
            </FadeSwitchTransition>
        </section>
    )
}

export default Newsletter
