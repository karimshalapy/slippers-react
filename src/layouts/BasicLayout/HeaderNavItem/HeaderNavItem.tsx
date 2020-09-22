import React from 'react'
import classes from './HeaderNavItem.module.css'

interface Props {
    linkText: string,
    open: boolean,
    clickHandler: () => void;
}

const HeaderNavItem: React.FC<Props> = props => {
    // the class variable to rotate the dropdown arrow and bolden the active nav link
    const dropDownClasses = [classes.NavLink, classes.closed, props.open ? classes.open : ""].join(" ");

    //handler to cancel the default of the link click and implement 
    const linkClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        props.clickHandler();
    }

    return (
        <li className={classes.NavItem}>
            <a href="/" className={dropDownClasses} onClick={linkClickHandler}>{props.linkText}</a>
        </li>
    )
}

export default HeaderNavItem
