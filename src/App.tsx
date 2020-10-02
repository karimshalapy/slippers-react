import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
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
          <p>Hello World</p>
        </BasicLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
