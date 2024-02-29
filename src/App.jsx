import background from "./assets/Designer.jpeg";
import "./App.css";
import WeatherSlide from "./components/WeatherSlide";
import SearchComponent from "./components/searchComponent";
import { useEffect, useState } from "react";
import apiKey from "./config/config";
import axios from "axios";
import iziToast from "izitoast";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (query) => {
    try {
      
      const result = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=" +
          apiKey +
          "&q=" +
          query
      );
      console.log(result.data);
      setWeather(result.data);
    } catch (error) {
      if(error.response.data){
        iziToast.error({
          title: "Error",
          message: error.response.data.error.message,
        });
      }else{
        iziToast.error({
          title: "Error",
          message: "Error Accured",
        });
      }
      
    }
  };

  const search = (searchText) => {
    fetchWeather(searchText);
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
          <h1 className="text-light ">Weather Api Test</h1>
          <SearchComponent search={search}></SearchComponent>

          {weather && <WeatherSlide weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
