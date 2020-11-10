import React from 'react'
import classes from './EmptyPageTextWrapper.module.css'

interface Props {

}

const EmptyPageTextWrapper: React.FC<Props> = props => {
    return (
        <div className={classes.TextWrapper}>
            {props.children}
        </div>
    )
}

export default EmptyPageTextWrapper
