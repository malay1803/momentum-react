import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lati, setLat] = useState("");
  const [longi, setLong] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          setLat(lat);
          setLong(long);
        },
        () => {
          alert("Error!");
        }
      );
    } else {
      alert(
        "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
      );
    }
  };

  const getWeather = async () => {
    const api = "f59760c8d4b46f298b7bfaecbe7911f0";
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=${api}`
      );
      setCity(data.data.name);
      setTemp(Math.round(data.data.main.temp));
      setIcon(data.data.weather[0].icon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getWeather();
  });

  return (
    <div className="weather">
      <div className="temp">
        <img src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="" />
        <p>{temp} °C</p>
      </div>
      <div className="city">
        <p>{city}</p>
      </div>
    </div>
  );
};

export default Weather;
