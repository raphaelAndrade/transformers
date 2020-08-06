import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/Header-Component';
import Instructions from './Components/Layout/Instructions-Components';
import Add_Fighter from './Components/Add_Fighter-Components';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Instructions />
      <Add_Fighter />
    </>
  );
}

export default App;
