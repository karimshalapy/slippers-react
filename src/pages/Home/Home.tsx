import React from 'react'
import SlipperFigureDismantle from './SlipperFigureDismantle/SlipperFigureDismantle'
import Gallery from './Gallery/Gallery'
import Hero from './Hero/Hero'
import SlippersSwiper from './SlippersSwiper/SlippersSwiper'
import ScrollToTopOnPathChange from '../../components/ScrollToTopOnPathChange/ScrollToTopOnPathChange'

interface Props {

}

const Home: React.FC<Props> = props => {
    return (
        <>
            <ScrollToTopOnPathChange />
            <Hero />
            <SlippersSwiper />
            <SlipperFigureDismantle />
            <Gallery />
        </>
    )
}

export default Home
