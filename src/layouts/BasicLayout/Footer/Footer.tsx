import React from 'react'
import FooterNavItems from './FooterNavItems/FooterNavItems'

interface Props {

}

const Footer: React.FC<Props> = props => {
    return (
        <footer>
            <nav>
                <FooterNavItems />
            </nav>
        </footer>
    )
}

export default Footer
