import React from "react";

function Footer(props) {
  return (
    <footer>
      <p>{`Copyright: NASA | Photo Credit: ${props.theData.copyright}`}</p>
    </footer>
  );
}

export default Footer;
