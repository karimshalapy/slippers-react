import React from 'react'
import classes from './SlippersFeaturesSwitcher.module.css'
import Button from '../../../../components/Button/Button'
import FadeSwitchTransition from '../../../../components/hoc/FadeSwitchTransition/FadeSwitchTransition'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/rootReducer/reducersTypes'
import SlipperFeatures from '../../../../components/SlipperFeatures/SlipperFeatures'

interface Props {
    activeSlide: number
}


const SlippersFeaturesSwitcher: React.FC<Props> = props => {

    const item = useSelector((state: RootReducer) => state.mainResources.slippersTypeSwiper ? state.mainResources.slippersTypeSwiper[props.activeSlide] : undefined)
    return (
        <FadeSwitchTransition transitionKey={`slide-${props.activeSlide}-active`} fast>
            {(nodeRef) => (
                <div
                    ref={nodeRef}
                    className={classes.FeaturesSwitcher}
                >
                    {
                        item
                            ?
                            <article>
                                <h2 className={classes.FeatureSlideHeader}>mahabis <span>{item.type}</span></h2>
                                <SlipperFeatures features={item.features} />
                                <Button hasLink>
                                    {
                                        item.url ? <Link to={item.url}>LEARN MORE</Link> : "LEARN MORE"
                                    }
                                </Button>
                            </article>
                            : null
                    }
                </div>
            )}
        </FadeSwitchTransition>
    )
}

export default SlippersFeaturesSwitcher
