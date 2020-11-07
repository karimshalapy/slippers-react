import React, { forwardRef, memo } from 'react'

interface Props {
    subscribed: boolean,
    alreadySubscribed: boolean,
    error: boolean,
    NewsletterHeading: string,
    SubscribeText: string,
    resetForm: () => void
}

const NewsletterSubmitResult = forwardRef<HTMLDivElement, Props>((props, nodeRef) => {
    const getSubmitResultJsx = () => {
        if (props.subscribed) {
            return (
                <>
                    <h2 className={props.NewsletterHeading}>thanks for signing up</h2>
                    <p className={props.SubscribeText}>check your inbox for your welcome email</p>
                </>
            )
        } else if (props.alreadySubscribed) {
            return (
                <>
                    <h2 className={props.NewsletterHeading}>you're already signed up</h2>
                    <p className={props.SubscribeText}>check your spam folder if you can't see our newsletter emails<br />please note: you will not receive a welcome email because you are already subscribed</p>
                </>
            )
        } else if (props.error) {
            return (
                <>
                    <h2 className={props.NewsletterHeading}>something went wrong</h2>
                    <p className={props.SubscribeText}>something is not right...<br />to try again <span onClick={props.resetForm}>click here</span></p>
                </>
            )
        }
    }
    return (
        <div ref={nodeRef}>{getSubmitResultJsx()}</div>
    )
})

export default memo(NewsletterSubmitResult)
