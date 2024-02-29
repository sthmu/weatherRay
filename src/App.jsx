import background from "./assets/Designer.jpeg";
import "./App.css";
import WeatherSlide from "./components/WeatherSlide";
import SearchComponent from "./components/searchComponent";
import { useEffect, useState } from "react";
import apiKey from "./config/config";
import axios from "axios";

function App() {
   const [weather  ,setWeather]= useState(null);


   const fetchWeather=async ()=>{
    
   }

  useEffect(() => {
    ;(async () => {
      const result = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=" +
          apiKey +
          "&q=baduraliya"
      );
      console.log(result.data);

      setWeather(result.data);
    })();
  }, [1]);



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
          <h1 className="text-light ">Weather Api Test</h1>
          <SearchComponent></SearchComponent>

          {weather && <WeatherSlide weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
