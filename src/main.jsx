import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
          <App />
          <div>
      <h3>About this website </h3>
      <p>This project was coded by Savannah Grace and is opened sourced on <a href="https://github.com/savannahgracecreates/react-vite" target="_blank">GitHub</a></p>
  </div>
      </div>
    </div>
  </StrictMode>,
)
