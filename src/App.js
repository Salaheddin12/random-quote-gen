import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./quote";
import "./App.css";

function App() {
  
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState(0);
  const colors = [
    "#E74C3C",
    "#5499C7",
    "#2980B9",
    "#48C9B0",
    "#16A085",
    "#27AE60",
    "#2ECC71",
    "#F1C40F",
    "#F39C12",
    "#E67E22",
    "#95A5A6",
    "#2C3E50",
  ];
  // background Color gerenrator
  const colorGen = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };
  //quote generator
  const quoteGen = async () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        let quotesfromQuery = response.data;
        const random = Math.floor(Math.random() * quotesfromQuery.length);
        console.log(random);

        setQuote(quotesfromQuery[random].text);
        setAuthor(quotesfromQuery[random].author);
        console.log(quotesfromQuery[random].text);
        console.log(quotesfromQuery[random].author);
        // console.log(quote,author);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
  useEffect(() => {
    quoteGen();
    console.log(quote, author);
  }, [userId]);
  const color = colorGen();
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Quote color={color} quote={quote} author={author} handleClick={quoteGen} />
    </div>
  );
}

export default App;
