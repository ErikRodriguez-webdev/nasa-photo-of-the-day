import React from "react";
import Body from "./Body";

function Header(props) {
  console.log("in header", props);
  return (
    <header>
      <h1>NASA APOD</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Photos</a>
        <a href="#">Contact</a>
      </nav>
      <Body theData={props.theData} />
    </header>
  );
}

export default Header;
