import React from "react";
import Button from "../Button/Button";
import {
  StyledHomeArticleElement,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledTextWrapper,
} from "./StyledHomeArticleElement";
import { StyledText } from "../Text/StyledText";

const HomeArticleElement = ({ index }) => {
  return (
    <StyledHomeArticleElement>
      <StyledImageWrapper></StyledImageWrapper>
      <StyledTitleWrapper>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="600"
          hasdeclaredlineheight="21px"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredpadding="20px 46px"
        >
          SAMOCHODY PRL JAKO DOBRO LUKSUSOWE
        </StyledText>
      </StyledTitleWrapper>
      <StyledTextWrapper>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="22px"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredpadding="8px 46px 26px 46px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. turpis
          molestie, dictum est a, mattis tellus. Sed dignissim, Etiam nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </StyledText>
        <Button
          whereGo="/kontakt"
          text={index === 0 ? "CZYTAJ WIĘCEJ" : "DOWIEDZ SIĘ WIĘCEJ"}
          bgColor="var(--secondary500)"
          hasBorder="2px solid var(--secondary500)"
          hasHeight="44px"
          textColor="var(--primary900)"
          hasMaxWidth={index === 0 ? "170px" : "210px"}
        />
      </StyledTextWrapper>
    </StyledHomeArticleElement>
  );
};

export default HomeArticleElement;
