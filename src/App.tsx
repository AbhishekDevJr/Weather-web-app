import React, { useEffect, useState } from 'react';
import MainComp from './components/MainComp';
import './App.scss';
import ReactGA from 'react-ga';
import axios from 'axios';

function App() {
  const TRACKING_ID = "UA-258658703-2"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  const apiFunction = async () => {
    const apiRes = await axios.get('https://messageboardexpress.adaptable.app/weather');
    console.log('API RES----------->', apiRes);
  }

  useEffect(() => {
    try {
      apiFunction();
    } catch (e: any) {
      console.log('Msg------>', e.message);
    }
  }, []);

  return (
    <div className="App">
      <MainComp />
    </div>
  );
}

export default App;
