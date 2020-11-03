import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Slipper from './pages/Slipper/Slipper';
import Slippers from './pages/Slippers/Slippers';
import _404 from './pages/_404/_404';
import { getResources } from './store/actionsIndex/actionIndex'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getResources())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <BasicLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/slippers" exact component={Slippers} />
            <Route path="/slipper" exact component={Slipper} />
            <Route path="/slipper/:slipperType" exact component={Slipper} />
            <Route path="/404" exact component={_404} />
            <Route path="/auth" exact component={Auth} />
            <Redirect from="/" to="/404" />
          </Switch>
        </BasicLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
