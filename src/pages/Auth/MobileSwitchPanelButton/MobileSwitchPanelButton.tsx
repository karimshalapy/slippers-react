import React from 'react'
import useWindowWidth from '../../../hooks/useWindowWidth'
import classes from './MobileSwitchPanelButton.module.css'

interface Props {
    switchPanelHandler: (e: React.MouseEvent) => void,
    panelType: "signup" | "signin"
}

const MobileSwitchPanelButton: React.FC<Props> = props => {
    const windowWidth = useWindowWidth()
    return (
        windowWidth && windowWidth < 500
            ?
            <button
                onClick={props.switchPanelHandler}
                className={[classes.Switch, props.panelType === "signup" ? classes.Signup : classes.Signin].join(" ")}
            >
                {
                    props.panelType === "signup"
                        ?
                        "already have an account? Sign in"
                        :
                        "don't have an account? Sign up"
                }
            </button>
            :
            null
    )
}

export default MobileSwitchPanelButton
