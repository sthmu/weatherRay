import { useEffect, useState } from "react";
import axios from "axios";



export default function WeatherSlide() {
  const [currentWeather, setCurrentWeather] = useState("current Whether");

  useEffect(() => {
    
  }, []);

  function change() {
    console.log("runnig CHange")
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        console.log(response.data);
        setCurrentWeather(response.data.fact);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error:", error.response.data);
        }
      });
  }

  return (
    <>
      <div className="card text-center mt-5">
        <div className="card-header">Current Weather</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">{currentWeather}</p>
          <a href="#" onClick={()=>{change()}}  className="btn btn-primary">
            fetch again
          </a>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </>
  );
}
