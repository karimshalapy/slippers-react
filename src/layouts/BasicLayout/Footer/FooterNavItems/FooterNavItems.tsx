import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './FooterNavItems.module.css'
import { FooterData } from '../FooterTypes'

interface Props {
    type: "social" | "nav",
    data: FooterData[]
}



const FooterNavItems: React.FC<Props> = ({ type, data }) => {

    const getNavItems = useCallback(() => {
        switch (type) {
            case "nav":
                return (
                    <ul className={classes.FooterNavItemsContainer}>
                        {data.map(item => (
                            <li key={v4()} className={classes.FooterNavItem}>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                )
            case "social":
                return (
                    <ul className={classes.SocialNavItemsContainer}>
                        {data.map(item => (
                            <li key={v4()} className={classes.SocialNavItem}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={item.socialMediaIcon ? [classes[item.socialMediaIcon], classes.Social].join(" ") : ""}
                                > </a>
                            </li>
                        ))}
                    </ul>
                )
            default:
                return null

        }
    }, [data, type])

    return getNavItems()
}

export default FooterNavItems
