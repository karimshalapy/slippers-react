import React, { forwardRef, ReactElement } from 'react'
import useDisableScrollOnModalOpen from '../../hooks/useDisableScrollOnModalOpen'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

interface Props {
    show: boolean,
    closeModalHandler: () => void,
    children?: ReactElement | null | never[]
}

const Modal = forwardRef<HTMLDivElement, Props>((props, nodeRef) => {
    useDisableScrollOnModalOpen(true)

    return (
        <>
            <div className={classes.Modal} ref={nodeRef}>{props.children}</div>
            <Backdrop show={props.show} clickHandler={props.closeModalHandler} zIndex={49999} />
        </>
    )
})

export default Modal
