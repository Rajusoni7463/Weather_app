import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import WeatherCard from './components/WeatherCard';


const App = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({
    name: "",
    main: {}
  });
  const ApiKey = "b06eb65cdc021bfca4031ac04f3bf72f";

  const ApiCall = async () => {
    if (city === "") {
      alert("Please enter a city name.");
      return;
    }
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKey}`;
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Failed to fetch the weather data:", error);
      alert("Failed to fetch the weather data. Please check the city name and try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall();
  };

  const getCelsiusTemperature = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <TextField 
            id="outlined-basic" 
            label="City Name" 
            variant="outlined" 
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update the state on input change
          />
          <br />
          <Button className='child1' variant="contained" type='submit'>Search</Button>
        </form>
      </div>
      <div className='weather-container'>
        <WeatherCard  
          cityName={location.name} 
          temperature={getCelsiusTemperature(location.main.temp)}
        />
      </div>
    </>
  );
}

export default App;
