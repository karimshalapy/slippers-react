import React from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import classes from './Press.module.css'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'

const Press: React.FC = () => {
    const pressData = useSelector((state: RootReducer) => state.mainResources.press)

    return (
        <section className={classes.Press}>
            <h2><span>mahabis</span> as seen in</h2>
            <ul className={classes.ImgsContainer}>
                {pressData ? pressData.map((item, i, arr) => (
                    <li key={v4()}>
                        <img className={[classes.PressImage, i === arr.length - 1 ? "" : classes.PressImageSpacing].join(" ")} src={item.imgUrl} alt={item.imgAlt} />
                    </li>
                )) : null}
            </ul>
        </section>
    )
}

export default Press
