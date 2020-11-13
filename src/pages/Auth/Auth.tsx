import React, { useEffect, useState } from 'react'
import classes from './Auth.module.css'
import AuthForms from './AuthForms/AuthForms'
import Overlay from './Overlay/Overlay'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import useWindowWidth from '../../hooks/useWindowWidth'
import { useHistory, useLocation } from 'react-router-dom'
import queryParamsSplitIntoArray from '../../helpers/queryParamsSplitIntoArray'
import useConditionalRedirect from '../../hooks/useConditionalRedirect'
import ModalGenerator from '../../components/hoc/ModalGenerator/ModalGenerator'
import LinkAccountModalContent from './LinkAccountModalContent/LinkAccountModalContent'
import firebase from 'firebase/app'
import { AuthFormInputs } from '../../@types/AuthTypes'
import { auth } from '../../Firebase'

interface Props {

}

const Auth: React.FC<Props> = props => {
    const [isSignup, setIsSignup] = useState(false)
    const windowWidth = useWindowWidth()
    const history = useHistory()
    const { search } = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [linkAccountPendingcreds, setLinkAccountPendingCreds] = useState<firebase.auth.AuthCredential | null>(null)
    const [activeEmail, setActiveEmail] = useState<string | null>(null)
    const [formSubmitError, setFormSubmitError] = useState<string>()
    useConditionalRedirect(true)

    const switchPanelHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        setFormSubmitError(undefined)
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

    const linkAccountsSubmitHandler = (data: AuthFormInputs) => {
        if (linkAccountPendingcreds && activeEmail) {
            auth.signInWithEmailAndPassword(activeEmail, data.password)
                .then((user) => {
                    setModalOpen(false)
                    user.user?.linkWithCredential(linkAccountPendingcreds)
                })
                .then(() => {
                    console.log("linked")
                })
                .catch(err => {
                    setModalOpen(false)
                    setFormSubmitError(err.message)
                })
        }

    }
    useEffect(() => {
        history.replace({
            search: `?signup=${isSignup}`
        })
    }, [isSignup, history])

    return (
        <>
            <ScrollToTopOnPathChange />
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
                            setActiveEmail={setActiveEmail}
                            setLinkAccountPendingCreds={setLinkAccountPendingCreds}
                            setModalOpen={setModalOpen}
                            formSubmitError={formSubmitError}
                            setFormSubmitError={setFormSubmitError}
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
            <ModalGenerator closeModalHandler={() => { }} show={modalOpen}>
                <LinkAccountModalContent
                    linkAccountsSubmitHandler={linkAccountsSubmitHandler}
                />
            </ModalGenerator>
        </>
    )
}

export default Auth
