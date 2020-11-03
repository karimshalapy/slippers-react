import React, { forwardRef } from 'react'
import classes from './InputWithLabelAsPlaceholder.module.css'

interface Props {
    inputType: string,
    labelText: string,
}

const InputWithLabelAsPlaceholder = forwardRef<HTMLInputElement, Props>((props, nodeRef) => {
    return (
        <div className={classes.InputContainer}>
            <input className={classes.InputField} type={props.inputType} ref={nodeRef} placeholder=" " />
            <label className={classes.Label}>{props.labelText}</label>
        </div>
    )
})

export default InputWithLabelAsPlaceholder
