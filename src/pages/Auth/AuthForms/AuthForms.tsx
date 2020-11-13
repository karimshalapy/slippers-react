import React from 'react'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import Button from '../../../components/Button/Button'
import classes from './AuthForms.module.css'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import { SignupFormInputs, SigninFormInputs, AuthFormTypes, ProviderId } from '../../../@types/AuthTypes'
import { auth, EmailAuthProvider, getProviderId } from '../../../Firebase'
import firebase from 'firebase/app'
import { DeepMap, FieldError, Resolver, useForm } from 'react-hook-form'
import { singinSchema, singupSchema } from '../AuthFormsValidation'
import SocialSignin from './SocialSignin/SocialSignin'
import CircleSpinner from '../../../components/CircleSpinner/CircleSpinner'

interface Props {
    formType: AuthFormTypes,
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveEmail: React.Dispatch<React.SetStateAction<string | null>>,
    setLinkAccountPendingCreds: React.Dispatch<React.SetStateAction<firebase.auth.AuthCredential | null>>
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setFormSubmitError: React.Dispatch<React.SetStateAction<string | undefined>>,
    formSubmitError?: string,
}

const AuthForms: React.FC<Props> = props => {

    const { register, handleSubmit, errors } = useForm<SignupFormInputs | SigninFormInputs>({
        mode: "onChange",
        resolver: (props.formType === "signup" ? singupSchema : singinSchema) as Resolver<SignupFormInputs | SigninFormInputs, object>
    })

    const socialSigninHandler = (providerType: ProviderId) => {
        const provider = getProviderId(providerType)
        auth.signInWithPopup(provider!)
            .catch((error) => {
                if (error.code === 'auth/account-exists-with-different-credential') {

                    const pendingCred = error.credential as firebase.auth.AuthCredential
                    const email = error.email
                    props.setLinkAccountPendingCreds(pendingCred)
                    props.setActiveEmail(email)
                    // Get sign-in methods for this email.
                    auth.fetchSignInMethodsForEmail(email)
                        .then((methods) => {
                            if (methods[0] === 'password') {
                                props.setModalOpen(true)
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
    const formSubmitHandler = (data: SignupFormInputs | SigninFormInputs) => {
        if (props.formType === "signin") {
            props.setIsLoading(true)
            auth.signInWithEmailAndPassword(data.email, data.password)
                .catch(err => {
                    props.setIsLoading(false)
                    props.setFormSubmitError(err.message)
                })

        } else if (props.formType === "signup" && "name" in data) {
            props.setIsLoading(true)
            //creating account with email and password
            auth.createUserWithEmailAndPassword(data.email, data.password)
                .then(userData => { //setting display name for account after successfully creating it
                    userData.user?.updateProfile({ displayName: data.name })
                    props.setFormSubmitError(undefined)
                    props.setIsLoading(false)
                })
                .catch(err => { //handling the error incase the Email is in use
                    if (err.code === "auth/email-already-in-use") {
                        auth.fetchSignInMethodsForEmail(data.email)
                            .then(providers => {
                                if (providers.includes("password")) {
                                    props.setIsLoading(false)
                                    props.setFormSubmitError("The email address is already in use by another account.")
                                } else {
                                    const provider = getProviderId(providers[0] as ProviderId)
                                    const pendingCred = EmailAuthProvider.credential(data.email, data.password)
                                    auth.signInWithPopup(provider!)
                                        .then((result) => {
                                            if (result.user?.email === data.email) result.user?.linkWithCredential(pendingCred).then((usercred) => {
                                                console.log("oauth linked")
                                                props.setFormSubmitError(undefined)
                                            })
                                            else throw new Error()
                                        })
                                        .catch(() => {
                                            props.setIsLoading(false)
                                            props.setFormSubmitError("Account Link Failed.")
                                        })
                                }
                            })
                    } else {
                        props.setIsLoading(false)
                        props.setFormSubmitError(err.messasge)
                    }
                })
        }
    }

    const isSignupForm = () => props.formType === "signup"
    const isSignupErrorsType = (errors: DeepMap<SignupFormInputs, FieldError> | DeepMap<SigninFormInputs, FieldError>): errors is DeepMap<SignupFormInputs, FieldError> => isSignupForm()

    return (
        <div className={[
            isSignupForm() ? classes.SignupContainer : classes.SigninContainer,
            props.isSignup ? classes.RightPanelActive : " "
        ].join(" ")}>
            {
                props.isLoading
                    ?
                    <CircleSpinner size={80} />
                    :
                    <form onSubmit={handleSubmit(formSubmitHandler)}>
                        <h1>{isSignupForm() ? "Create Account" : "Sign in"}</h1>
                        <SocialSignin socialSigninHandler={socialSigninHandler} />
                        <span>{isSignupForm() ? "or use your email for registration" : "or use your account"}</span>
                        {
                            isSignupForm() && isSignupErrorsType(errors)
                                ?
                                <InputWithLabelAsPlaceholder
                                    inputType="text"
                                    labelText="Name"
                                    inputName="name"
                                    autocomplete="name"
                                    error={errors.name?.message}
                                    ref={register}
                                />
                                : null
                        }
                        <InputWithLabelAsPlaceholder
                            inputType="email"
                            labelText="Email"
                            inputName="email"
                            autocomplete="email"
                            error={errors.email?.message}
                            ref={register}
                        />
                        <InputWithLabelAsPlaceholder
                            inputType="password"
                            labelText="Password"
                            inputName="password"
                            autocomplete={isSignupForm() ? "new-password" : "current-password"}
                            error={errors.password?.message}
                            ref={register}
                        />
                        {props.formSubmitError ? <p className={classes.SubmitErrorMessage}>{props.formSubmitError}</p> : null}
                        {isSignupForm() ? null : <a href="#forgot">Forgot your password?</a>}
                        <Button>{isSignupForm() ? "Sign Up" : "Sign In"}</Button>
                        <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType={isSignupForm() ? "signup" : "signin"} />
                    </form>
            }
        </div>
    )
}

export default AuthForms
