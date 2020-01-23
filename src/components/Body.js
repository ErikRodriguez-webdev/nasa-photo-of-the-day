import React from "react";
import Footer from "./Footer";

function Body(props) {
  return (
    <div>
      <h2>{props.theData.title}</h2>
      <p>{props.theData.date}</p>
      <p>{props.theData.explanation}</p>
      <Footer theData={props.theData} />
    </div>
  );
}

export default Body;
