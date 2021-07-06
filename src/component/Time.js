import React, { useState } from "react";
import "../App.css";

const Time = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    let currHour = new Date().getHours();
    let currMin = ('0'+new Date().getMinutes()).slice(-2);
    let showTime = `${currHour}:${currMin}`
    setTime(showTime)
  };
// console.log(setInterval(updateTime, 1000));
  setInterval(updateTime, 1000)

  return (
      <h1>{time}</h1>
  );
};

export default React.memo(Time);
