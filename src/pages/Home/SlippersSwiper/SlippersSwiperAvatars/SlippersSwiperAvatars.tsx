import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore from 'swiper'
import { v4 } from 'uuid'
import { SlipperSwiperAvatarData, SlippersTypesEnum, AvatarNavTypes, SlippersTypes } from '../SlippersSwiperTypes.d'
import classes from './SlippersSwiperAvatars.module.css'

interface Props {
    controlledSwiper: SwiperCore | undefined,
    activeSlide: number
}
const avatarsDummyData: SlipperSwiperAvatarData[] = [
    {
        imgAlt: "mahabis classic in larvik light grey avatar image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-avatars%2Fclassic-avatar.jpg?alt=media",
        type: "classic"
    },
    {
        imgAlt: "Koge Grey Mahabis Canvas Slipper avatar image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-avatars%2Fcanvas-avatar.jpg?alt=media",
        type: "canvas"
    },
    {
        imgAlt: "mahabis flow in nora navy avatar image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-avatars%2Fflow-avatar.jpg?alt=media",
        type: "flow"
    },
    {
        imgAlt: "maabis luxe in borsen beige avatar image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-avatars%2Fluxe-avatar.jpg?alt=media",
        type: "luxe"
    },
    {
        imgAlt: "mahabis classic in larvik light grey from back avatar image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-avatars%2Fviewall-avatar.jpg?alt=media",
        type: "view all",
        url: "/"
    }
]

const isSlippersTypes = (item: AvatarNavTypes): item is SlippersTypes => {
    return item !== "view all"
}

const SlippersSwiperAvatars: React.FC<Props> = props => {

    return (
        <ul className={classes.Avatars}>
            {
                avatarsDummyData.map(item => {
                    const { type } = item

                    return (
                        <li
                            className={[classes.Avatar, isSlippersTypes(type) && props.activeSlide === SlippersTypesEnum[type] ? classes.ActiveAvatar : ""].join(" ")} key={v4()}
                            onClick={isSlippersTypes(type) && props.controlledSwiper ? () => { props.controlledSwiper?.slideTo(SlippersTypesEnum[type]) } : () => { }}
                        >
                            {item.url
                                ?
                                <Link to={item.url}>
                                    <img src={item.imgUrl} alt={item.imgAlt} />
                                    <span className={classes.AvatarText}>{type}</span>
                                </Link>
                                :
                                <>
                                    <img src={item.imgUrl} alt={item.imgAlt} />
                                    <p className={classes.AvatarText}>{type}</p>
                                </>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SlippersSwiperAvatars
