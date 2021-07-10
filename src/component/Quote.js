import axios from "axios";
import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("Quote of the Day");
  const [author, setAuthor] = useState("Author");

  const getQuote = async () => {
    try {
      const data = await axios.get("https://quotes.rest/qod");
      const qouteOfTheDay = data.data.contents.quotes[0].quote;
      const authorOfTheQuote = data.data.contents.quotes[0].author;
      setQuote(qouteOfTheDay);
      setAuthor(authorOfTheQuote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <p className="quote">"{quote}"</p>
      <p className="author">
        -{author}{" "}
        <a
          className="twitterLink"
          href={`http://twitter.com/intent/tweet?text=${quote}`}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </p>
    </>
  );
};

export default Quote;
