import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({city}) => {
  const [weather, setWeather] = useState({temperature: 'unavailable', wind_speed: 'unavailable', wind_dir: '', weather_icons: []});
  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_CODE}&query=${city}`)
      .then(response => {
        console.log(response.data);
        setWeather(response.data.current);
      });
  }

  useEffect(hook);
  return (
    <>  
      <h3>Weather in {city}</h3>
      <p><b>temperature</b> {weather.temperature}°C</p>
      <img width="50" height="50" src={weather.weather_icons[0]}  alt="" />
      <p><b>wind</b> {weather.wind_speed} km/h {weather.wind_dir}</p>
    </>
  );
}

export default Weather;