import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './InstagramPhotos.module.css'
import { ReactComponent as Logo } from '../../../assets/mahabis-logo.svg'
import { InstagramData } from './InstagramPhotosTypes'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/rootReducer/reducersTypes'
import loading from '../../../assets/loading.gif'

const InstagramPhotos: React.FC = () => {
    //get instaData from redux store
    const instaData = useSelector((state: RootReducer) => state.mainResources.insta)
    //render loading gifs untill the async gallery data fetch resolves
    let renderedData: InstagramData[] = instaData ? instaData : new Array(4).fill({
        imgUrl: loading,
        imgAlt: "loading",
        url: "/"
    });

    //reference to the logo container div
    const logoContainerRef = useRef<HTMLDivElement>(null)

    //a function to check whether the logo container is in viewport or not
    const isInViewPort = useCallback(() => {
        if (logoContainerRef.current) {
            const rect = logoContainerRef.current!.getBoundingClientRect()
            return (
                rect.top <= window.innerHeight &&
                (rect.top + rect.height) > 0
            )
        } else return false
    }, [])

    //scroll handler function to add and remove Active class to logo container div
    const scrollHandler = useCallback((e: Event) => {
        if (logoContainerRef.current) {
            if (isInViewPort()) {
                if (!logoContainerRef.current.classList.contains(classes.Active)) logoContainerRef.current.classList.add(classes.Active)
            } else {
                logoContainerRef.current.classList.remove(classes.Active)
            }
        }
    }, [isInViewPort])

    //useEffect to add scroll event listener to the window and remove it when this component unmounts
    useEffect(() => {
        const current = logoContainerRef.current;

        if (current) {
            window.addEventListener("scroll", scrollHandler)
        }
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [scrollHandler])

    return (
        <section>
            <ul className={classes.InstaContainer}>
                {
                    renderedData.map(item => (
                        <li key={v4()} className={[classes.InstaItem, item.imgAlt === "loading" ? classes.Loading : ""].join(" ")}>
                            <Link to={item.url}>
                                <img src={item.imgUrl} alt={item.imgAlt} className={classes.InstaPhoto} />
                            </Link>
                        </li>
                    ))
                }
                <div className={classes.LogoContainer} ref={logoContainerRef}>
                    <Logo className={classes.LogoImg} />
                </div>
            </ul>
        </section>
    )
}

export default InstagramPhotos
