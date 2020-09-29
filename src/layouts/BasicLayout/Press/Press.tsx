import React from 'react'
import { v4 } from 'uuid'
import classes from './Press.module.css'

interface Props {

}

const pressDummyData = [
    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-independent.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-gq.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-thesundaytimes.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-stylist.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/press%2Flogo-esquirre.jpg?alt=media"
]

const Press: React.FC<Props> = props => {
    return (
        <section className={classes.Press}>
            <h2><span>mahabis</span> as seen in</h2>
            <ul className={classes.ImgsContainer}>
                {pressDummyData.map((item, i, arr) => (
                    <li key={v4()}>
                        <img className={[classes.PressImage, i === arr.length - 1 ? "" : classes.PressImageSpacing].join(" ")} src={item} alt="" />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Press
