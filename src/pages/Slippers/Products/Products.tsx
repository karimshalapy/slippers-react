import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Products.module.css'

interface Props {

}

const Products: React.FC<Props> = props => {
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
                {
                    [...Array(25)].map(() => (
                        <li className={classes.Product}>
                            <Link to="/slipper">
                                <img src="https://cdn.mahabis.com/website/plp/images/MC-F-LG-SY-2.jpg?23" alt="" className={classes.MainImage} />
                                <img src="https://cdn.mahabis.com/website/plp/imagesHovered/MC-F-LG-SY.jpg" alt="" className={classes.SecondaryImage} />
                                <h3>mahabis classic</h3>
                                <p>light grey &amp; skane yellow</p>
                                <data value={109}>$109.00</data>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Products
