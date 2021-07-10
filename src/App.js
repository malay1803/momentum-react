import React, { useState, useEffect } from "react";
import Time from "./component/Time";
import PositiveWords from "./component/PositiveWords";
import AddFocus from "./component/AddFocus";
import "./App.css";
import Quote from "./component/Quote";

function App() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(https://source.unsplash.com/1920x1280/daily?nature)`,
      }}
    >
      <div className="container">
        <div className="time">
          <Time />
        </div>
        <PositiveWords />
        <AddFocus />
        <div className="quoteDiv">
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default App;
