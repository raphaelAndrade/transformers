import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/Header-Component';
import Instructions from './Components/Layout/Instructions-Components';
import Add_Fighter from './Components/Add_Fighter-Components';
import {Provider} from './Components/Context/Context';

import './App.scss';

function App() {
  return (
    <Provider>
      <>
        <Header />
        <Instructions />
        <Add_Fighter />
      </>
    </Provider>
  );
}

export default App;
