import React, { useState } from 'react'
import classes from './Auth.module.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Overlay from './Overlay/Overlay';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Props {

}

const Auth: React.FC<Props> = props => {

    const [isSignup, setIsSignup] = useState(false)
    const windowWidth = useWindowWidth()

    const switchPanelHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsSignup(prev => !prev)
    }

    return (
        <>
            <div className={classes.AuthContainer}>
                <Signup isSignup={isSignup} switchPanelHandler={switchPanelHandler} />
                <Signin isSignup={isSignup} switchPanelHandler={switchPanelHandler} />
                {
                    windowWidth && windowWidth > 500
                        ?
                        <Overlay isSignup={isSignup} switchPanelHandler={switchPanelHandler} />
                        : null
                }
            </div>
        </>
    )
}

export default Auth
