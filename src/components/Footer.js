import React from "react";
import styled from "styled-components";

const NasaFooter = styled.footer`
  background: grey;
  margin-top: 3%;
`;

function Footer(props) {
  return (
    <NasaFooter>
      <p>{`Copyright: NASA | Photo Credit: ${props.theData.copyright}`}</p>
    </NasaFooter>
  );
}

export default Footer;
