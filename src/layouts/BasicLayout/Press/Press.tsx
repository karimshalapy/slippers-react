import React from 'react'
import { v4 } from 'uuid'
import classes from './Press.module.css'

interface Props {

}

const pressDummyData = [
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-independent.jpg?alt=media",
        imgAlt: "independent logo"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-gq.jpg?alt=media",
        imgAlt: "GQ logo"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-thesundaytimes.jpg?alt=media",
        imgAlt: "the sunday times logo"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-stylist.jpg?alt=media",
        imgAlt: "stylist logo"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-esquirre.jpg?alt=media",
        imgAlt: "esquirre logo"
    }
]

const Press: React.FC<Props> = props => {
    return (
        <section className={classes.Press}>
            <h2><span>mahabis</span> as seen in</h2>
            <ul className={classes.ImgsContainer}>
                {pressDummyData.map((item, i, arr) => (
                    <li key={v4()}>
                        <img className={[classes.PressImage, i === arr.length - 1 ? "" : classes.PressImageSpacing].join(" ")} src={item.imgUrl} alt={item.imgAlt} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Press
