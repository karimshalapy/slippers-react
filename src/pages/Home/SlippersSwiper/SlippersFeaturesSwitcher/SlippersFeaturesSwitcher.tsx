import React from 'react'
import classes from './SlippersFeaturesSwitcher.module.css'
import { SlipperImageSwiperData, SlippersTypesEnum } from '../SlippersSwiperTypes.d'
import HomePrimaryBtn from '../../../../components/HomePrimaryBtn/HomePrimaryBtn'
import { v4 } from 'uuid'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { Link } from 'react-router-dom'

interface Props {
    activeSlide: number
}


const featuresDummyData: SlipperImageSwiperData[] = [
    {
        features: [
            {
                featureIcon: "slipper",
                featureText: "premium felt upper"
            },
            {
                featureIcon: "wool",
                featureText: "soft wool lining"
            },
            {
                featureIcon: "sole",
                featureText: "durable hybrid sole"
            }
        ],
        imgAlt: "mahabis classic in larvik light grey large image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-lrg-imgs%2Fclassic-lrg.png?alt=media",
        type: "classic",
        url: "/"
    },
    {
        features: [
            {
                featureIcon: "water",
                featureText: "water-resistant upper"
            },
            {
                featureIcon: "wool",
                featureText: "soft wool lining"
            },
            {
                featureIcon: "sole",
                featureText: "durable hybrid sole"
            }
        ],
        imgAlt: "Koge Grey Mahabis Canvas Slipper large image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-lrg-imgs%2Fcanvas-lrg.png?alt=media",
        type: "canvas",
        url: "/"
    },
    {
        features: [
            {
                featureIcon: "wooven",
                featureText: "lightweight woven upper"
            },
            {
                featureIcon: "foot",
                featureText: "fully flexible design"
            },
            {
                featureIcon: "sole",
                featureText: "durable hybrid sole"
            }
        ],
        imgAlt: "mahabis flow in nora navy large image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-lrg-imgs%2Fflow-lrg.png?alt=media",
        type: "flow",
        url: "/"
    },
    {
        features: [
            {
                featureIcon: "leather",
                featureText: "premium nubuck leather"
            },
            {
                featureIcon: "wool",
                featureText: "soft wool lining"
            },
            {
                featureIcon: "sole",
                featureText: "durable hybrid sole"
            }
        ],
        imgAlt: "mahabis luxe in borsen beige large image",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slippers-lrg-imgs%2Fluxe-lrg.png?alt=media",
        type: "luxe",
        url: "/"
    }
]

const SlippersFeaturesSwitcher: React.FC<Props> = props => {

    return (
        <FadeSwitchTransition transitionKey={`slide-${props.activeSlide}-active`} fast>
            {(nodeRef) => (
                <div
                    ref={nodeRef}
                    className={classes.FeaturesSwitcher}
                >
                    {featuresDummyData.map(item => {
                        if (item.type === SlippersTypesEnum[props.activeSlide]) return (
                            <article key={item.type}>
                                <h2 className={classes.FeatureSlideHeader}>mahabis <span>{item.type}</span></h2>
                                <ul className={classes.FeaturesContainer}>
                                    {item.features.map(feature => (
                                        <li
                                            key={v4()}
                                            className={`${classes[feature.featureIcon]} ${classes.Feature}`}
                                        >
                                            {feature.featureText}
                                        </li>
                                    ))}
                                </ul>
                                <HomePrimaryBtn><Link to={item.url}>LEARN MORE</Link></HomePrimaryBtn>
                            </article>
                        )
                        return null
                    }
                    )}
                </div>
            )}
        </FadeSwitchTransition>
    )
}

export default SlippersFeaturesSwitcher
