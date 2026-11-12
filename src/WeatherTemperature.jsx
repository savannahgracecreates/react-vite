import React, {useState} from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("imperial");
function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("imperial");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("metric");
}
if (unit === 'imperial'){
    return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.temperature)}
            </span>
            <span className="unit">
                °F | <a href="/" onClick={convertToCelsius}>°C</a> 
            </span>
        </div>
    );
} else {
    let celsius = (props.temperature - 32) * 5 / 9;
    return (

            <div className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(celsius)}
                </span>
                <span className="unit">
                <a href="/" onClick={convertToFahrenheit}>°F 
                    </a> |°C
            </span>
                </div>
    );
}

}




    
  