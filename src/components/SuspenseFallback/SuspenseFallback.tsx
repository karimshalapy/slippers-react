import React from 'react'
import CircleSpinner from '../CircleSpinner/CircleSpinner'
import classes from './SuspenseFallback.module.css'

interface Props {

}

const SuspenseFallback: React.FC<Props> = props => {
    return (
        <div className={classes.FallbackContainer}>
            <CircleSpinner size={100} />
        </div>
    )
}

export default SuspenseFallback
