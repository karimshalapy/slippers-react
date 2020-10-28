import React, { useEffect, useRef, useState } from 'react'
import SwiperCore, { Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 } from 'uuid'
import SliderBtn from '../../../../components/SliderBtn/SliderBtn'
import { SlippersTypes } from '../../../Home/SlippersSwiper/SlippersSwiperTypes'
import { SlippersProductData } from '../../../Slippers/SlippersTypes'
import classes from './ProductImagesSwiper.module.css'

interface Props {
    activeSlipperData?: SlippersProductData
    slipper: SlippersTypes
}

SwiperCore.use([Pagination, Controller])

const ProductImagesSwiper: React.FC<Props> = ({ activeSlipperData, slipper }) => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | undefined>(undefined)
    const [activeSlide, setActiveSlide] = useState(0)
    const nodeRef = useRef<HTMLVideoElement>(null)

    //useEffect to play video when its slide is in viewport
    useEffect(() => {
        const video = nodeRef.current
        if (video) {
            const rect = video.getBoundingClientRect()
            if (rect.right < window.innerWidth + (rect.width * 1.01) && rect.left >= 0) { //is in viewport
                video.currentTime = 0
                video.play()
            }
        }
    }, [activeSlide, controlledSwiper])
    useEffect(() => { controlledSwiper?.update() }, [controlledSwiper, activeSlipperData])

    return (
        <>
            <Swiper
                className={classes.ProductImagesSwiper}
                loopPreventsSlide={false}
                navigation={{
                    nextEl: `.${classes.sliderNextElBtn}`,
                    prevEl: `.${classes.sliderPrevElBtn}`,
                    disabledClass: "hidden"
                }}
                pagination={{
                    type: "bullets",
                    bulletActiveClass: classes.ActiveBullet,
                    clickable: true
                }}
                onSwiper={swiper => setControlledSwiper(swiper)}
                controller={{ control: controlledSwiper }}
                onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
            >
                {
                    activeSlipperData
                        ?
                        <>
                            {Object.values(activeSlipperData.productShowcase).map(item => (
                                <SwiperSlide key={`image-${v4()}`} className={classes.SwiperSlide}>
                                    <img src={item.imgUrl} alt={item.imgAlt} />
                                </SwiperSlide>
                            ))}
                            {slipper === "classic" || slipper === "flow"
                                ? <SwiperSlide className={classes.SwiperSlide}>
                                    <video ref={nodeRef}>
                                        <source src={
                                            slipper === "classic"
                                                ?
                                                "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fclassic%2FclassicThumbVideo2.mp4?alt=media"
                                                :
                                                "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fflow%2Fflow-video-pdp-final.mp4?alt=media"
                                        } />
                                    </video>
                                </SwiperSlide>
                                : null}
                        </>
                        : <SwiperSlide className={`${classes.SwiperSlide} Loading`}></SwiperSlide>
                }
                <SliderBtn type="next" sliderBtnClass={classes.sliderNextElBtn} />
                <SliderBtn type="prev" sliderBtnClass={classes.sliderPrevElBtn} />
            </Swiper>
        </>
    )
}

export default ProductImagesSwiper
