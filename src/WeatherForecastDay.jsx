import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    
    function maximum() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minimum() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thurs",
            "Fri",
            "Sat"
        ];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">
                {day()}
            </div>

            <img
                src={props.data.condition.icon_url}
                alt={props.data.condition.description}
            />

            <div className="WeatherForecast-temps">
                <span className="WeatherForecast-temps-max">
                    {maximum()}
                </span>
                |
                <span className="WeatherForecast-temps-min">
                    {minimum()}
                </span>
            </div>
        </div>
    );
}