import React from 'react'
import Button from '../../../components/Button/Button'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'
import classes from './Signin.module.css'

interface Props {
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
}

const Signin: React.FC<Props> = props => {
    return (
        <div className={[classes.SigninContainer, props.isSignup ? classes.RightPanelActive : ""].join(" ")}>
            <form>
                <h1>Sign in</h1>

                <span>or use your account</span>
                <InputWithLabelAsPlaceholder inputType="email" labelText="Email" />
                <InputWithLabelAsPlaceholder inputType="password" labelText="Password" />
                <a href="#">Forgot your password?</a>
                <Button>Sign In</Button>
                <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType={"signin"} />
            </form>
        </div>
    )
}

export default Signin
