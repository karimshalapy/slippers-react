import React, { memo } from 'react'
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

        <ul className={classes.ProductsList}>
            {
                <FadeSwitchTransition transitionKey={`products-${v4()}-filtered`} fast>
                    {
                        (nodeRef) => (
                            <div ref={nodeRef} className={[classes.ProductsContainer, props.productsData?.length === 0 ? classes.NoProducts : ""].join(" ")}>
                                {
                                    props.productsData
                                        ?
                                        props.productsData.length === 0 //render "we're out of stock" when there're no available products"
                                            ?
                                            <li className={classes.OutOfStock}>we are sorry we are out of stock, please check our <a href="/slippers" onClick={linkClickHandler}>main collection</a> to view the full range</li>
                                            :
                                            props.productsData.map(item => ( //render data when there're any available
                                                <li className={classes.Product} key={v4()}>
                                                    <Link to={`/${item.collection}-slipper?upper=${item.upperColorShortened}&sole=${item.soleColorShortened}`}>
                                                        <div className={classes.Images}>
                                                            <img src={item.mainImageUrl} alt={item.mainImageAlt} className={classes.MainImage} />
                                                            <img src={item.secondaryImageUrl} alt={item.secondaryImageAlt} className={classes.SecondaryImage} />
                                                        </div>
                                                        <h3>mahabis {item.collection}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: item.colorText }}></p>
                                                        <data value={item.price.usd}>${item.price.usd}</data>
                                                    </Link>
                                                </li>
                                            ))

                                        : [...Array(10)].map(() => ( //render loading placeholder blocks when the data is getting fetched from the server
                                            <li className={`${classes.Product} ${classes.Loading}`} key={v4()}>
                                                <div></div>
                                                <h3>&nbsp; </h3>
                                                <p>&nbsp; </p>
                                                <span>&nbsp; </span>
                                            </li>
                                        ))
                                }
                            </div>
                        )
                    }
                </FadeSwitchTransition>
            }
        </ul>
    )
}

export default memo(ProductsList)
