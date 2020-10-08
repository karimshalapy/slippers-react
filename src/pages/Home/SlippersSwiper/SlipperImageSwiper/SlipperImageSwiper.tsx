import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderBtn from '../../../../components/SliderBtn/SliderBtn'
import classes from './SlipperImageSwiper.module.css'

interface Props {

}

const SlipperImageSwiper: React.FC<Props> = props => {
    return (
        <Swiper
            className={classes.SlipperSwiper}
            spaceBetween={50}
            speed={300}
            loop
            loopPreventsSlide={false}
            navigation={{
                nextEl: ".home-slippers-slider-nextEl-btn",
                prevEl: ".home-slippers-slider-prevEl-btn",
            }}
        >
            <SwiperSlide className={classes.SlipperBigImageSlideContainer}>
                <img
                    className={classes.SlipperBigImage}
                    src="https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-LG-SY-A2-1-_1.png?448123"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className={classes.SlipperBigImageSlideContainer}>
                <img
                    className={classes.SlipperBigImage}
                    src="https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-LG-SY-A2-1-_1.png?448123"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className={classes.SlipperBigImageSlideContainer}>
                <img
                    className={classes.SlipperBigImage}
                    src="https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-LG-SY-A2-1-_1.png?448123"
                    alt=""
                />
            </SwiperSlide>

            <SliderBtn type="next" sliderBtnClass="home-slippers-slider-nextEl-btn" />
            <SliderBtn type="prev" sliderBtnClass="home-slippers-slider-prevEl-btn" />
        </Swiper>
    )
}

export default SlipperImageSwiper
