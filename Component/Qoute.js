import React, { useState, useEffect } from "react";
import axios from "axios";
import './qoute.css'

function Qoute() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const qouteAPI = async () => {
    // let arrayOfQoute= []
    try {
      const data = await axios.get("https://api.quotable.io/random");
      // arrayOfQoute=data
      console.log(data);
      setTitle(data.data.content);
      setAuthor(data.data.author);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    qouteAPI();
  }, []);

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="qoute">{title}</div>
          <div className="author">Author : {author}</div>
          <div >
            <button className="btn"  onClick={() => qouteAPI()}>Give Qoute</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qoute;
