import React from 'react'
import InputWithLabelAsPlaceholder from '../../../components/InputWithLabelAsPlaceholder/InputWithLabelAsPlaceholder'
import Button from '../../../components/Button/Button'
import classes from './Signup.module.css'
import MobileSwitchPanelButton from '../MobileSwitchPanelButton/MobileSwitchPanelButton'

interface Props {
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
}

const Signup: React.FC<Props> = props => {
    return (
        <div className={[classes.SignupContainer, props.isSignup ? classes.RightPanelActive : " "].join(" ")}>
            <form action="#">
                <h1>Create Account</h1>

                <span>or use your email for registration</span>
                <InputWithLabelAsPlaceholder inputType="text" labelText="Name" />
                <InputWithLabelAsPlaceholder inputType="email" labelText="Email" />
                <InputWithLabelAsPlaceholder inputType="password" labelText="Password" />
                <Button>Sign Up</Button>
                <MobileSwitchPanelButton switchPanelHandler={props.switchPanelHandler} panelType="signup" />
            </form>
        </div>
    )
}

export default Signup
