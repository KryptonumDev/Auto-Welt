import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledCheckOutWithOffer,
  StyledImageWrapper,
  StyledCheckOutButtonsWrapper,
} from "./StyledCheckOutWithOffer";

const CheckOutWithOffer = ({ dataOffer }) => {
  return (
    <StyledCheckOutWithOffer>
      <StyledText
        as="h2"
        hasdeclaredfontsize="48px"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {dataOffer.tytul && dataOffer.tytul}
      </StyledText>
      <StyledImageWrapper>
        {dataOffer.zdjecieKsiazki.localFile && (
          <GatsbyImage
            image={getImage(dataOffer.zdjecieKsiazki.localFile)}
            alt={dataOffer.zdjecieKsiazki.altText}
          />
        )}
      </StyledImageWrapper>
      <StyledCheckOutButtonsWrapper>
        {dataOffer.przyciskPoLewo.title && (
          <Button
            whereGo={dataOffer.przyciskPoLewo.url}
            text={dataOffer.przyciskPoLewo.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="10px 36px"
            hasFontSize="21px"
            hasFontWeight="500"
            hoverBgColor="var(--primary900)"
            hasTarget={dataOffer.przyciskPoLewo.target}
            hasBorder="2px solid var(--primary500)"
          />
        )}
        {dataOffer.tekstDoPobraniaTekstu && (
          <a href="#">{dataOffer.tekstDoPobraniaTekstu}</a>
        )}
      </StyledCheckOutButtonsWrapper>
    </StyledCheckOutWithOffer>
  );
};

export default CheckOutWithOffer;
