import React from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductImages from './ProductImages/ProductImages'
import classes from './ProductShowcase.module.css'

interface Props {

}

const ProductShowcase: React.FC<Props> = props => {
    return (
        <section className={classes.ProductShowcase}>
            <ProductImages />
            <ProductDetails />
        </section>
    )
}

export default ProductShowcase
