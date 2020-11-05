import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './FooterNavItems.module.css'
import { FooterData } from '../FooterTypes'
import SocialMediaIcon from '../../../../components/SocialMediaIcon/SocialMediaIcon'

interface Props {
    type: "social" | "nav",
    data?: FooterData[]
}



const FooterNavItems: React.FC<Props> = ({ type, data }) => {

    const getNavItems = useCallback(() => {
        if (type === "nav" && !!data) {
            return (
                <ul className={classes.FooterNavItemsContainer}>
                    {data.map(item => (
                        <li key={v4()} className={classes.FooterNavItem}>
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            )
        } else if (type === "social" && !!data) {
            return (
                <ul className={classes.SocialNavItemsContainer}>
                    {data.map(item => (
                        <li key={v4()} className={classes.SocialNavItem}>
                            {
                                item.socialMediaIcon
                                    ?
                                    <SocialMediaIcon
                                        type={item.socialMediaIcon}
                                        url={item.url}
                                        classNames={classes.Social}
                                    />
                                    : null
                            }
                        </li>
                    ))}
                </ul>
            )
        } else return null
    }, [data, type])

    return getNavItems()
}

export default FooterNavItems
