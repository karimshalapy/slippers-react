import React from 'react'
import FooterNavItems from './FooterNavItems/FooterNavItems'
import classes from './Footer.module.css'
import { ReactComponent as Logo } from '../../../assets/mahabis-logo.svg'
import americanExpress from '../../../assets/americanExpress.png'
import mastercard from '../../../assets/mastercard.png'
import paypal from '../../../assets/paypal.png'
import visa from '../../../assets/visa.png'
import { Link } from 'react-router-dom'
import { Data } from './FooterTypes'

interface Props {

}

const footerDummyData: Data = [
    { text: "sizing chart", url: "/sizing-chart" },
    { text: "delivery & returns", url: "/delivery-returns" },
    { text: "gift cards", url: "/gift-cards" },
    { text: "careers", url: "/careers" },
]

const socialDummyData: Data = [
    { socialMediaIcon: "Twitter", url: "/" },
    { socialMediaIcon: "Facebook", url: "/" },
    { socialMediaIcon: "Pinterest", url: "/" },
    { socialMediaIcon: "Instagram", url: "/" },
]

const Footer: React.FC<Props> = props => {
    return (
        <footer>
            <nav>
                <FooterNavItems data={footerDummyData} type="nav" />
            </nav>
            <section className={classes.FooterContentContainer}>
                <nav>
                    <FooterNavItems type="social" data={socialDummyData} />
                </nav>
                <Link to="/" className={classes.Moments}>#mahabismoments</Link>

                <div className={classes.FooterMainContent}>
                    <a href="/"><Logo className={classes.Logo} /></a>
                    <small>
                        This site is only for demo purposes created using React and Typescript. The author: <a href="https://github.com/karimshalapy" target="_blank" rel="noopener noreferrer">Karim Shalapy</a><br />
                        &copy; all rights reserved 21k footwear limited 2020 <br />
                        21k footwear ltd t/a mahabis, the leather market unit 10.g.1, 11-13 weston street, london, united kingdom, se1 3er<br />
                        (this is not an address for returns)<br />
                        design registration no. 002398388-0001 and 002398388-0002<br />
                        <Link to="/terms">terms</Link> // <Link to="/privacy">privacy policy</Link> // <Link to="/terms-conditions">offer t&amp;cs</Link>
                    </small>
                    <ul className={classes.PaymentOptions}>
                        <li><img src={americanExpress} alt="american express" /></li>
                        <li><img src={mastercard} alt="mastercard" /></li>
                        <li><img src={paypal} alt="paypal" /></li>
                        <li><img src={visa} alt="visa" /></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
