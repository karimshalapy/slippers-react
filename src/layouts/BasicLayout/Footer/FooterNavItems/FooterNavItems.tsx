import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './FooterNavItems.module.css'

interface Props {

}

const footerDummyData = [
    { text: "sizing chart", url: "/sizing-chart" },
    { text: "delivery & returns", url: "/delivery-returns" },
    { text: "gift cards", url: "/gift-cards" },
    { text: "careers", url: "/careers" },
]

const FooterNavItems: React.FC<Props> = props => {
    return (
        <ul className={classes.FooterNavItemsContainer}>
            {footerDummyData.map(item => (
                <li key={v4()} className={classes.FooterNavItem}>
                    <Link to={item.url}>{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterNavItems
