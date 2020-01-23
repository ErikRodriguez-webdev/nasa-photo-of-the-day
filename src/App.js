import React from "react";
import "./App.css";
import NasaData from "./components/NasaData";
import styled from "styled-components";

const BodyApp = styled.div`
  background: orange;
`;

function App() {
  return (
    <BodyApp className="App">
      <NasaData />
    </BodyApp>
  );
}

export default App;
