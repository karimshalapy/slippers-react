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
                    clickHandler={changeDropDown.bind(null, "men")}
                    reset={resetState}
                />
                <HeaderNavItem
                    linkText="women"
                    open={state.women}
                    clickHandler={changeDropDown.bind(null, "women")}
                    reset={resetState}
                />
            </ul>
            {/* <a href="/">home</a> */}
            <ul className={classes.NavRight}>
                <HeaderNavItem
                    linkText="gifting"
                    open={state.gift}
                    clickHandler={changeDropDown.bind(null, "gift")}
                    reset={resetState}
                />
                <HeaderNavItem
                    linkText="discover more"
                    open={state.discover}
                    clickHandler={changeDropDown.bind(null, "discover")}
                    reset={resetState}
                />
            </ul>
        </header>
    )
}

export default Header
