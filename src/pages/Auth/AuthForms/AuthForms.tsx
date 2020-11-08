import React, { useState } from 'react'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import Button from '../../../components/Button/Button'
import classes from './AuthForms.module.css'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import { SignupFormInputs, SigninFormInputs, AuthFormTypes, ProviderId } from '../../../@types/AuthTypes'
import { auth, EmailAuthProvider, getProviderId } from '../../../Firebase'
import { DeepMap, FieldError, Resolver, useForm } from 'react-hook-form'
import { singinSchema, singupSchema } from '../AuthFormsValidation'
import SocialSignin from '../SocialSignin/SocialSignin'
import CircleSpinner from '../../../components/CircleSpinner/CircleSpinner'

interface Props {
    formType: AuthFormTypes,
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup: React.FC<Props> = props => {

    const [formSubmitError, setFormSubmitError] = useState<string>()

    const { register, handleSubmit, errors } = useForm<SignupFormInputs | SigninFormInputs>({
        mode: "onChange",
        resolver: (props.formType === "signup" ? singupSchema : singinSchema) as Resolver<SignupFormInputs | SigninFormInputs, object>
    })

    const formSubmitHandler = (data: SignupFormInputs | SigninFormInputs) => {
        if (props.formType === "signin") {
            props.setIsLoading(true)
            auth.signInWithEmailAndPassword(data.email, data.password)
                .catch(err => {
                    props.setIsLoading(false)
                    setFormSubmitError(err.message)
                })

        } else if (props.formType === "signup" && "name" in data) {
            props.setIsLoading(true)
            //creating account with email and password
            auth.createUserWithEmailAndPassword(data.email, data.password)
                .then(userData => { //setting display name for account after successfully creating it
                    userData.user?.updateProfile({ displayName: data.name })
                    setFormSubmitError(undefined)
                    props.setIsLoading(false)
                })
                .catch(err => { //handling the error incase the Email is in use
                    if (err.code === "auth/email-already-in-use") {
                        auth.fetchSignInMethodsForEmail(data.email)
                            .then(providers => {
                                if (providers.includes("password")) {
                                    props.setIsLoading(false)
                                    setFormSubmitError("The email address is already in use by another account.")
                                } else {
                                    const provider = getProviderId(providers[0] as ProviderId)
                                    const pendingCred = EmailAuthProvider.credential(data.email, data.password)
                                    auth.signInWithPopup(provider!)
                                        .then((result) => {
                                            if (result.user?.email === data.email) result.user?.linkWithCredential(pendingCred).then((usercred) => {
                                                console.log("oauth linked")
                                                setFormSubmitError(undefined)
                                            })
                                            else throw new Error()
                                        })
                                        .catch(() => {
                                            props.setIsLoading(false)
                                            setFormSubmitError("Account Link Failed.")
                                        })
                                }
                            })
                    } else {
                        props.setIsLoading(false)
                        setFormSubmitError(err.messasge)
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
                        <SocialSignin />
                        <span>{isSignupForm() ? "or use your email for registration" : "or use your account"}</span>
                        {
                            isSignupForm() && isSignupErrorsType(errors)
                                ?
                                <InputWithLabelAsPlaceholder
                                    inputType="text"
                                    labelText="Name"
                                    inputName="name"
                                    error={errors.name?.message}
                                    ref={register}
                                />
                                : null
                        }
                        <InputWithLabelAsPlaceholder
                            inputType="email"
                            labelText="Email"
                            inputName="email"
                            error={errors.email?.message}
                            ref={register}
                        />
                        <InputWithLabelAsPlaceholder
                            inputType="password"
                            labelText="Password"
                            inputName="password"
                            error={errors.password?.message}
                            ref={register}
                        />
                        {formSubmitError ? <p className={classes.SubmitErrorMessage}>{formSubmitError}</p> : null}
                        {isSignupForm() ? null : <a href="#forgot">Forgot your password?</a>}
                        <Button>{isSignupForm() ? "Sign Up" : "Sign In"}</Button>
                        <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType={isSignupForm() ? "signup" : "signin"} />
                    </form>
            }
        </div>
    )
}

export default Signup
