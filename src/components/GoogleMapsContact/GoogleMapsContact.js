import React from "react";

import {
  StyledGoogleMapsContact,
  StyledGoogleMapsWrapper,
} from "./StyledGoogleMapsContact";
import { StyledText } from "../Text/StyledText";

const GoogleMapsContact = ({ mapData }) => {
  return (
    <StyledGoogleMapsContact>
      <StyledText
        as="h2"
        hasdeclaredfontsize="48px"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredlineheight="1.2em"
      >
        {mapData.tytulNadMapka ? mapData.tytulNadMapka : null}
      </StyledText>
      <StyledGoogleMapsWrapper>
        <iframe
          title='google map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4957.304738428757!2d19.12880645201214!3d51.592934314422706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a4682803c6339%3A0xb1c9dd3559c7244f!2sPlac%2011%20Listopada%2027%2C%2098-100%20%C5%81ask!5e0!3m2!1sru!2spl!4v1669391567703!5m2!1sru!2spl"
          style={{border: 'none'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
      </StyledGoogleMapsWrapper>
    </StyledGoogleMapsContact>
  );
};

export default GoogleMapsContact;
