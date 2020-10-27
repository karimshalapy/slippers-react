import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
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
}

const ProductSizes: React.FC<Props> = ({ activeGender, setActiveGender, activeSize, setActiveSize, activeSlipperData }) => {

    const filterData = useSelector((state: RootReducer) => state.productsData.original?.filterData)

    //function to return genders to show for the user and when a gender is chosen returns the available sizes
    const getRenderData = useCallback(() => {
        if (filterData && activeSlipperData) {
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
        }
    }, [activeGender, filterData, setActiveGender, activeSize, setActiveSize, activeSlipperData])

    return (
        <fieldset>
            <legend>
                choose size
                {activeGender
                    ? <>
                        <span> &nbsp;|&nbsp; {activeGender} sizes </span>
                        <span className={classes.ChangeGender} onClick={() => {
                            setActiveGender(undefined)
                            setActiveSize(undefined)
                        }}>change</span>
                    </>
                    : null}
            </legend>
            <div className={classes[activeGender ? "SizesField" : "GendersField"]}>
                {
                    getRenderData()
                }
            </div>
        </fieldset>

    )
}

export default memo(ProductSizes)
