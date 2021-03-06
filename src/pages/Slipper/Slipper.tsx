import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import ProductShowcase from './ProductShowcase/ProductShowcase'

interface Props {

}

const Slipper: React.FC<Props> = props => {


    return (
        <>
            <ScrollToTopOnPathChange />
            <ProductShowcase />
            <Switch>
                <Route path="/slipper/classic" exact render={() => <div></div>} />
                <Route path="/slipper/luxe" exact render={() => <div></div>} />
                <Route path="/slipper/flow" exact render={() => <div></div>} />
                <Route path="/slipper/canvas" exact render={() => <div></div>} />
                <Redirect from="/slipper" to="/slipper/classic" />
            </Switch>

        </>
    )
}

export default Slipper
