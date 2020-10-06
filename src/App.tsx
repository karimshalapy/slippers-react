import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import Home from './pages/Home/Home';
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
            <Route path="/404" exact component={_404} />
            <Redirect from="/" to="/404" />
          </Switch>
        </BasicLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
