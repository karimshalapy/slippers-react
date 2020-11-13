import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { v4 } from 'uuid'
import Button from '../../../components/Button/Button'
import SliderBtn from '../../../components/SliderBtn/SliderBtn'
import TextToMarkup from '../../../helpers/TextToMarkup'
import { RootReducer } from '../../../@types/reducersTypes'
import classes from './Hero.module.css'
import { FirebaseUserContext } from '../../../App'

SwiperCore.use([Navigation, EffectFade, Autoplay])

const Hero: React.FC = () => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>()
    const heroData = useSelector((state: RootReducer) => state.mainResources.hero)
    const user = useContext(FirebaseUserContext)

    //useEffect to update the swiper component every time the heroData changes
    useEffect(() => {
        controlledSwiper?.update()
    }, [controlledSwiper, heroData, user])

    return (
        <Swiper
            wrapperTag="section"
            spaceBetween={50}
            speed={1000}
            loop
            loopPreventsSlide={false}
            navigation={{
                nextEl: ".home-hero-slider-nextEl-btn",
                prevEl: ".home-hero-slider-prevEl-btn",
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
                crossFade: true
            }}
            onSwiper={setControlledSwiper}
            controller={{ control: controlledSwiper }}
        >
            {heroData
                ?
                heroData.map(item => (
                    <SwiperSlide
                        key={`slide-${v4()}`}
                        tag="article"
                        className={`${classes.HeroSlide} swiper-no-swiping`}
                        style={{
                            backgroundImage: `url("${item.bgUrl}")`
                        }}
                    >
                        <div className={classes.SlideContentContainer}>
                            <h2 dangerouslySetInnerHTML={new TextToMarkup(item.heroText)}></h2>
                            <Button hasLink><Link to="/slippers">SHOP NOW</Link></Button>
                        </div>
                    </SwiperSlide>
                ))
                :
                <SwiperSlide
                    tag="article"
                    className={`${classes.HeroSlide} swiper-no-swiping Loading`}
                ></SwiperSlide>
            }

            <SliderBtn sliderBtnClass="home-hero-slider-nextEl-btn" type="next" />
            <SliderBtn sliderBtnClass="home-hero-slider-prevEl-btn" type="prev" />
        </Swiper>
    )
}

export default Hero
