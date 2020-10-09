import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore from 'swiper'
import { v4 } from 'uuid'
import { SlippersTypesEnum, AvatarNavTypes, SlippersTypes } from '../SlippersSwiperTypes.d'
import classes from './SlippersSwiperAvatars.module.css'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'

interface Props {
    controlledSwiper: SwiperCore | undefined,
    activeSlide: number
}

const isSlippersTypes = (item: AvatarNavTypes): item is SlippersTypes => {
    return item !== "view all"
}

const SlippersSwiperAvatars: React.FC<Props> = props => {

    const avatarsData = useSelector((state: RootReducer) => state.mainResources.slippersTypeSwiperAvatarImgs)

    return (
        <ul className={classes.Avatars}>
            {
                avatarsData ?
                    avatarsData.map(item => {
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
                    : null
            }
        </ul>
    )
}

export default SlippersSwiperAvatars
