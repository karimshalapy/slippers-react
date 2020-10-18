import React from 'react'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import classes from './ProductArticle.module.css'

interface Props {

}

const ProductArticle: React.FC<Props> = props => {
    return (
        <FadeSwitchTransition fast transitionKey={`article-${v4()}-changed`}>
            {
                nodeRef => (
                    <div ref={nodeRef}>
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
                    </div>
                )
            }
        </FadeSwitchTransition>
    )
}

export default ProductArticle
