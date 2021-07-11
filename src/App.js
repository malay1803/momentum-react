import React from "react";
import Time from "./component/Time";
import PositiveWords from "./component/PositiveWords";
import AddFocus from "./component/AddFocus";
import "./App.css";
import Quote from "./component/Quote";
import Weather from "./component/Weather";
import SearchTab from "./component/SearchTab";

function App() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(https://source.unsplash.com/1920x1280/daily?nature)`,
      }}
    >
      <div className="container">
        <Time />
        <PositiveWords />
        <AddFocus />
        <Quote />
        <Weather />
        <SearchTab />
      </div>
    </div>
  );
}

export default App;
