import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import TextToMarkup from '../../../../helpers/TextToMarkup'
import { resetFilterState } from '../../../../store/actionsIndex/actionIndex'
import { RootReducer } from '../../../../@types/reducersTypes'
import { SlippersProductData } from '../../../../@types/SlippersTypes'
import classes from './ProductsList.module.css'

interface Props {
    productsData: SlippersProductData[] | undefined
}

const ProductsList: React.FC<Props> = ({ productsData }) => {

    const dispatch = useDispatch()
    const { gender, sizes } = useSelector((state: RootReducer) => state.filterState)

    const linkClickHandler = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(resetFilterState())
    }, [dispatch])

    const getRenderData = useCallback(() => {
        if (productsData) {
            if (productsData.length === 0) { //render "we're out of stock" when there're no available products"

                return <li className={classes.OutOfStock}>we are sorry we are out of stock, please check our <a href="/slippers" onClick={linkClickHandler}>main collection</a> to view the full range</li>

            } else { //render data when there're any available

                return productsData.map(item => (
                    <li className={classes.Product} key={v4()}>
                        <Link
                            to={//this template literal is to create the search query params for the slipper page according to the current item chosen and the filter state of the user
                                `/slipper/${item.collection}` +
                                `?upper=${item.upperColorShortened}` +
                                `&sole=${item.soleColorShortened}` +
                                `${gender ? `&gender=${gender}` : ""}` +
                                `${sizes ? `&size=${sizes}` : ""}`
                            }
                        >
                            <div className={classes.Images}>
                                <img src={item.mainImageUrl} alt={item.mainImageAlt} className={classes.MainImage} />
                                <img src={item.secondaryImageUrl} alt={item.secondaryImageAlt} className={classes.SecondaryImage} />
                            </div>
                            <h2>mahabis {item.collection}</h2>
                            <p dangerouslySetInnerHTML={new TextToMarkup(item.colorText)}></p>
                            <data value={item.price.usd}>${item.price.usd}</data>
                        </Link>
                    </li>
                ))
            }
        } else { //render loading placeholder blocks when the data is getting fetched from the server

            return [...Array(10)].map(() => (
                <li className={`${classes.Product} ${classes.PerserveWidthWhileLoading}`} key={v4()}>
                    <div className="Loading"></div>
                    <h2 className="Loading">&nbsp; </h2>
                    <p className="Loading">&nbsp; </p>
                    <span className="Loading">&nbsp; </span>
                </li>
            ))
        }

    }, [linkClickHandler, productsData, gender, sizes])


    return (

        <FadeSwitchTransition transitionKey={`products-${v4()}-filtered`} fast>
            {
                (nodeRef) => (
                    <div ref={nodeRef}>
                        <ul className={[classes.ProductsList, productsData?.length === 0 ? classes.NoProducts : ""].join(" ")}>
                            {getRenderData()}
                        </ul>
                    </div>
                )
            }
        </FadeSwitchTransition>
    )
}

export default memo(ProductsList)
