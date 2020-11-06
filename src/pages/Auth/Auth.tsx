import React, { useContext, useEffect, useState } from 'react'
import classes from './Auth.module.css';
import AuthForms from './AuthForms/AuthForms'
import Overlay from './Overlay/Overlay';
import useWindowWidth from '../../hooks/useWindowWidth';
import { useHistory, useLocation } from 'react-router-dom';
import queryParamsSplitIntoArray from '../../helpers/queryParamsSplitIntoArray';
import { FirebaseUserContext } from '../../App'

interface Props {

}

const Auth: React.FC<Props> = props => {
    const user = useContext(FirebaseUserContext)
    const [isSignup, setIsSignup] = useState(false)
    const windowWidth = useWindowWidth()
    const history = useHistory()
    const { search } = useLocation()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { if (user) history.replace("/") }, [user, history])

    const switchPanelHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsSignup(prev => !prev)
    }
    useEffect(() => {
        const paramsArr = queryParamsSplitIntoArray(search)
        paramsArr.forEach(([key, value]) => {
            if (key === "signup") {
                if (value === "true") setIsSignup(true)
                if (value === "false") setIsSignup(false)
            }
        })
        //the next comment is used to ignore the useCallback's dependancy because if we add the set it will render each cycle and we don't want that
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        history.replace({
            search: `?signup=${isSignup}`
        })
    }, [isSignup, history])

    return (
        <>
            <div className={classes.AuthContainer}>
                {
                    ["signup", "signin"].map(item => (
                        <AuthForms
                            key={item}
                            switchPanelHandler={switchPanelHandler}
                            setIsLoading={setIsLoading}
                            isSignup={isSignup}
                            isLoading={isLoading}
                            formType={item as "signup" | "signin"}
                        />
                    ))
                }
                {
                    windowWidth && windowWidth > 500
                        ?
                        <Overlay isLoading={isLoading} isSignup={isSignup} switchPanelHandler={switchPanelHandler} />
                        : null
                }
            </div>
        </>
    )
}

export default Auth
