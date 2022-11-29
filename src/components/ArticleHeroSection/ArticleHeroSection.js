import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledArticleHeroSection,
  StyledImage,
  StyledTag,
  StyledTagImage,
  StyledTextWrapper,
  StyledTextImage,
  StyledTitleWrapper
} from "./StyledArticleHeroSection";
import { StyledText } from "../Text/StyledText";

const ArticleHeroSection = ({ heroData }) => {
  return (
    <StyledArticleHeroSection>
      <StyledImage>
        <GatsbyImage
          image={getImage(
            heroData.artykul.dedykowanaStronaArtykulu.pierwszaSekcja
              ?.duzeZdjecie?.localFile
          )}
          alt={
            heroData.artykul.dedykowanaStronaArtykulu.pierwszaSekcja
              ?.duzeZdjecie?.altText || " "
          }
          title={
            heroData.artykul.dedykowanaStronaArtykulu.pierwszaSekcja
              ?.duzeZdjecie?.title
          }
        />
      </StyledImage>
      <StyledTag>
        <StyledTagImage>
          <StaticImage src="../../images/tagImage.png" objectFit="fill" alt="tag" />
        </StyledTagImage>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="700"
          hasdeclaredfontcolor="#EDAC2A"
        >
          {heroData?.terms?.nodes[0]?.name}
        </StyledText>
      </StyledTag>
      <StyledTextWrapper>
        <StyledTextImage>
          <StaticImage src="../../images/artykulTitleImage.png" alt="tło" />
        </StyledTextImage>
        <StyledTitleWrapper>
          {parse(heroData.title)}
        </StyledTitleWrapper>
      </StyledTextWrapper>
    </StyledArticleHeroSection>
  );
};

export default ArticleHeroSection;
