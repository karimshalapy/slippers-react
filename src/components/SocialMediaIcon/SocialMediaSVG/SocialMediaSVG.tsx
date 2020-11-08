import React from 'react'
import { ReactComponent as Facebook } from '../../../assets/facebook.svg'
import { ReactComponent as Pinterest } from '../../../assets/pinterest.svg'
import { ReactComponent as Twitter } from '../../../assets/twitter.svg'
import { ReactComponent as Github } from '../../../assets/github.svg'
import { ReactComponent as Instagram } from '../../../assets/instagram.svg'
import { ReactComponent as Google } from '../../../assets/google.svg'
import { SocialMediaTypes } from '../../../@types/FooterTypes'

interface Props {
    type: SocialMediaTypes
    iconClass?: string
}

const SocialMediaSVG: React.FC<Props> = props => {
    const classes = props.iconClass ? props.iconClass : ""

    if (props.type === "facebook") return <Facebook className={classes} />
    else if (props.type === "github") return <Github className={classes} />
    else if (props.type === "google") return <Google className={classes} />
    else if (props.type === "instagram") return <Instagram className={classes} />
    else if (props.type === "twitter") return <Twitter className={classes} />
    else if (props.type === "pinterest") return <Pinterest className={classes} />
    else return null
}

export default SocialMediaSVG
