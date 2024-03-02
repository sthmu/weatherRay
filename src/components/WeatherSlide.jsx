import { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "./WeatherItem";

export default function WeatherSlide(props) {
  const temperature = props.weather.temperature;
  const wind = props.weather.wind;
  const condition = props.weather.condition;
  const humidity = props.weather.humidity;

  return (
    <>
      <div className="text-light h2">
        {props.weather.location?.name}
        <div className="text-light h5 text-opacity-75 ">
        {props.weather.location.country+ " " +props.weather.location.region+"  "+props.weather.time}
        </div>
      
      </div>

      <div className="row text-light p-5 justify-content-center  ">
        <WeatherItem name={"Temperature"} value={temperature + "c"} />
        <WeatherItem name={"Wind Speed"} value={wind + " kmph"} />
        <WeatherItem name={"Condition"} value={condition} />
        <WeatherItem name={"Humidity"} value={humidity} />
      </div>
    </>
  );
}
