import React from 'react'
import classes from './HeaderNavItems.module.css'
import HeaderNavItem from './HeaderNavItem/HeaderNavItem'
import { ClickHandler, State } from '../HeaderTypes'

interface Props {
    openState: State
    clickHandler: ClickHandler
    reset: () => void
}

const HeaderNavItems: React.FC<Props> = props => {
    return (
        <nav className={classes.Nav}>
            <ul className={classes.NavLeft}>
                <HeaderNavItem
                    linkText="men"
                    open={props.openState.men}
                    clickHandler={props.clickHandler}
                    reset={props.reset}
                    navType="men"
                />
                <HeaderNavItem
                    linkText="women"
                    open={props.openState.women}
                    clickHandler={props.clickHandler}
                    reset={props.reset}
                    navType="women"
                />
            </ul>
            <ul className={classes.NavRight}>
                <HeaderNavItem
                    linkText="gifting"
                    open={props.openState.gift}
                    clickHandler={props.clickHandler}
                    reset={props.reset}
                    navType="gift"
                />
                <HeaderNavItem
                    linkText="discover more"
                    open={props.openState.discover}
                    clickHandler={props.clickHandler}
                    reset={props.reset}
                    navType="discover"
                />
            </ul>
        </nav>
    )
}

export default HeaderNavItems
