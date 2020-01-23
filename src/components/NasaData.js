import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function NasaData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(`This is api error: ${error}`);
      });
  }, []);
  return (
    <>
      <Header theData={data} />
    </>
  );
}

export default NasaData;
