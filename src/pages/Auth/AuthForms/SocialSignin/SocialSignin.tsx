import React from 'react'
import SocialMediaIcon from '../../../../components/SocialMediaIcon/SocialMediaIcon'
import { ProviderId } from '../../../../@types/AuthTypes'
import classes from './SocialSignin.module.css'

interface Props {
    socialSigninHandler: (providerType: ProviderId) => void
}

const SocialSignin: React.FC<Props> = props => {

    return (
        <div className={classes.socialContainer}>
            <SocialMediaIcon type="google" clickHandler={props.socialSigninHandler.bind(null, "google.com")} />
            <SocialMediaIcon type="github" clickHandler={props.socialSigninHandler.bind(null, "github.com")} />
            <SocialMediaIcon type="facebook" clickHandler={props.socialSigninHandler.bind(null, "facebook.com")} />
            <SocialMediaIcon type="twitter" clickHandler={props.socialSigninHandler.bind(null, "twitter.com")} />
        </div>
    )
}

export default SocialSignin
