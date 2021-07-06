import React, { useState, useEffect } from "react";
import unsplash from "./axios/unsplash";
import Time from "./component/Time";
import PositiveWords from "./component/PositiveWords";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);
  const pageNo = Math.floor(Math.random() * 20) + 1;
  const choseIMG = Math.floor(Math.random() * 30) + 1;

  let getPhoto = async () => {
    try {
      const response = await unsplash.get("", {
        params: {
          page: pageNo,
        },
      });
      setPhoto(response.data.results[choseIMG].urls.full);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhoto();
  },[]);
  // getPhoto();

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="container">
        <Time />
        <PositiveWords />
      </div>
    </div>
  );
}

export default App;
