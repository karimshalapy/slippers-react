import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { resetFilterState } from '../../../../store/actionsIndex/actionIndex'
import { SlippersProductData } from '../../SlippersTypes'
import classes from './ProductsList.module.css'

interface Props {
    productsData: SlippersProductData[] | undefined
}

const ProductsList: React.FC<Props> = props => {

    const dispatch = useDispatch()

    const linkClickHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(resetFilterState())
    }

    return (

        <ul>
            {
                <FadeSwitchTransition transitionKey={`products-${v4()}-filtered`} fast>
                    {
                        (nodeRef) => (
                            <div ref={nodeRef} className={[classes.ProductsList, props.productsData?.length === 0 ? classes.NoProducts : ""].join(" ")}>
                                {
                                    props.productsData
                                        ?
                                        props.productsData.length === 0
                                            ?
                                            <li className={classes.OutOfStock}>we are sorry we are out of stock, please check our <a href="/slippers" onClick={linkClickHandler}>main collection</a> to view the full range</li>
                                            :
                                            props.productsData.map(item => (
                                                <li className={classes.Product} key={v4()}>
                                                    <Link to={`/${item.collection}-slipper?upper=${item.upperColorShortened}&sole=${item.soleColorShortened}`}>
                                                        <img src={item.mainImageUrl} alt={item.mainImageAlt} className={classes.MainImage} />
                                                        <img src={item.secondaryImageUrl} alt={item.secondaryImageAlt} className={classes.SecondaryImage} />
                                                        <h3>mahabis {item.collection}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: item.colorText }}></p>
                                                        <data value={item.price.usd}>${item.price.usd}</data>
                                                    </Link>
                                                </li>
                                            ))
                                        : null
                                }
                            </div>
                        )
                    }
                </FadeSwitchTransition>
            }
        </ul>
    )
}

export default ProductsList
