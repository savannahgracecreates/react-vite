import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <span className='form-row'>
      <span className='my-form'>
    <form onSubmit={handleSubmit}>
      <input type="search" autoFocus="on" placeholder="Enter a city..." onChange={updateCity}/>
    </form>
    </span>
    <button className="search-button" type="Submit">Search</button>
    </span>
  );

  if (loaded) {
    return (
        <div>
        {form}
      
        <h1>{city}</h1>
        <div className='row'>
          <div className='col-6'>
        <ul>
          <li>Sunday</li>
          <li>7:00pm</li>
          <li>Temperature: <span className='temperature'>{Math.round(weather.temperature)}</span><span className='unit'>°F</span></li>
          <li>Description: {weather.description}</li>
         
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        </div>
        <div className='col-6'>
        <ul>
          <li>Precipitation: 10%</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mi/h</li>
        </ul>
        </div>
        </div>
        </div>
    );
  } else {
    return form;
  }
}


export default App;