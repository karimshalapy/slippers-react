import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import classes from './Products.module.css'

interface Props {

}

const Products: React.FC<Props> = props => {

    const productsData = useSelector((state: RootReducer) => state.productsData.filteredProducts)

    return (
        <>
            <article className={classes.SlipperArticle}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0238/5795/collections/Screen_Shot_2020-01-09_at_10.37.29_AM_9e7fc503-cd53-44f5-b854-4c1720d2443d_2000x.png?v=1593689007"
                    alt=""
                />
                <p>
                    browse our range of beautifully designed slippers for men and women.<br />
                    we have wool-lined slippers for cooler months and colder floors, and the light, flexible “flow” slipper for comfort and support, without the wool lining. all our slippers have a durable hybrid sole, and are the perfect companion when working from home.<br />
                    take your time browsing.<br />
                </p>
            </article>
            <ul className={classes.ProductsList}>
                {productsData ?
                    productsData.map(item => (
                        <li className={classes.Product} key={v4()}>
                            <Link to={`/${item.type}-slipper?upper=${item.upperColorShortened}&sole=${item.soleColorShortened}`}>
                                <img src={item.mainImageUrl} alt={item.mainImageAlt} className={classes.MainImage} />
                                <img src={item.secondaryImageUrl} alt={item.secondaryImageAlt} className={classes.SecondaryImage} />
                                <h3>mahabis {item.type}</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.colorText }}></p>
                                <data value={item.price.usd}>${item.price.usd}</data>
                            </Link>
                        </li>
                    )) : null
                }
            </ul>
        </>
    )
}

export default Products
