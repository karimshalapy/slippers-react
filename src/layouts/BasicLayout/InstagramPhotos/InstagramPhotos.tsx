import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import classes from './InstagramPhotos.module.css'
import { ReactComponent as Logo } from '../../../assets/mahabis-logo.svg'

interface Props {

}

const InstaDummyData = [
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/insta-bar%2F1_5.jpg?alt=media",
        imgAlt: "mahabis canvas // jutland stone",
        url: "/slippers"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/insta-bar%2F2_4.jpg?alt=media",
        imgAlt: "mahabis classic // light grey",
        url: "/slippers"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/insta-bar%2F3_3.jpg?alt=media",
        imgAlt: "mahabis classic // dark grey",
        url: "/slippers"
    },
    {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/slippers-react.appspot.com/o/insta-bar%2F4_3.jpg?alt=media",
        imgAlt: "mahabis canvas // dalarna khaki",
        url: "/slippers"
    }
]

const InstagramPhotos: React.FC<Props> = props => {
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
        console.log(isInViewPort())
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
                    InstaDummyData.map(item => (
                        <li key={v4()} className={classes.InstaItem}>
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
