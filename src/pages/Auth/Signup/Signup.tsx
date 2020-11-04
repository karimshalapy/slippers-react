import React, { useState } from 'react'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import Button from '../../../components/Button/Button'
import classes from './Signup.module.css'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import { SignupFormInputs } from '../AuthTypes'
import { auth } from '../../../Firebase'
import { useForm } from 'react-hook-form'
import { singupSchema } from '../AuthFormsValidation'

interface Props {
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
}

const Signup: React.FC<Props> = props => {

    const [signupSubmitError, setSignupSubmitError] = useState<string>()

    const { register, handleSubmit, errors } = useForm<SignupFormInputs>({
        mode: "onChange",
        resolver: singupSchema
    })

    const signUpHandler = (data: SignupFormInputs) => {
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(userData => userData.user?.updateProfile({ displayName: data.name }))
            .then(() => setSignupSubmitError(undefined))
            .catch(err => setSignupSubmitError(err.message))
    }
    return (
        <div className={[classes.SignupContainer, props.isSignup ? classes.RightPanelActive : " "].join(" ")}>
            <form onSubmit={handleSubmit(signUpHandler)}>
                <h1>Create Account</h1>

                <span>or use your email for registration</span>
                <InputWithLabelAsPlaceholder
                    inputType="text"
                    labelText="Name"
                    inputName="name"
                    error={errors.name?.message}
                    ref={register}
                />
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
                {signupSubmitError ? <p className={classes.SubmitErrorMessage}>{signupSubmitError}</p> : null}
                <Button>Sign Up</Button>
                <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType="signup" />
            </form>
        </div>
    )
}

export default Signup
