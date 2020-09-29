import React from 'react'
import GalleryItem from './GalleryItem/GalleryItem'
import classes from './Gallery.module.css'
import { v4 } from 'uuid'
import { GalleryData } from './GalleryTypes'

interface Props {

}

const galleryDummyData: GalleryData[] = [
    {
        imgAlt: "designed in london  by footwear experts.",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fman-holding-slipper.jpg?alt=media",
        mainText: "designed in london <br /> by footwear experts.",
        subText: "to be worn inside, outside, <br /> wherever you like."
    },
    {
        mainText: "only the best materials <br /> make the cut.",
        subText: "like this unbelievably soft <br /> australian corriedale wool.",
        videoThumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fconvince-me-wool-thumbnail.jpg?alt=media",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fconvince-me-wool.mp4?alt=media"
    },
    {
        imgAlt: "life's complex.  our designs aren't.",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fslippers-on-chair.jpg?alt=media",
        mainText: "life's complex. <br /> our designs aren't.",
        subText: "think sleek, think minimal. <br /> think goes-with-everything."
    },
    {
        imgAlt: "we do  things properly.",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fslippers-in-sun.jpg?alt=media",
        mainText: "we do <br /> things properly.",
        subText: "we're SEDEX audited, ETI compliant, <br /> and always looking for ways to improve."
    },
    {
        imgAlt: "we put mahabis  through their paces.",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fwalking-in-slippers.jpg?alt=media",
        mainText: "we put mahabis <br /> through their paces.",
        subText: "over a million in fact, so they stand up to the highest quality, safety and performance standards."
    },
    {
        imgAlt: "designed for  maximum comfort.",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/gallery%2Fslippers-climbing-stairs.jpg?alt=media",
        mainText: "designed for <br /> maximum comfort.",
        subText: "our heel cradle holds your foot in place. <br /> especially on stairs."
    }
]

const Gallery: React.FC<Props> = props => {
    return (
        <section>
            <ul className={classes.GalleryContainer}>
                {galleryDummyData.map(item => {
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
