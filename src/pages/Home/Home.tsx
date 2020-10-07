import React from 'react'
import Gallery from './Gallery/Gallery'
import Hero from './Hero/Hero'

interface Props {

}

const Home: React.FC<Props> = props => {
    return (
        <>
            <Hero />
            <Gallery />
        </>
    )
}

export default Home
