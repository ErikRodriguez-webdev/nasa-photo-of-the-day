import React from "react";
import Content from "./Content";
import styled from "styled-components";

const NasaHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
`;

const NasaH1 = styled.h1`
  color: white;
`;

const NasaNav = styled.nav`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
`;

const NasaAnchors = styled.a`
  text-decoration: none;
  color: white;
`;

function Header(props) {
  return (
    <>
      <NasaHeader>
        <NasaH1>NASA APOD</NasaH1>
        <NasaNav>
          <NasaAnchors href="#">Home</NasaAnchors>
          <NasaAnchors href="#">Photos</NasaAnchors>
          <NasaAnchors href="#">Contact</NasaAnchors>
        </NasaNav>
      </NasaHeader>
      <Content theData={props.theData} />
    </>
  );
}

export default Header;
