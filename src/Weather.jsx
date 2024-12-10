export default function Weather({ weatherData }) {
    return (
        <div className="weather">
            <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="" width={100} />
            {/* use? bcos value of useState is NULL */}
            <h2>Temp : {weatherData?.main.temp}°C</h2>
            <h3>Weather condition: {weatherData.weather[0].description}</h3>
            <p>Max tem : {weatherData?.main.temp_max}°C</p>
            <p>Min tem : {weatherData?.main.temp_min}°C</p>
        </div>
    )
}