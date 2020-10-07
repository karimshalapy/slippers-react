import React from 'react'
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
            <Gallery />
        </>
    )
}

export default Home
