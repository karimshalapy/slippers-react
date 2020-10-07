import React from 'react'
import Header from './Header/Header'
import classes from "./BasicLayout.module.css"
import Press from './Press/Press'
import InstagramPhotos from './InstagramPhotos/InstagramPhotos'
import Newsletter from './Newsletter/Newsletter'
import Footer from './Footer/Footer'

interface Props {

}

const BasicLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <main className={classes.MainContent}>
                {props.children}
            </main>
            <Press />
            <InstagramPhotos />
            <Newsletter />
            <Footer />
        </>
    )
}

export default BasicLayout
