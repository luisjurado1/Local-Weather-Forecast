import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Weather";
import FormComp from "./FormComp";
import axios from "axios"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  //function to fetch weather data
  function getWeatherInfo(city) {
    /* fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      }); */
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`)
      .then
  }
  useEffect(() => {
    /*   window.navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
      // to get use city data ,you need to use google map api, send co-ordinates there to get user city data
    }) */
    /* fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getWeatherInfo(data.city);
      }); */
      axios.get("https://ipapi.co/json")
      .then()
  }, []);
  const getWeatherData = (e) => {
    e.preventDefault();
    getWeatherInfo(e.taregt.city.name);
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <FormComp getWeatherData={getWeatherData} />
          {weatherData && <Weather weatherData={weatherData} />}
        </div>
      </div>
    </>
  );
}
export default App;
