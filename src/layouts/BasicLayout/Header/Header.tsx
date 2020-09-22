import React, { useReducer, useCallback } from 'react'
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem'
import classes from './Header.module.css'
import { Reducer, ClickHandler } from './HeaderTypes'
import { reducer, initialState } from './HeaderReducer'

interface Props {

};

const Header: React.FC<Props> = () => {

    const [state, dispatch] = useReducer<Reducer>(reducer, initialState)

    const changeDropDown = useCallback<ClickHandler>((actionType) => {
        dispatch({ type: actionType })
    }, [])

    return (
        <header className={classes.MainNavHeader}>
            <ul className={classes.NavLeft}>
                <HeaderNavItem
                    linkText="men"
                    open={state.men}
                    clickHandler={changeDropDown.bind(null, "men")}
                />
                <HeaderNavItem
                    linkText="women"
                    open={state.women}
                    clickHandler={changeDropDown.bind(null, "women")}
                />
            </ul>
            {/* <a href="/">home</a> */}
            <ul className={classes.NavRight}>
                <HeaderNavItem
                    linkText="gifting"
                    open={state.gift}
                    clickHandler={changeDropDown.bind(null, "gift")}
                />
                <HeaderNavItem
                    linkText="discover more"
                    open={state.discover}
                    clickHandler={changeDropDown.bind(null, "discover")}
                />
            </ul>
        </header>
    )
}

export default Header
