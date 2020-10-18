import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import classes from './ProductArticle.module.css'

interface Props {

}

const ProductArticle: React.FC<Props> = props => {

    const { activeSlipper, productArticles } = useSelector((state: RootReducer) => ({
        activeSlipper: state.filterState.collection ? state.filterState.collection as SlippersTypes : "classic",
        productArticles: state.productsData.original?.productArticles
    }))

    return (
        <article className={[classes.SlipperArticle, productArticles ? "" : classes.Loading].join(" ")}>
            <div className={classes.ImageContainer}>
                <img
                    src={productArticles ? productArticles[activeSlipper].imgUrl : ""}
                    alt={productArticles ? productArticles[activeSlipper].imgAlt : ""}
                />
            </div>
            <p dangerouslySetInnerHTML={{ __html: productArticles ? productArticles[activeSlipper].articleText : "&nbsp;<br/><br/><br/>" }}></p>
        </article>
    )
}

export default ProductArticle
