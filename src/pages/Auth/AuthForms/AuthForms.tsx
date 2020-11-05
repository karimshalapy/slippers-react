import React, { useState } from 'react'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import Button from '../../../components/Button/Button'
import classes from './AuthForms.module.css'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import { SignupFormInputs, SigninFormInputs, AuthFormTypes } from '../AuthTypes'
import { auth } from '../../../Firebase'
import { DeepMap, FieldError, Resolver, useForm } from 'react-hook-form'
import { singinSchema, singupSchema } from '../AuthFormsValidation'
import firebase from 'firebase/app'

interface Props {
    formType: AuthFormTypes,
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
}

const Signup: React.FC<Props> = props => {

    const [formSubmitError, setFormSubmitError] = useState<string>()

    const { register, handleSubmit, errors } = useForm<SignupFormInputs | SigninFormInputs>({
        mode: "onChange",
        resolver: (props.formType === "signup" ? singupSchema : singinSchema) as Resolver<SignupFormInputs | SigninFormInputs, object>
    })

    const catchFormSubmitError = (promise: Promise<void | firebase.auth.UserCredential | undefined>) => {
        promise
            .then(() => setFormSubmitError(undefined))
            .catch(err => setFormSubmitError(err.message))
    }

    const formSubmitHandler = (data: SignupFormInputs | SigninFormInputs) => {
        if (props.formType === "signin") {
            catchFormSubmitError(
                auth.signInWithEmailAndPassword(data.email, data.password)
            )

        } else if (props.formType === "signup" && "name" in data) {
            catchFormSubmitError(
                auth.createUserWithEmailAndPassword(data.email, data.password)
                    .then(userData => userData.user?.updateProfile({ displayName: data.name }))
            )
        }
    }

    const isSignupForm = () => props.formType === "signup"
    const isSignupErrorsType = (errors: DeepMap<SignupFormInputs, FieldError> | DeepMap<SigninFormInputs, FieldError>): errors is DeepMap<SignupFormInputs, FieldError> => isSignupForm()

    return (
        <div className={[
            isSignupForm() ? classes.SignupContainer : classes.SigninContainer,
            props.isSignup ? classes.RightPanelActive : " "
        ].join(" ")}>

            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <h1>{isSignupForm() ? "Create Account" : "Sign in"}</h1>

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
                {isSignupForm() ? null : <a href="#">Forgot your password?</a>}
                <Button>{isSignupForm() ? "Sign Up" : "Sign In"}</Button>
                <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType={isSignupForm() ? "signup" : "signin"} />
            </form>
        </div>
    )
}

export default Signup
