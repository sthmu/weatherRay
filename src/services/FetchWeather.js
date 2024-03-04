import apiKey from "../config/config";
import axios from "axios";
import iziToast from "izitoast";

const fetchWeather = async (query) => {
  try {
    const result = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json?key=" +
        apiKey +
        "&q=" +
        query +
        "&days=7"
    );
    console.log("forecast Weather : ");
    console.log(result.data);

    //creating the weather object to assign to it
    const tempWeather = {
      location:{
        name:result.data.location.name,
        country:result.data.location.country,
        region:result.data.location.region
      },
      time:result.data.current.last_updated,
      temperature: result.data.current.temp_c,
      wind: result.data.current.wind_kph,
      condition: result.data.current.condition.text,
      humidity: result.data.current.humidity,
      forecast:result.data.forecast
    }
    return tempWeather;
  } catch (error) {
    if (error.response?.data) {
      iziToast.error({
        title: "Error",
        message: error.response.data.error.message,
      });
    } else {
      iziToast.error({
        title: "Error",
        message: "Error Accured",
      });
    }
    return null;
  }
};

export { fetchWeather };
