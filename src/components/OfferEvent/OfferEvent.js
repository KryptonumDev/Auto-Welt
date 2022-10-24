import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledOfferEvent,
  StyledOfferEventImage,
  StyledOfferEventInfo,
} from "./StyledOfferEvent";
import { StyledText } from "../Text/StyledText";

const OfferEvent = ({ offerData, slug }) => {
  const convertedData = offerData.informacjeOgolne?.data
    .toLocaleString("pl", { dateStyle: "long" })
    .split(" ");
  return (
    <StyledOfferEvent>
      <StyledOfferEventImage>
        {offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
          .wiekszaMiniaturkaNaStroneOferty?.localFile && (
          <GatsbyImage
            image={getImage(
              offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
                .wiekszaMiniaturkaNaStroneOferty.localFile
            )}
            alt={
              offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
                .wiekszaMiniaturkaNaStroneOferty.altText
            }
          />
        )}
      </StyledOfferEventImage>
      <StyledOfferEventInfo>
        <StyledText
          hasdeclaredfontsize="26px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="#EDAC2A"
        >
          <span style={{ color: "#23423D", fontSize: "32px" }}>
            {convertedData[0]}{" "}
          </span>
          {convertedData[1]}
        </StyledText>
        <StyledText hasdeclaredfontsize="16px" hasdeclaredfontweight="400">
          {offerData.informacjeOgolne.miejsce &&
            offerData.informacjeOgolne.miejsce}
        </StyledText>
        <StyledText
          hasdeclaredfontcolor="#23423D"
          hasdeclaredfontsize="48px"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredmargin="16px 0 20px"
        >
          {offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
            .tytulZUwzglednieniemMiasta &&
            offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
              .tytulZUwzglednieniemMiasta}
        </StyledText>
        <Button
          text={
            offerData.stronaOfertaInformacjeDlaElementowWSekcjiEventy
              .tytulPrzyciskuPrzenoszacyDlaStronyWydarzenia
          }
          whereGo={`wystawy/${slug}`}
          hasDeclaredPadding="10px 33px"
          bgColor="var(--secondary500)"
          textColor="var(--primary900)"
          hasFontSize="21px"
          hoverBgColor="var(--secondary700)"
          hasBorder="2px solid transparent"
        />
      </StyledOfferEventInfo>
    </StyledOfferEvent>
  );
};

export default OfferEvent;
