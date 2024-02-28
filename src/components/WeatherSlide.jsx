import { useEffect, useState } from "react";
import axios from "axios";



export default function WeatherSlide() {
  const [currentWeather, setCurrentWeather] = useState("current Whether");

  useEffect(() => {
    (async ()=>{
      const result= await axios.get("https://catfact.ninja/fact")
      console.log(result)
    })()
    
  }, []);

  

  return (
    <>

      <div className="row">

        <div className="col col-10 h-75 ">
          
        </div>

      </div>
        
 
    </>
  );
}
