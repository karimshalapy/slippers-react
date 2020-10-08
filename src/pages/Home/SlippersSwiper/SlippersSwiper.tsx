import React from 'react'
import SlipperImageSwiper from './SlipperImageSwiper/SlipperImageSwiper'
import SlippersSwiperAvatars from './SlippersSwiperAvatars/SlippersSwiperAvatars'
import classes from './SlipperSwiper.module.css'

interface Props {

}

const SlippersSwiper: React.FC<Props> = props => {
    return (
        <>
            <SlippersSwiperAvatars />
            <section className={classes.SlipperSwiper}>
                <SlipperImageSwiper />
            </section>
        </>
    )
}

export default SlippersSwiper
