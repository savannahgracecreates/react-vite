import React from "react";
import "./WeatherForecast.css";


export default function weatherForecast (props){
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
<div className="WeatherForecast-day">
     Thu</div> 
<img src={props.icon} alt={props.description} size={98}/>
<div className="WeatherForecast-temps">
    <span className="WeatherForecast-temps-max"> 91
    </span> ||
    <span className="WeatherForecast-temps-min">58
    </span>
 
    </div>
    </div>
 </div>
    </div>
);
    
       
}