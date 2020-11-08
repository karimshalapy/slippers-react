import React from 'react'
import { v4 } from 'uuid'
import { SlippersFeaturesType } from '../../@types/SlippersSwiperTypes'
import classes from './SlipperFeatures.module.css'

interface Props {
    features?: SlippersFeaturesType[],
    wrapperClassname?: string,
    featureClassname?: string,
}

const SlipperFeatures: React.FC<Props> = props => {
    return (
        <ul className={[classes.FeaturesContainer, props.wrapperClassname ? props.wrapperClassname : ""].join(" ")}>
            {
                props.features
                    ?
                    props.features.map(feature => (
                        <li
                            key={v4()}
                            className={`${classes[feature.featureIcon]} ${classes.Feature} ${props.featureClassname ? props.featureClassname : ""}`}
                        >
                            {feature.featureText}
                        </li>
                    ))
                    :
                    [...Array(3)].map(() => (
                        <li
                            key={v4()}
                            className={`${classes.Feature} Loading`}
                        >
                            <p>&nbsp;</p>
                        </li>
                    ))
            }
        </ul>
    )
}

export default SlipperFeatures
