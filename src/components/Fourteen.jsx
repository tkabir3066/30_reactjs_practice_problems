import React, { useEffect, useState } from "react";
// Question: Develop a weather app that fetches and displays weather information based on user's location

function Fourteen() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0438b0e40aa3808a753615aaf8410179`
          )
            .then((res) => res.json())
            .then((data) => {
              setWeather(data);
              setIsLoading(false);
            });
        });
      }
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Current Weather</h1>
      {isLoading && <p>Data is Loading...</p>}
      {weather && (
        <div>
          <h3>Location: {weather?.name}</h3>
          <p>
            <strong>Temperature:</strong> {weather?.main?.temp}
          </p>
          <p>
            <strong>Condition:</strong> {weather?.weather[0]?.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Fourteen;
