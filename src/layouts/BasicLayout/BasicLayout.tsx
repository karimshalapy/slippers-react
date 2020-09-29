import React from 'react'
import Header from './Header/Header'
import classes from "./BasicLayout.module.css"
import Gallery from './Gallery/Gallery'

interface Props {

}

const BasicLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <div>
                <main className={classes.MainContent}>
                    {props.children}
                </main>
            </div>
            <Gallery />
        </>
    )
}

export default BasicLayout
