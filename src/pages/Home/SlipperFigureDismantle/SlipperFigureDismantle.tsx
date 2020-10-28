import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from './SlipperFigureDismantle.module.css'
import SlipperFigureLayer from './SlipperFigureLayer/SlipperFigureLayer'
import { LayerData } from './SlipperFigureDismantleTypes.d'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'

interface Props {

}

const SlipperFigureDismantle: React.FC<Props> = props => {
    const nodeRef = useRef<HTMLDivElement>(null)
    let [woolDisplacement, setWoolDisplacement] = useState(0)
    let [footbedDisplacement, setFootbedDisplacement] = useState(0)
    let [soleDisplacement, setSoleDisplacement] = useState(0)

    // a function to mutliply the max displacement by a fraction while keeping it equal or smaller than max and equal or bigger than 0
    const updateDisplacement = useCallback<(x: number) => number>((maxDisplacement) => {
        if (nodeRef.current) {
            const rect = nodeRef.current.getBoundingClientRect()
            //displacement is just the reslut of mutliplying a fraction by the max displacement to get the best animation result
            const displacement = ((- (rect.top - 100) / window.innerHeight) * 4) * maxDisplacement
            if (displacement > maxDisplacement) return maxDisplacement
            else if (displacement < 0) return 0
            else return displacement
        }
        return 0
    }, [])

    const showText = useCallback(() => {
        if (nodeRef.current) {
            const rect = nodeRef.current.getBoundingClientRect()
            const figcaptionsArray = Array
                .from(nodeRef.current.nextElementSibling!.childNodes) //make an array of the figure elements
                .map(item => item.lastChild! as HTMLElement) //map to make an array of the figcaption elements

            if (rect.top < -75) {
                figcaptionsArray
                    .forEach(item => { //applying the css classes for all 
                        if (!item.classList.contains(classes.ShowText)) item.classList.add(classes.ShowText)
                    })
            } else {
                figcaptionsArray.forEach(item => item.classList.remove(classes.ShowText))
            }
        }
    }, [])

    //a function that sets the state of each displacement and shows the text
    const scrollHandler = useCallback(() => {
        setWoolDisplacement(updateDisplacement(165))
        setFootbedDisplacement(updateDisplacement(280))
        setSoleDisplacement(updateDisplacement(390))
        showText()
    }, [updateDisplacement, showText])



    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [scrollHandler])

    const figureLayerData: LayerData[] = [
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-dismantled%2Fparallax-classic-upper.png?alt=media",
            imgAlt: "slipper top part",
            layerType: "SlipperTop",
            title: "soft felt upper",
            text: "gently compresses tired feet",
        },
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-dismantled%2Fparallax-classic-wool.png?alt=media",
            imgAlt: "slipper wool lining",
            layerType: "SlipperWool",
            title: "100% wool lining",
            text: "wicks moisture and regulates temperature",
            style: { transform: `translateY(${woolDisplacement}px)` },
        },
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-dismantled%2Fparallax-classic-insole.png?alt=media",
            imgAlt: "slipper footbed part",
            layerType: "SlipperFootbed",
            title: "adaptable foam footbed",
            text: "contours to your foot as you move",
            style: { transform: `translateY(${footbedDisplacement}px)` },
        },
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/slipper-dismantled%2Fparallax-classic-sole.png?alt=media",
            imgAlt: "slipper sole part",
            layerType: "SlipperSole",
            title: "durable hybrid sole",
            text: "go anywhere, indoors or out",
            style: { transform: `translateY(${soleDisplacement}px)` },
        }
    ]

    return (
        <section className={classes.FigureDismantle}>
            <div className={classes.FigureDismantleTextContainer} ref={nodeRef}>
                <h2>mahabis slippers</h2>
                <h3>comfort in any climate.</h3>
                <p>we've taken the world's most comfortable shoe - the slipper - and ripped up the rulebook to create something functional. something beautiful. something to help the world spend its time well, no matter the weather</p>
            </div>
            <div className={classes.FigureDismantleFiguresContainer}>
                {
                    figureLayerData.map(layer => (
                        <SlipperFigureLayer
                            key={layer.layerType}
                            {...layer}
                        />
                    ))
                }
            </div>
            <Button hasLink classNames={[classes.FigureDismantleBtn]}><Link to="/slipper/classic">LEARN MORE</Link></Button>
        </section>
    )
}

export default SlipperFigureDismantle
