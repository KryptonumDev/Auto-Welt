import React from "react";
import Button from "../Button/Button";
import parse from "html-react-parser";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import {
  StyledHomeArticleElement,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledTextWrapper,
  StyledTitleBgWrapper,
  ButtonWrapper,
  StylexTextTitleWrapper
} from "./StyledHomeArticleElement";

const HomeArticleElement = ({ articleData, slug, title }) => {
  return (
    <StyledHomeArticleElement to={`/artykuly/${slug}`}>
      <div>
        <StyledImageWrapper>
          {articleData.miniaturka.localFile ? (
            <GatsbyImage
              image={getImage(articleData.miniaturka?.localFile)}
              alt={articleData.miniaturka?.altText || " "}
              title={articleData.miniaturka?.title}
            />
          ) : null}
        </StyledImageWrapper>
        <StyledTitleWrapper>
          <StyledTitleBgWrapper>
            <StaticImage src="../../images/articleMinBackground.png" alt="tło" />
          </StyledTitleBgWrapper>
          <StylexTextTitleWrapper>
            {title ? parse(title) : null}
          </StylexTextTitleWrapper>
        </StyledTitleWrapper>
        <StyledTextWrapper>
          {articleData.opis ? parse(articleData.opis) : null}
        </StyledTextWrapper>
      </div>
      <ButtonWrapper>
        {articleData.tekstWPrzycisku ? (
          <Button
            text={articleData.tekstWPrzycisku}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasDeclaredPadding="8px 33px"
            hasFontSize="21px"
            hoverBgColor="var(--secondary700)"
            hasBorder="2px solid transparent"
            hasNotTabIndex
          />
        ) : null}
      </ButtonWrapper>
    </StyledHomeArticleElement >
  );
};

export default HomeArticleElement;
