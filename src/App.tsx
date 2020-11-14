import React, { createContext, lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import useFirebaseAuth from './hooks/useFirebaseAuth'
import firebase from 'firebase/app'
import BasicLayout from './layouts/BasicLayout/BasicLayout'
import { getResources } from './store/actionsIndex/actionIndex'
import { getCartData, setCartDataLocally } from './store/actionsIndex/actionIndex'
import SuspenseFallback from './components/SuspenseFallback/SuspenseFallback'

const Auth = lazy(() => import('./pages/Auth/Auth'))
const Home = lazy(() => import('./pages/Home/Home'))
const Slipper = lazy(() => import('./pages/Slipper/Slipper'))
const Slippers = lazy(() => import('./pages/Slippers/Slippers'))
const _404 = lazy(() => import('./pages/_404/_404'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Orders = lazy(() => import('./pages/Orders/Orders'))


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
              <Suspense fallback={<SuspenseFallback />}>
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
              </Suspense>
            </BasicLayout>
          </div>
        </FirebaseUserContext.Provider>
      </LastLocationProvider>
    </BrowserRouter>
  )
}

export default App
