import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { isSizesFilterSection } from '../../../../../helpers/typeCheckers'
import { RootReducer } from '../../../../../store/rootReducer/reducersTypes'
import { GenderSizes, SlippersProductData } from '../../../../Slippers/SlippersTypes.d'
import classes from './ProductSizes.module.css'

interface Props {
    activeGender?: "men" | "women",
    setActiveGender: React.Dispatch<React.SetStateAction<"men" | "women" | undefined>>,
    activeSize?: number,
    setActiveSize: React.Dispatch<React.SetStateAction<number | undefined>>,
    activeSlipperData?: SlippersProductData,
    PerserveWidthWhenLoadingClass: string,
}

const ProductSizes: React.FC<Props> = ({ activeGender, setActiveGender, activeSize, setActiveSize, activeSlipperData, PerserveWidthWhenLoadingClass }) => {

    const filterData = useSelector((state: RootReducer) => state.productsData.original?.filterData)

    //function to return genders to show for the user and when a gender is chosen returns the available sizes
    const getFieldsetsRenderData = useCallback(() => {
        if (filterData && activeSlipperData) { // render this when the data is fetched successfully
            if (!activeGender && !isSizesFilterSection(filterData.gender.filterItems)) {
                return filterData.gender.filterItems.map((item) => {
                    if (item === "men" || item === "women") {
                        return (
                            <React.Fragment key={item}>
                                <input
                                    type="checkbox"
                                    id={`product-showcase-gender-${item}`}
                                    name="gender"
                                    value={item}
                                    onChange={setActiveGender.bind(null, item)}
                                    checked={activeGender === item}
                                />
                                <label htmlFor={`product-showcase-gender-${item}`} >{item}</label>
                            </React.Fragment>
                        )
                    } else return null

                })
            } else if (activeGender && isSizesFilterSection(filterData.sizes.filterItems)) {
                //filter items of sizes is a tuple two arrays first is men second is women so I used an enum to target the active gender sizes 
                return filterData.sizes.filterItems[GenderSizes[activeGender]].map(item => (
                    <React.Fragment key={item.eu}>
                        <input
                            type="checkbox"
                            id={`product-showcase-${activeGender}-size-${item.eu}`}
                            name={`${activeGender}-sizes`}
                            value={item.eu}
                            onChange={setActiveSize.bind(null, item.eu)}
                            checked={activeSize === item.eu}
                            disabled={ //checks if this item is available in the current active product
                                !activeSlipperData[`${activeGender}Sizes` as "menSizes" | "womenSizes"].eu.includes(item.eu)
                            }
                        />
                        <label htmlFor={`product-showcase-${activeGender}-size-${item.eu}`} >
                            {item.us}
                            <span className={classes.EUSize}>EU {item.eu}</span>
                        </label>
                    </React.Fragment>
                ))
            }
        } else { //render this when loading
            return [...Array(2)].map(() => (
                <React.Fragment key={v4()}>
                    <label className="Loading">&nbsp;</label>
                </React.Fragment>
            ))
        }
    }, [activeGender, filterData, setActiveGender, activeSize, setActiveSize, activeSlipperData])

    const getFiledsetHeaderRenderData = useCallback(
        () => {
            if (activeSlipperData) {
                return (
                    <legend>
                        choose size
                        {
                            activeGender
                                ?
                                <>
                                    <span> &nbsp;|&nbsp; {activeGender} sizes </span>
                                    <span className={classes.ChangeGender} onClick={() => {
                                        setActiveGender(undefined)
                                        setActiveSize(undefined)
                                    }}>change</span>
                                </>
                                : null
                        }
                    </legend>

                )
            } else return <legend className={`${PerserveWidthWhenLoadingClass} Loading`}>&nbsp;</legend>
        }, [PerserveWidthWhenLoadingClass, activeSlipperData, activeGender, setActiveSize, setActiveGender])

    return (
        <fieldset>
            { getFiledsetHeaderRenderData()}
            <div className={classes[activeGender && activeSlipperData ? "SizesField" : "GendersField"]}>
                {
                    getFieldsetsRenderData()
                }
            </div>
        </fieldset>

    )
}

export default memo(ProductSizes)
