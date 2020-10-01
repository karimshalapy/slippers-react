import React from 'react'
import classes from './HomePrimaryBtn.module.css'

interface Props {
    classNames?: string[],
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HomePrimaryBtn: React.FC<Props> = props => {
    const btnClasses = props.classNames ? [classes.HomePrimaryBtn, ...props.classNames].join(" ") : classes.HomePrimaryBtn
    return (
        <button className={btnClasses} onClick={props.clickHandler}>
            {props.children}
        </button>
    )
}

export default HomePrimaryBtn
