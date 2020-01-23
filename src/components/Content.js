import React from "react";
import Footer from "./Footer";
import styled from "styled-components";

const NasaImage = styled.img`
  width: 500px;
  height: 500px;
`;

const NasaExplanation = styled.p`
  margin: 0 auto;
  width: 60%;
  background: white;
  padding: 1%;
`;

function Content(props) {
  console.log(props);
  return (
    <>
      <div>
        <h2>{props.theData.title}</h2>
        <NasaImage src={props.theData.url} alt="A photo of outerspace" />
        <p>Date of photo: {props.theData.date}</p>
        <NasaExplanation>{props.theData.explanation}</NasaExplanation>
      </div>
      <Footer theData={props.theData} />
    </>
  );
}

export default Content;
