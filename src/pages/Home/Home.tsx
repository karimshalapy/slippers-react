import React from 'react'
import SlipperFigureDismantle from './SlipperFigureDismantle/SlipperFigureDismantle'
import Gallery from './Gallery/Gallery'
import Hero from './Hero/Hero'
import SlippersSwiper from './SlippersSwiper/SlippersSwiper'

interface Props {

}

const Home: React.FC<Props> = props => {
    return (
        <>
            <Hero />
            <SlippersSwiper />
            <SlipperFigureDismantle />
            <Gallery />
        </>
    )
}

export default Home
