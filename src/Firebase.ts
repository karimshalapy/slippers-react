import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { ProviderId } from './@types/AuthTypes'

const config = {
    apiKey: "AIzaSyAdwnFOhI279kHXnBDKySpKvUpAYP46ETg",
    authDomain: "slippers-react.firebaseapp.com",
    databaseURL: "https://slippers-react.firebaseio.com",
    projectId: "slippers-react",
    storageBucket: "slippers-react.appspot.com",
    messagingSenderId: "154594899645",
    appId: "1:154594899645:web:f95f46499c34e60484a9d4",
    measurementId: "G-8CY1LMVPLD"
}
const app = firebase.initializeApp(config)
export default app
export const auth = app.auth()
export const database = app.database()
export const {
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
    EmailAuthProvider
} = firebase.auth

export const getProviderId = (providerType: ProviderId) => {
    console.log(providerType)
    if (providerType === "facebook.com") return new FacebookAuthProvider()
    if (providerType === "twitter.com") return new TwitterAuthProvider()
    if (providerType === "github.com") return new GithubAuthProvider()
    if (providerType === "google.com") return new GoogleAuthProvider()
}