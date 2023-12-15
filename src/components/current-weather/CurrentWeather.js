import React from 'react'
import '../current-weather/CurrentWeather.css'

const CurrentWeather = ({data}) => {
    // console.log(data);
    
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.name}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round((data.main.temp)-275)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">{data.main.feels_like}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{data.wind.speed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{data.main.humidity}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{data.main.pressure}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather