import background from "./assets/Designer.jpeg";
import "./App.css";
import WeatherSlide from "./components/WeatherSlide";
import SearchComponent from "./components/searchComponent";

function App() {
  return (
    <div
      className="p-5 w-100  "
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: '100vh'
      }}
    >
      <div className="title w-75 rounded mx-auto p-5">
      <h1 className="text-light ">Whether Api Test</h1>
      <SearchComponent></SearchComponent>

      <WeatherSlide></WeatherSlide>

      </div>

      
      
    </div>
  );
}

export default App;
