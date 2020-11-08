import React from 'react'
import classes from './SlipperFigureLayer.module.css'
import { LayerData } from '../../../../@types/SlipperFigureDismantleTypes.d'


const SlipperFigureLayer: React.FC<LayerData> = props => {
    return (
        <figure className={`${classes.SlipperLayer} ${classes[props.layerType]}`} style={props.style}>
            <img src={props.imgUrl} alt={props.imgAlt} />
            <figcaption className={classes.FigureCaption}>
                <div className={classes.CaptionTitle}>{props.title}</div>
                <span>{props.text}</span>
            </figcaption>
        </figure>
    )
}

export default SlipperFigureLayer
