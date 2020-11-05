import React from 'react'
import Button from '../../../components/Button/Button'
import classes from './Overlay.module.css'

interface Props {
    isSignup: boolean
    switchPanelHandler: (e: React.MouseEvent) => void
}

const Overlay: React.FC<Props> = props => {
    return (
        <div className={[classes.OverlayContainer, props.isSignup ? classes.RightPanelActive : ""].join(" ")}>
            <div className={classes.Overlay}>
                <img className={classes.FormBackgroundImage} src="https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-article-images%2Fbanner-canvas.jpg?alt=media" alt="form background" />
                <div className={`${classes.OverlayPanel} ${classes.OverlayLeft}`}>
                    <h1>Hello there!</h1>
                    <p>Do you already have an account?  <br />Click Sign in and enter your credentials to start shopping</p>
                    <Button classNames={[classes.Ghost]} outlined clickHandler={props.switchPanelHandler}>Sign In</Button>
                </div>
                <div className={`${classes.OverlayPanel} ${classes.OverlayRight}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Don't have an account?  <br />What are you waiting for? Click sign up and Enter your personal details and start journey with us</p>
                    <Button classNames={[classes.Ghost]} outlined clickHandler={props.switchPanelHandler}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Overlay
