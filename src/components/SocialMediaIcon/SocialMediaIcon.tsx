import React from 'react'
import { SocialMediaTypes } from '../../layouts/BasicLayout/Footer/FooterTypes'
import classes from './SocialMediaIcon.module.css'
import SocialMediaSVG from './SocialMediaSVG/SocialMediaSVG'

interface Props {
    url?: string,
    type: SocialMediaTypes,
    classNames?: string
    clickHandler?: () => void
}

const SocialMediaIcon: React.FC<Props> = props => {
    const socialClasses = [classes.Social, props.classNames ? props.classNames : ""].join(" ")
    const clickHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        props.clickHandler && props.clickHandler()
    }
    return (
        <>
            {
                props.url
                    ?
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClasses}
                    >
                        <SocialMediaSVG type={props.type} />
                    </a>
                    :
                    <a
                        href={`#${props.type}`}
                        className={socialClasses}
                        onClick={clickHandler}
                    >
                        <SocialMediaSVG type={props.type} />
                    </a>
            }
        </>
    )
}

export default SocialMediaIcon
