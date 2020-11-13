import React from 'react'
import Modal from './Modal/Modal'
import Transitions from '../Transitions/Transitions'

interface Props {
    show: boolean,
    closeModalHandler: () => void
}

const ModalGenerator: React.FC<Props> = props => {
    return (
        <Transitions show={props.show} type="slideUp">
            {
                nodeRef => (
                    <Modal show={props.show} closeModalHandler={props.closeModalHandler} ref={nodeRef}>
                        {props.children}
                    </Modal>
                )
            }
        </Transitions>
    )
}

export default ModalGenerator
