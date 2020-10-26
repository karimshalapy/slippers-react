import React, { useCallback } from 'react'
import { v4 } from 'uuid'
import { ProductShowcase, SlippersTypes } from '../../../../Slippers/SlippersTypes'
import classes from './ProductSmallImages.module.css'

interface Props {
    clickHandler: (key: string) => void,
    activeImage?: string,
    images?: ProductShowcase
    slipper: SlippersTypes
}

const ProductSmallImages: React.FC<Props> = ({ clickHandler, slipper, activeImage, images }) => {

    const getShowCaseVideo = useCallback(() => {
        switch (slipper) {
            case "classic":
            case "flow":
                return (
                    <li
                        className={[classes.SmallImagesItem, `${slipper}Video` === activeImage ? classes.Active : ""].join(" ")}
                        onClick={clickHandler.bind(null, `${slipper}Video`)}
                    >
                        <img
                            className={classes.VideoThumbnail}
                            src={
                                slipper === "classic"
                                    ?
                                    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fclassic%2FMC-LIG-SY-1.jpg?alt=media"
                                    :
                                    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-showcase%2Fflow%2FMF-LN-II-1.jpg?alt=media"
                            }
                            alt={`${slipper} slipper dismantle video thumbnail`}
                        />
                        <img className={classes.PlayIcon} src="https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/icon-play.png?alt=media" alt="play button" />
                    </li>
                )
            default:
                return null
        }
    }, [slipper, clickHandler, activeImage])

    return (
        <ul className={classes.SmallImagesContainer}>
            {
                images
                    ?
                    <>
                        {
                            Object.entries(images)
                                .map(([itemKey, itemValue], i) => (

                                    <li
                                        key={itemKey}
                                        className={[classes.SmallImagesItem, itemKey === activeImage ? classes.Active : ""].join(" ")}
                                        onClick={clickHandler.bind(null, itemKey)}
                                    >
                                        <img src={itemValue.imgUrl} alt={itemValue.imgAlt} />
                                    </li>
                                ))
                        }
                        {getShowCaseVideo()}
                    </>
                    :
                    [...Array(7)].map(() => (
                        <li
                            key={v4()}
                            className={`${classes.SmallImagesItem} Loading`}
                        ></li>
                    ))
            }
        </ul>
    )
}

export default ProductSmallImages
