import React from 'react'
import Header from './Header/Header'
import classes from "./BasicLayout.module.css"

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
        </>
    )
}

export default BasicLayout
