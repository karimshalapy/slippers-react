import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import useFirebaseAuth from './hooks/useFirebaseAuth'
import firebase from 'firebase/app'
import BasicLayout from './layouts/BasicLayout/BasicLayout'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Slipper from './pages/Slipper/Slipper'
import Slippers from './pages/Slippers/Slippers'
import _404 from './pages/_404/_404'
import { getResources } from './store/actionsIndex/actionIndex'
import { getCartData, setCartDataLocally } from './store/actionsIndex/actionIndex'
import Cart from './pages/Cart/Cart'
import Orders from './pages/Orders/Orders'

export const FirebaseUserContext = createContext<firebase.User | null>(null)

function App() {
  const dispatch = useDispatch()
  const user = useFirebaseAuth()

  useEffect(() => {
    dispatch(getResources())
  }, [dispatch])

  useEffect(() => {
    if (user) dispatch(getCartData(user.uid))
    else dispatch(setCartDataLocally({}))
  }, [dispatch, user])

  return (
    <BrowserRouter>
      <LastLocationProvider>
        <FirebaseUserContext.Provider value={user} >
          <div className="App">
            <BasicLayout>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/slippers" exact component={Slippers} />
                <Route path="/slipper" exact component={Slipper} />
                <Route path="/slipper/:slipperType" exact component={Slipper} />
                <Route path="/404" exact component={_404} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/orders" exact component={Orders} />
                <Redirect from="/" to="/404" />
              </Switch>
            </BasicLayout>
          </div>
        </FirebaseUserContext.Provider>
      </LastLocationProvider>
    </BrowserRouter>
  )
}

export default App
