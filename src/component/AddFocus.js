import React, { useEffect, useState } from "react";
import "../App.css";

const getFocus = () => {
  let list = localStorage.getItem("focus");
  console.log(list);
  if (list) {
    return localStorage.getItem("focus");
  } else {
    return "";
  }
};

const AddFocus = () => {
  const [focus, setFocus] = useState(getFocus);

  const addFocus = () => {
    const yourFocus = prompt("What is your main focus for today?");
    if (yourFocus == null) {
      setFocus("");
    } else {
      setFocus(yourFocus);
    }
  };

  const remFocus = () =>{
    setFocus("")
  }

  useEffect(() => {
    localStorage.setItem("focus", focus);
  }, [focus]);

  return (
    <>
      <h2>What is your main Focus for Today?</h2>
      <input
        // style={{ display: !localStorage.getItem("focus") ? "none" : "block" }}
        className="focus"
        type="text"
        value={focus}
        readOnly
      />
      <div className="buttons">
        <button className="addButton button" onClick={addFocus}>
          Add(+)
        </button>
        <button className="remButton button" onClick={remFocus}>
          remove(x)
        </button>
      </div>
    </>
  );
};

export default AddFocus;
