import React from "react";
import "../App.css";

const PositiveWords = () => {
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

  let randomPhrase = Math.floor(Math.random() * phrases.length) + 1;
  console.log(phrases[randomPhrase]);

  return <h3>{phrases[randomPhrase]}</h3>;
};

export default PositiveWords;
