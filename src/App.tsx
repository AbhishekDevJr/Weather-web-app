import React, { useEffect, useState } from 'react';
import MainComp from './components/MainComp';
import './App.scss';
import ReactGA from 'react-ga';
import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('accessToken');

function App() {
  const TRACKING_ID = "UA-258658703-2"; // OUR_TRACKING_ID
  console.log('userAccessToken----------->', ACCESS_TOKEN);
  ReactGA.initialize(TRACKING_ID);

  const apiFunction = async () => {
    const apiRes = await axios.get('http://localhost:3000');
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
      {ACCESS_TOKEN ? <MainComp /> : <h1 style={{ color: 'indigo' }}>You Don't have Permission to Access this page.</h1>}
    </div>
  );
}

export default App;
