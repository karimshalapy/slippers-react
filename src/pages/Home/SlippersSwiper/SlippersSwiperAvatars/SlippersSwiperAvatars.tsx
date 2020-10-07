import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './SlippersSwiperAvatars.module.css'

interface Props {

}
enum SlippersTypes {
    classic,
    canvas,
    flow,
    luxe
}
const avatarsDummyData: {
    imgAlt: string;
    imgUrl: string;
    type: "classic" | "canvas" | "flow" | "luxe" | "view all";
    url?: string;
}[] = [
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

const SlippersSwiperAvatars: React.FC<Props> = props => {
    const [activeSlipper, setActiveSlipper] = useState(SlippersTypes.classic)
    return (
        <ul className={classes.Avatars}>
            {
                avatarsDummyData.map(item => (
                    <li
                        className={[classes.Avatar, item.type !== "view all" && activeSlipper === SlippersTypes[item.type] ? classes.ActiveAvatar : ""].join(" ")} key={v4()}
                        onClick={item.type !== "view all" ? setActiveSlipper.bind(null, SlippersTypes[item.type]) : () => { }}
                    >
                        {item.url
                            ?
                            <Link to={item.url}>
                                <img src={item.imgUrl} alt={item.imgAlt} />
                                <span className={classes.AvatarText}>{item.type}</span>
                            </Link>
                            :
                            <>
                                <img src={item.imgUrl} alt={item.imgAlt} />
                                <p className={classes.AvatarText}>{item.type}</p>
                            </>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default SlippersSwiperAvatars
