import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherSlide(props) {
  const temperature = props.weather.current?.temp_c;
  const wind = props.weather.current?.wind_kph;
  const condition = props.weather.current?.condition.text;
  const humidity = props.weather.current?.humidity;

  return (
    <>
      <div className="row text-light title rounded p-5">
        <div className="col col-lg-3 h5 col-6 pb-5 ">
        <h6>Temperature</h6> <br /> {temperature} c
        </div>
        <div className="col col-lg-3 h5 col-6 pb-5">
          <h6>Wind Speed</h6> <br /> {wind} Kph
        </div>
        <div className="col col-lg-3 h5 col-6 pb-5">
          <h6>Condition</h6> <br /> {condition}
        </div>
        <div className="col col-lg-3 h5 col-6 pb-5">
          <h6>Humidity</h6> <br /> {humidity}
        </div>
      </div>
    </>
  );
}
