import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../../components/Button/Button'
import CircleSpinner from '../../../../../components/CircleSpinner/CircleSpinner'

interface Props {
    cartSuccess: boolean,
    cartError: boolean,
    cartLoading: boolean,
    closeModalHandler: () => void
}

const SlipperModalContent: React.FC<Props> = props => {
    if (props.cartLoading) return <CircleSpinner size={0} />
    if (props.cartSuccess) return (
        <section>
            <h2>Order Added Successfully <span role="img" aria-label="party">🎉</span></h2>
            <Button hasLink ghost ><Link to="/cart">go to cart</Link></Button>
            <Button ghost clickHandler={props.closeModalHandler}>continue shopping</Button>
        </section>
    )
    if (props.cartError) return (
        <section>
            <h2>Something went wrong!</h2>
            <Button ghost clickHandler={props.closeModalHandler}>try again</Button>
        </section>
    )
    return null
}

export default SlipperModalContent
