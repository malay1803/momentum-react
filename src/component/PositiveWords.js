import React, { useEffect, useState } from "react";
import "../App.css";

const PositiveWords = () => {
  const [phrase, setPhrase] = useState("Accept Yourself");

  let phrases = [
    "Accept Yourself",
    "Act Justly",
    "Aim High",
    "Amplify Hope",
    "Take Baby Steps",
    "You Are Awesome",
    "You Are Creative",
    "Be Fearless",
    "Be Honest",
    "Be Kind",
    "Be Spontaneous",
    "Be Still",
    "You Are Yourself",
    "Be A Beautiful Chaos",
    "Breathe Deeply",
    "But Why?",
    "Call Me",
    "Carpe Diem",
    "Cherish Today",
    "Just Chill Out",
    "You are Crazy Beautiful",
    "Dance Today",
    "Don’t Panic",
    "Don’t Stop",
    "Dream Big",
    "Dream Bird",
    "Enjoy Life",
    "Enjoy Today",
  ];

  const getPhase = () => {
    let randomPhrase = Math.floor(Math.random() * phrases.length) + 1;
    setPhrase(phrases[randomPhrase])
  };

  useEffect(()=>{
    getPhase()
  },[])

  return <h3>{phrase}</h3>;
};

export default PositiveWords;
