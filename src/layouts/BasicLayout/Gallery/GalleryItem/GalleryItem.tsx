import React, { useCallback } from 'react'
import classes from './GalleryItem.module.css'
import { GalleryData } from '../GalleryTypes'

const GalleryItem: React.FC<GalleryData> =
    ({ imgAlt,
        imgUrl,
        videoThumbnailUrl,
        videoUrl,
        mainText,
        subText }) => {

        const getGalleryItem = useCallback(
            () => {
                const createTextMarkup = (string: string) => {
                    return { __html: string }
                }

                if (imgUrl) {
                    return (
                        <>
                            <img src={imgUrl} alt={imgAlt} className={classes.GalleryMedia} />
                            <h2 dangerouslySetInnerHTML={createTextMarkup(mainText)} className={classes.MainText}></h2>
                            <p dangerouslySetInnerHTML={createTextMarkup(subText)} className={classes.SubText}></p>
                        </>
                    )
                }
                if (videoUrl) {
                    return (
                        <>
                            <video
                                src={videoUrl}
                                className={classes.GalleryMedia}
                                poster={videoThumbnailUrl}
                                muted
                                autoPlay
                                loop
                            />
                            <h2 dangerouslySetInnerHTML={createTextMarkup(mainText)} className={classes.MainText}></h2>
                            <p dangerouslySetInnerHTML={createTextMarkup(subText)} className={classes.SubText}></p>
                        </>
                    )
                }
                return null
            }
            , [imgAlt, imgUrl, videoThumbnailUrl, videoUrl, mainText, subText])

        return (
            <li className={classes.GalleryItem}>
                {getGalleryItem()}
            </li>
        )
    }

export default GalleryItem
