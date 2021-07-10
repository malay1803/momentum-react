import React, { useState, useEffect } from "react";
import unsplash from "./axios/unsplash";
import Time from "./component/Time";
import PositiveWords from "./component/PositiveWords";
import AddFocus from "./component/AddFocus";
import "./App.css";
import Quote from "./component/Quote";

function App() {
  const [photo, setPhoto] = useState([]);

  const pageNo = Math.floor(Math.random() * 20) + 1;
  const choseIMG = Math.floor(Math.random() * 10) + 1;

  let getPhoto = async () => {
    try {
      const response = await unsplash.get("", {
        params: {
          page: pageNo,
        },
      });
      const photoLink = response.data.results[choseIMG].urls.full;
      setPhoto(photoLink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${photo})`,
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
