import React, { useState } from 'react'
import SwiperCore from 'swiper'
import SlipperImageSwiper from './SlipperImageSwiper/SlipperImageSwiper'
import SlippersFeaturesSwitcher from './SlippersFeaturesSwitcher/SlippersFeaturesSwitcher'
import SlippersSwiperAvatars from './SlippersSwiperAvatars/SlippersSwiperAvatars'
import classes from './SlipperSwiper.module.css'

interface Props {

}

const SlippersSwiper: React.FC<Props> = props => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | undefined>(undefined)
    const [activeSlide, setActiveSlide] = useState(0)
    return (
        <>
            <SlippersSwiperAvatars controlledSwiper={controlledSwiper} activeSlide={activeSlide} />
            <section className={classes.SlipperSwiper}>
                <SlipperImageSwiper controlledSwiper={controlledSwiper} setControlledSwiper={setControlledSwiper} setActiveSlide={setActiveSlide} />
                <SlippersFeaturesSwitcher activeSlide={activeSlide} />
            </section>
        </>
    )
}

export default SlippersSwiper
