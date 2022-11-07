import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

import {
  StyledGoogleMapsContact,
  StyledGoogleMapsWrapper,
} from "./StyledGoogleMapsContact";
import { StyledText } from "../Text/StyledText";

const GoogleMapsContact = ({ mapData }) => {
  const images = withArtDirection(
    getImage(mapData.zdjecieMapyDesktop.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(mapData.zdjecieMapyMobile.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(mapData.zdjecieMapyTablet.localFile),
      },
    ]
  );
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
        {mapData.tytulNadMapka && mapData.tytulNadMapka}
      </StyledText>
      {mapData.linkDoStronyZAdresemFirmy && (
        <a href={mapData.linkDoStronyZAdresemFirmy} target="_blank" rel="nofollow noreferrer">
          <StyledGoogleMapsWrapper>
            <GatsbyImage
              image={images}
              alt={mapData.zdjecieMapyDesktop?.altText}
              title={mapData.zdjecieMapyDesktop?.title}
            />
          </StyledGoogleMapsWrapper>
        </a>
      )}
    </StyledGoogleMapsContact>
  );
};

export default GoogleMapsContact;
