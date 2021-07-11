import React, { useState } from "react";
import "../App.css";

const Time = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    let currHour = new Date().getHours();
    // code for making time appear in 12 hour format
    // if (currHour > 12){
    //   currHour = currHour - 12
      if(currHour<10){
        currHour = '0' + currHour
      }
    // }
    let currMin = ("0" + new Date().getMinutes()).slice(-2);
    let showTime = `${currHour}:${currMin}`;
    setTime(showTime);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
};

export default React.memo(Time);
