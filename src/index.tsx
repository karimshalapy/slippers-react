import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './store/rootReducer/rootReducer'

//delaring the type of redux dev tools extension to work with typescript
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

//compose Enhancers for redux devtools tweaked to work in development environment only
const composeEnhancers = process.env.NODE_ENV === "development" && typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

//main store creation
const store = createStore(
  //the root reducer created by combineReducers above
  rootReducer,
  //compose enhancers for the redux dev tools and applying thunk middleware
  composeEnhancers ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}> {/* using the provider component to allow child components to have access to redux store*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

