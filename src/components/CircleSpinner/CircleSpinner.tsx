import React from 'react'
import classes from './CircleSpinner.module.css'

interface Props {
    size: number,
}

const CircleSpinner: React.FC<Props> = props => {
    return (
        <svg className={classes.Spinner} viewBox="0 0 50 50" style={{ width: props.size, height: props.size }}>
            <circle className={classes.Path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
    )
}

export default CircleSpinner
