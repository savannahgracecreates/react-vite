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
      loadedCity: response.data.city,
      time: response.data.time,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "d39d6443520afb97te34a49a61faf9o3";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
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
      
        <h1>{weather.loadedCity}</h1>
        <div className='row'>
        <div className='col'>
          <img  src={weather.icon} alt={weather.description} />
          </div>
          <div className='col'>
          <span className='temperature'>{Math.round(weather.temperature)}</span><span className='unit'>°F</span>
          </div>
          <div className='col'>
          <ul>
          <li>Sunday</li>
          <li>{weather.time}</li>
          <li>Description: {weather.description}</li>
        </ul>
        </div>
        <div className='col'>
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