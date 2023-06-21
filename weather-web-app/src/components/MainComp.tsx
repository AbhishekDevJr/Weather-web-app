import React, { useState, useEffect } from 'react';
import './maincomp.scss';
import {API_KEY_Weather} from './constants';

function MainComp() {

    const [userInput, setUserInput] = useState<string>('surat');
    const [weatherInfo, setWeatherInfo] = useState<any>();
    const [locTime, setLocTime] = useState<Date>();

    async function weatherApiCall(){
        const CurrentApiUrl : string = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY_Weather}`;
        const apiResponse = await fetch(CurrentApiUrl);
        const apiData = await apiResponse.json();
        setWeatherInfo(apiData);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) : void {
        setUserInput(e.target.value);
    }

    function handleBtnClick(e : React.MouseEvent<HTMLButtonElement>) : void{
        weatherApiCall();
        console.log(weatherInfo);
    }

    useEffect(() => {
        weatherApiCall();
        let currentTime = new Date(weatherInfo?.dt)
        setLocTime(currentTime);
        console.log(currentTime);
    }, []);

    return (
        <div className="container-main-component">
            <div className="main-component-left">
                <h1>{weatherInfo?.weather[0].description}</h1>
                <p>{weatherInfo?.name}</p>
                <p>{'10:49'}</p>
                <h1>{weatherInfo?.main.temp + ' *F'}</h1>
                <button>Display *F</button>
                <input value = {userInput} type="text" placeholder="Surat" onChange={handleInputChange} />
                <button type = 'button' onClick={handleBtnClick} >Search Location</button>
            </div>

            <div className="main-component-right">
                <div className="wrapper-info1">
                    <img src="" alt="Temperature" />
                    <div className="">
                        <p>Feels Like</p>
                        <p>{weatherInfo?.main.feels_like + ' *F'}</p>
                    </div>
                </div>

                <div className="wrapper-info2">
                    <img src="" alt="Humidity" />
                    <div className="">
                        <p>Humidity</p>
                        <p>{weatherInfo?.main.humidity + ' %'}</p>
                    </div>
                </div>

                <div className="wrapper-info3">
                    <img src="" alt="Rain" />
                    <div className="">
                        <p>Chance of Rain</p>
                        <p>46 %</p>
                    </div>
                </div>

                <div className="wrapper-info4">
                    <img src="" alt="Wind" />
                    <div className="">
                        <p>Wind Speed</p>
                        <p>{weatherInfo?.wind.speed + ' Km/Hr'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComp;