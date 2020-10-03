import React from 'react'
import Backdrop from '../../../../../components/Backdrop/Backdrop';
import NavDropdownMenu from '../../NavDropdownMenu/NavDropdownMenu';
import classes from './HeaderNavItem.module.css'
import { DropdownMenusTypes, HeaderClickHandler } from '../../HeaderTypes'

interface Props {
    linkText: string,
    open: boolean,
    clickHandler: HeaderClickHandler,
    reset: () => void,
    navType: DropdownMenusTypes,
}

const HeaderNavItem: React.FC<Props> = props => {
    // the class variable to rotate the dropdown arrow and bolden the active nav link
    const dropDownClasses = [classes.NavLink, classes.closed, props.open ? classes.open : ""].join(" ");

    //handler to cancel the default of the link click and implement 
    const linkClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        props.clickHandler(props.navType);
    }

    const backdropClickHandler = (_: React.MouseEvent) => {
        props.reset()
    }

    return (
        <>
            <li className={classes.NavItem}>
                <a href="/" className={dropDownClasses} onClick={linkClickHandler}>{props.linkText}</a>
                <NavDropdownMenu show={props.open} type={props.navType} reset={props.reset} />
            </li>
            <Backdrop show={props.open} clickHandler={backdropClickHandler} />
        </>
    )
}

export default HeaderNavItem
