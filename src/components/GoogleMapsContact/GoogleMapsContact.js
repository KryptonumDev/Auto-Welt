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
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        Tu nas znajdziesz:
      </StyledText>
      <StyledGoogleMapsWrapper>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q='Auto-welt', center${mapData.langtitude}, ${mapData.longtitude}&zoom=5`}
          allowFullScreen
        />
      </StyledGoogleMapsWrapper>
    </StyledGoogleMapsContact>
  );
};

export default GoogleMapsContact
