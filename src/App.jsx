import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import FormattedDate from './FormattedDate';


function App() {
  
  const [city, setCity] = useState("Savannah");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateWeather(response) {
    setLoaded(true);
    setWeather({
      loadedCity: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description
    });
  }

  function searchWeather(city) {
    const apiKey = "d39d6443520afb97te34a49a61faf9o3";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    searchWeather("Savannah");
  }, []);

  let form = (
    <span className='form-row'>

  <form 
    id="weather-search" 
    onSubmit={handleSubmit} 
    className="my-form"
  >
    <input 
      type="search" 
      autoFocus="on" 
      placeholder="Enter a city..." 
      onChange={updateCity}
    />
  </form>

  <button 
    className="search-button" 
    type="submit"
    form="weather-search"
  >
    Search
  </button>

</span>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <h1>{weather.loadedCity}</h1>

        <div className='row'>

          <div className='col'>
            <img src={weather.icon} alt={weather.description} />
          </div>

          <div className='col'>
            <span className='temperature'>
              {Math.round(weather.temperature)}
            </span>
            <span className='unit'>°F</span>
          </div>

          <div className='col'>
            <ul>
              <li><FormattedDate date={weather.date} /></li>
              <li>Description: {weather.description}</li>
            </ul>
          </div>

          <div className='col'>
            <ul>
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