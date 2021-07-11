import React, { useState } from "react";

const SearchTab = () => {
  const [engine, setEngine] = useState("google");

  const enterKey = (e) => {
    if (e.key === "Enter") {
      if (engine === "google") {
        window.open(`https://www.google.com/search?q=${e.target.value}`);
      } else if(engine === "youtube") {
        window.open(
          `https://www.youtube.com/results?search_query=${e.target.value}`
        );
      } else{
        window.open(
          `https://stackoverflow.com/search?q=${e.target.value}`
        );
      }
    }
  };

  const searchEngine = (e) => {
    setEngine(e.target.value);
  };

  return (
    <div className="searchBar">
      <i className="fas fa-search"></i>
      <input type="text" className="search" onKeyDown={enterKey} />
      <select name="searchEngine" id="searchEngine" onChange={searchEngine}>
        <option value="google">&#xf1a0; Google </option>
        <option value="youtube">&#xf167; Youtube </option>
        <option value="stackOverflow">&#xf16c; &nbsp;StackOverflow </option>
      </select>
    </div>
  );
};

export default SearchTab;
