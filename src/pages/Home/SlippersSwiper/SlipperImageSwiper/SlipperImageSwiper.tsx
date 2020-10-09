import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderBtn from '../../../../components/SliderBtn/SliderBtn'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import classes from './SlipperImageSwiper.module.css'
import loading from '../../../../assets/loading.gif'

interface Props {
    controlledSwiper: SwiperCore | undefined,
    setControlledSwiper: React.Dispatch<React.SetStateAction<SwiperCore | undefined>>
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>
}

SwiperCore.use([Controller])

const SlipperImageSwiper: React.FC<Props> = props => {

    const slippersTypeSwiperData = useSelector((state: RootReducer) => state.mainResources.slippersTypeSwiper)

    const { controlledSwiper } = props
    useEffect(() => { controlledSwiper?.update() }, [controlledSwiper, slippersTypeSwiperData])

    return (
        <Swiper
            className={classes.SlipperSwiper}
            spaceBetween={50}
            speed={300}
            loopPreventsSlide={false}
            navigation={{
                nextEl: ".home-slippers-slider-nextEl-btn",
                prevEl: ".home-slippers-slider-prevEl-btn",
                disabledClass: "hidden"
            }}
            onSwiper={swiper => props.setControlledSwiper(swiper)}
            controller={{ control: props.controlledSwiper }}
            onSlideChange={swiper => props.setActiveSlide(swiper.activeIndex)}
        >
            {slippersTypeSwiperData ? slippersTypeSwiperData.map(item => (
                <SwiperSlide className={classes.SlipperBigImageSlideContainer} key={item.type}>
                    <img
                        className={classes.SlipperBigImage}
                        src={item.imgUrl}
                        alt={item.imgAlt}
                    />
                </SwiperSlide>
            )) : (
                    <SwiperSlide className={classes.SlipperBigImageSlideContainer}>
                        <img
                            className={`${classes.SlipperBigImage} ${classes.Loading}`}
                            src={loading}
                            alt="loading"
                        />
                    </SwiperSlide>
                )}
            <SliderBtn type="next" sliderBtnClass="home-slippers-slider-nextEl-btn" />
            <SliderBtn type="prev" sliderBtnClass="home-slippers-slider-prevEl-btn" />
        </Swiper>
    )
}

export default SlipperImageSwiper
