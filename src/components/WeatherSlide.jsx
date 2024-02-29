import { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "./WeatherItem";

export default function WeatherSlide(props) {
  const temperature = props.weather.current?.temp_c;
  const wind = props.weather.current?.wind_kph;
  const condition = props.weather.current?.condition.text;
  const humidity = props.weather.current?.humidity;

  return (
    <>
      <div className="row text-light title rounded p-5">
        <WeatherItem name={"Temperature"} value={temperature + "c"} />
        <WeatherItem name={"Wind Speed"} value={wind + " kmph"} />
        <WeatherItem name={"Condition"} value={condition} />
        <WeatherItem name={"Humidity"} value={humidity} />
      </div>
    </>
  );
}
