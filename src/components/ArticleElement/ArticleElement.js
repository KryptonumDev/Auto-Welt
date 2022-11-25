import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import {
  StyledArticleElement,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledDate,
  StyledLinkWrapper,
  StyledTitle,
  StyledBgWrapper,
} from "./StyledArticleElement";
import { StyledText } from "../Text/StyledText";

const ArticleElement = ({ articleData }) => {
  const convertedData = new Date(articleData.date)
    .toLocaleString("pl", { dateStyle: "long" })
    .split(" ");
  return (
    <StyledArticleElement to={articleData.slug} aria-label="zobacz więcej">
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(
            articleData.artykul.informacjeDoMiniaturki?.miniaturka?.localFile
          )}
          alt={articleData.artykul.informacjeDoMiniaturki?.miniaturka?.altText || " "}
          title={articleData.artykul.informacjeDoMiniaturki?.miniaturka?.title}
        />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledBgWrapper>
          <StaticImage
            src="../../images/tloDlaMiniaturkiArtykulu.png"
            objectFit="fill"
            alt="tło"
          />
        </StyledBgWrapper>
        <StyledDate>
          <StyledText
            hasdeclaredfontsize="14px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(0, 0, 0, 0.8)"
            hasdeclaredfontweight="500"
          >
            {convertedData[0]} {convertedData[1]} {convertedData[2]}
          </StyledText>
        </StyledDate>
        <StyledTitle>
          <StyledText
            hasdeclaredfontsize="24px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredfontweight="700"
          >
            {articleData.title}
          </StyledText>
        </StyledTitle>
        <StyledLinkWrapper>
          <StyledText
            hasdeclaredfontsize="16px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredfontweight="500"
            hasdeclaredtextdecoration="underline"
          >
            Zobacz więcej
          </StyledText>
        </StyledLinkWrapper>
      </StyledTextWrapper>
    </StyledArticleElement>
  );
};

export default ArticleElement;
