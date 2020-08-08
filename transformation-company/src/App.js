import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/Header-Component';
import Instructions from './Components/Layout/Instructions-Components';
import Add_Fighter from './Components/Add_Fighter-Components';
import List_Fighter_Battle from './Components/List_Fighter_Battle-Components';
import Result_Battle from './Components/Result_Battle-Component';
import Footer from './Components/Layout/Footer-Component';
import { Provider } from './Components/Context/Context';

import './App.scss';

function App() {
  return (
    <Provider>
      <>
        <Header />
        <Instructions />
        <Add_Fighter />
        <List_Fighter_Battle />
        <Result_Battle />
        <Footer />
      </>
    </Provider>
  );
}

export default App;
