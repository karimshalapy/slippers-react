import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseUserContext } from '../../../../../App'
import { auth } from '../../../../../Firebase'
import classes from './UserPanelDropdown.module.css'

interface Props {
    dropdownActive: boolean
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>
}

const UserPanelDropdown: React.FC<Props> = ({ dropdownActive, setDropdownActive }) => {
    const user = useContext(FirebaseUserContext)
    const nodeRef = useRef(null)

    const documentClickHandler = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.parentNode?.parentNode !== nodeRef.current) setDropdownActive(false)
    }, [setDropdownActive])

    useEffect(() => {
        if (dropdownActive) document.addEventListener("click", documentClickHandler)
        return () => document.removeEventListener("click", documentClickHandler)
    }, [documentClickHandler, dropdownActive])

    return (
        <div className={`${classes.UserPanelDropdown} ${dropdownActive ? classes.Active : ""}`} ref={nodeRef}>
            <ul>
                {
                    user
                        ?
                        <>
                            <li><p>logged in as: <br /><span>{user.displayName}</span></p></li>
                            <li><Link to="/orders">Previous Orders</Link></li>
                            <li onClick={() => auth.signOut()}><Link to="/">Sign out</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/auth?signup=false">Sign in</Link></li>
                            <li><Link to="auth?signup=true">Create an Account</Link></li>
                        </>

                }
            </ul>
        </div>

    )
}

export default UserPanelDropdown
