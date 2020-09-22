import React from 'react'
import Header from './Header/Header'

interface Props {

}

const BasicLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default BasicLayout
