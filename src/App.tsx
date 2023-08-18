import React from 'react';
import MainComp from './components/MainComp';
import './App.scss';
import ReactGA from 'react-ga';

function App() {  
  const TRACKING_ID = "G-XTFCN7VKYE"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  return (
    <div className="App">
      <MainComp />
    </div>
  );
}

export default App;
