import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'
import { getProdcuts } from '../../store/actionsIndex/actions/filteredActions'
import FliterProducts from './FliterProducts/FliterProducts'
import Products from './Products/Products'
import classes from './Slippers.module.css'

interface Props {

}

const Slippers: React.FC<Props> = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProdcuts())
    }, [dispatch])

    return (
        <>
            <ScrollToTopOnPathChange />
            <h1 className={classes.PageHeader}>slippers</h1>
            <div className={classes.SlippersPageWrapper}>
                <aside>
                    <FliterProducts />
                </aside>
                <section>
                    <Products />
                </section>
            </div>
        </>
    )
}

export default Slippers
