import background from "./assets/Designer.jpeg";
import "./App.css";
import WeatherSlide from "./components/WeatherSlide";
import SearchComponent from "./components/searchComponent";
import { fetchWeather } from "./services/FetchWeather";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

function App() {
  const [weather, setWeather] = useState(null);
  const [isDragging, setIsDragging] = useState("no");
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(0);
  const [sliderValue,setSliderValue]=useState(0);

  const search = async (searchText) => {
    if (searchText == "") {
      searchText = "baduraliya";
    }

    const weatherObj = await fetchWeather(searchText);
    if (weatherObj != null) {
      setWeather(null);
    }
    setWeather(weatherObj);
    setForecast(weatherObj.forecast);
    setSliderValue(Number.parseFloat(weatherObj.time.substr(11,12)))
  };

  const changeSlider = (value) => {
    if (weather != null) {
      console.log(value);
      const tempWeather = {
        location: weather.location,
        time: forecast.forecastday[day].hour[value].time,
        temperature: forecast.forecastday[day].hour[value].temp_c,
        wind: forecast.forecastday[day].hour[value].wind_kph,
        condition: forecast.forecastday[day].hour[value].condition.text,
        humidity: forecast.forecastday[day].hour[value].humidity,
        forecast: forecast.forecastday[day].hour[value].forecast,
      };
      setWeather(tempWeather);
    }
  };

  return (
    <div
      className="p-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="title col col-12 col-lg-10 rounded mx-auto p-5 ">
          <div className="text-light h1 text-end">
            Weather Ray{" "}
            <div className="h4 text-light text-opacity-75 ">
              {" "}
              stay ahead of weather
            </div>
          </div>
          <SearchComponent search={search}></SearchComponent>
          {weather && (
            <>
              <WeatherSlide weather={weather} />

              <CircularSlider
                min={0}
                max={23}
                direction={1}
                label=""
                labelColor="#005a58"
                labelBottom={true}
                labelFontSize="1.6rem"
                knobPosition="left"
                appendToValue=" h"
                valueFontSize="4rem"
                trackColor="#eeeeee"
                progressColorFrom={isDragging ? "#F0A356" : "#00bfbd"}
                progressColorTo={isDragging ? "#FFFFF" : "#FFFFF"}
                knobColor={isDragging ? "#F0A367" : "#00bfbd"}
                isDragging={(value) => setIsDragging(value)}
                onChange={changeSlider}
                dataIndex={sliderValue}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
