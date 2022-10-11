import React from "react";
import Button from "../Button/Button";
import parse from "html-react-parser"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import {
  StyledHomeArticleElement,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledTextWrapper,
  StyledTitleBgWrapper
} from "./StyledHomeArticleElement";
import { StyledText } from "../Text/StyledText";

const HomeArticleElement = ({ articleData, slug }) => {
  return (
    <StyledHomeArticleElement>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(articleData.miniaturka.localFile)}
          alt={articleData.miniaturka.altText}
        />
      </StyledImageWrapper>
      <StyledTitleWrapper>
        <StyledTitleBgWrapper>
          <StaticImage
            src="../../images/articleMinBackground.png"
          />
        </StyledTitleBgWrapper>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="600"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredpadding="20px 46px"
        >
          {articleData.tytul}
        </StyledText>
      </StyledTitleWrapper>
      <StyledTextWrapper>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredpadding="8px 46px 26px 46px"
        >
          {parse(articleData.opis)}
        </StyledText>
        <Button
          whereGo={`/artykuly/${slug}`}
          text={articleData.tekstWPrzycisku}
          bgColor="var(--secondary500)"
          hasBorder="2px solid var(--secondary500)"
          hasHeight="44px"
          textColor="var(--primary900)"
          hasDeclaredPadding="10px 33px"
          hasFontSize="21px"

        />
      </StyledTextWrapper>
    </StyledHomeArticleElement>
  );
};

export default HomeArticleElement;
