import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { SlippersProductData } from '../../SlippersTypes'
import classes from './ProductsList.module.css'

interface Props {
    productsData: SlippersProductData[] | undefined
}

const ProductsList: React.FC<Props> = props => {
    return (

        <ul>
            {
                <FadeSwitchTransition transitionKey={`products-${v4()}-filtered`} fast>
                    {
                        (nodeRef) => (
                            <div ref={nodeRef} className={classes.ProductsList}>
                                {
                                    props.productsData
                                        ?
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
