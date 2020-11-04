import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button/Button'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import { auth } from '../../../Firebase'
import { singinSchema } from '../AuthFormsValidation'
import { SigninFormInputs } from '../AuthTypes'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import classes from './Signin.module.css'

interface Props {
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void,
}

const Signin: React.FC<Props> = props => {

    const [signinSubmitError, setSigninSubmitError] = useState<string>()
    const { register, handleSubmit, errors } = useForm<SigninFormInputs>({
        resolver: singinSchema,
        mode: "onChange",
    })

    const signInHandler = (data: SigninFormInputs) => {
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(() => setSigninSubmitError(undefined))
            .catch(err => setSigninSubmitError(err.message))
    }

    return (
        <div className={[classes.SigninContainer, props.isSignup ? classes.RightPanelActive : ""].join(" ")}>
            <form onSubmit={handleSubmit(signInHandler)} noValidate>
                <h1>Sign in</h1>

                <span>or use your account</span>
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
                {signinSubmitError ? <p className={classes.SubmitErrorMessage}>{signinSubmitError}</p> : null}
                <a href="#">Forgot your password?</a>
                <Button>Sign In</Button>
                <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType={"signin"} />
            </form>
        </div>
    )
}

export default Signin
