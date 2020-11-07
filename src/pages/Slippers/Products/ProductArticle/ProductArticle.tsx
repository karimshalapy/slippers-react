import React from 'react'
import { useSelector } from 'react-redux'
import TextToMarkup from '../../../../helpers/TextToMarkup'
import { isSlipperType } from '../../../../helpers/typeCheckers'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import classes from './ProductArticle.module.css'

interface Props {

}

const ProductArticle: React.FC<Props> = props => {

    const { activeSlipper, productArticles } = useSelector((state: RootReducer) => ({
        activeSlipper: state.filterState.collection && isSlipperType(state.filterState.collection)
            ? state.filterState.collection
            : "classic",
        productArticles: state.productsData.original?.productArticles
    }))

    return (
        <article className={[classes.SlipperArticle, productArticles ? "" : classes.PerserveWidthWhileLoading].join(" ")}>
            <div className={`${classes.ImageContainer} Loading`}>
                <img
                    src={productArticles ? productArticles[activeSlipper].imgUrl : ""}
                    alt={productArticles ? productArticles[activeSlipper].imgAlt : ""}
                />
            </div>
            <p className={productArticles ? "" : "Loading"} dangerouslySetInnerHTML={new TextToMarkup(productArticles ? productArticles[activeSlipper].articleText : "&nbsp;<br/><br/><br/>")}></p>
        </article>
    )
}

export default ProductArticle
