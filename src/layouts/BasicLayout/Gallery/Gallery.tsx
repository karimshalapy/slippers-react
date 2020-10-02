import React from 'react'
import GalleryItem from './GalleryItem/GalleryItem'
import classes from './Gallery.module.css'
import { v4 } from 'uuid'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import { GalleryData } from './GalleryTypes'
import loading from '../../../assets/loading.gif'

const Gallery: React.FC = () => {
    //get galleryData from the redux store
    const galleryData = useSelector((state: RootReducer) => state.mainResources.galleryData)
    //render loading gifs untill the async gallery data fetch resolves
    let renderedData: GalleryData[] = galleryData ? galleryData : new Array(6).fill({
        imgUrl: loading,
        imgAlt: "loading",
        mainText: "",
        subText: ""
    });

    return (
        <section>
            <ul className={classes.GalleryContainer}>
                {renderedData.map(item => {
                    if (item.imgUrl && item.imgAlt) {
                        return <GalleryItem
                            key={v4()}
                            imgUrl={item.imgUrl}
                            imgAlt={item.imgAlt}
                            mainText={item.mainText}
                            subText={item.subText}
                        />
                    }
                    if (item.videoUrl && item.videoThumbnailUrl) {
                        return <GalleryItem
                            key={v4()}
                            videoUrl={item.videoUrl}
                            videoThumbnailUrl={item.videoThumbnailUrl}
                            mainText={item.mainText}
                            subText={item.subText}
                        />
                    }
                    return null
                })}
            </ul>
        </section>
    )
}

export default Gallery
