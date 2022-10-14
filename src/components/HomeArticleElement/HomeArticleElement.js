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
          hasdeclaredpadding="20px 40px"
        >
          {articleData.tytul}
        </StyledText>
      </StyledTitleWrapper>
      <StyledTextWrapper>
        {parse(articleData.opis)}
        <Button
          whereGo={`/artykuly/${slug}`}
          text={articleData.tekstWPrzycisku}
          bgColor="var(--secondary500)"
          textColor="var(--primary900)"
          hasDeclaredPadding="10px 33px"
          hasFontSize="21px"
          hoverBgColor="var(--secondary700)"
        />
      </StyledTextWrapper>
    </StyledHomeArticleElement>
  );
};

export default HomeArticleElement;
