import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout/BasicLayout';

function App() {
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
