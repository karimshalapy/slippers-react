import React from 'react'
import SocialMediaIcon from '../../../components/SocialMediaIcon/SocialMediaIcon'
import { auth, getProviderId } from '../../../Firebase'
import { ProviderId } from '../../../@types/AuthTypes'
import classes from './SocialSignin.module.css'

interface Props {

}

const SocialSignin: React.FC<Props> = props => {

    const signinHandler = (providerType: ProviderId) => {
        const provider = getProviderId(providerType)
        auth.signInWithPopup(provider!)
            .catch((error) => {
                if (error.code === 'auth/account-exists-with-different-credential') {

                    const pendingCred = error.credential
                    const email = error.email
                    // Get sign-in methods for this email.
                    auth.fetchSignInMethodsForEmail(email)
                        .then((methods) => {
                            if (methods[0] === 'password') {
                                const password = prompt("input your E-mail password") // TODO: implement promptUserForPassword.
                                auth.signInWithEmailAndPassword(email, password || "")
                                    .then((user) => {
                                        return user.user?.linkWithCredential(pendingCred)
                                    })
                                    .then(() => {
                                        console.log("linked")
                                    })
                            } else {
                                const provider = getProviderId(methods[0] as ProviderId)
                                auth.signInWithPopup(provider!)
                                    .then((result) => {
                                        result.user?.linkWithCredential(pendingCred).then((usercred) => {
                                            console.log("oauth linked")
                                        })
                                    })
                            }
                        })
                }
            })
    }

    return (
        <div className={classes.socialContainer}>
            <SocialMediaIcon type="google" clickHandler={signinHandler.bind(null, "google.com")} />
            <SocialMediaIcon type="github" clickHandler={signinHandler.bind(null, "github.com")} />
            <SocialMediaIcon type="facebook" clickHandler={signinHandler.bind(null, "facebook.com")} />
            <SocialMediaIcon type="twitter" clickHandler={signinHandler.bind(null, "twitter.com")} />
        </div>
    )
}

export default SocialSignin
