import React, { forwardRef } from 'react'
import classes from './InputWithLabelAsPlaceholder.module.css'

interface Props {
    inputType: string,
    labelText: string,
    inputName: string,
    autocomplete: string,
    error?: string
}

const InputWithLabelAsPlaceholder = forwardRef<HTMLInputElement, Props>((props, nodeRef) => {
    return (
        <>
            <div className={classes.InputContainer}>
                <input
                    className={[classes.InputField, props.error ? classes.Error : ""].join(" ")}
                    type={props.inputType}
                    ref={nodeRef}
                    name={props.inputName}
                    placeholder=" "
                    autoComplete={props.autocomplete}
                />
                <label className={classes.Label}>{props.labelText}</label>
            </div>
            <span className={classes.ErrorMessage}>{props.error}</span>
        </>
    )
})

export default InputWithLabelAsPlaceholder
