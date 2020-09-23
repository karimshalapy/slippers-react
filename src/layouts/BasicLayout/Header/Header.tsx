import React, { useReducer, useCallback } from 'react'
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem'
import classes from './Header.module.css'
import { Reducer, ClickHandler } from './HeaderTypes'
import { reducer, initialState } from './HeaderReducer'

const Header: React.FC = () => {

    const [state, dispatch] = useReducer<Reducer>(reducer, initialState)

    const changeDropDown = useCallback<ClickHandler>((actionType) => {
        dispatch({ type: actionType })
    }, [])

    const resetState = useCallback(() => {
        dispatch({ type: "init" })
    }, [])


    return (
        <header className={classes.MainNavHeader}>
            <ul className={classes.NavLeft}>
                <HeaderNavItem
                    linkText="men"
                    open={state.men}
                    clickHandler={changeDropDown}
                    reset={resetState}
                    navType="men"
                />
                <HeaderNavItem
                    linkText="women"
                    open={state.women}
                    clickHandler={changeDropDown}
                    reset={resetState}
                    navType="women"
                />
            </ul>
            {/* <a href="/">home</a> */}
            <ul className={classes.NavRight}>
                <HeaderNavItem
                    linkText="gifting"
                    open={state.gift}
                    clickHandler={changeDropDown}
                    reset={resetState}
                    navType="gift"
                />
                <HeaderNavItem
                    linkText="discover more"
                    open={state.discover}
                    clickHandler={changeDropDown}
                    reset={resetState}
                    navType="discover"
                />
            </ul>
        </header>
    )
}

export default Header
