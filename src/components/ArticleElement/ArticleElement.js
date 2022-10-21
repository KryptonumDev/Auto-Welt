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
import { StyledLink } from "../Link/StyledLink";

const ArticleElement = ({ articleData }) => {
  return (
    <StyledArticleElement>
      <StyledImageWrapper>
        {/* <GatsbyImage
          image={getImage()}
          alt={}
          objectFit="cover"
        /> */}
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledBgWrapper>
          <StaticImage
            src="../../images/tloDlaMiniaturkiArtykulu.png"
            objectFit="fill"
          />
        </StyledBgWrapper>
        <StyledDate>
          <StyledText
            hasdeclaredfontsize="14px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(0, 0, 0, 0.8)"
            hasdeclaredfontweight="400"
          >
            tutaj data
          </StyledText>
        </StyledDate>
        <StyledTitle>
          <StyledText
            hasdeclaredfontsize="24px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredfontweight="500"
          >
            tutaj tytuł
          </StyledText>
        </StyledTitle>
        <StyledLinkWrapper>
          <StyledLink
            hasdeclaredfontsize="16px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredfontweight="500"
            hasdeclaredtextdecoration="underline"
          >
            tutaj link
          </StyledLink>
        </StyledLinkWrapper>
      </StyledTextWrapper>
    </StyledArticleElement>
  );
};

export default ArticleElement;
