import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import {
  StyledArticleHeroSection,
  StyledImage,
  StyledTag,
  StyledTagImage,
  StyledTextWrapper,
  StyledTextImage,
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
              ?.duzeZdjecie?.altText
          }
        />
      </StyledImage>
      <StyledTag>
        <StyledTagImage>
          <StaticImage src="../../images/tagImage.png" objectFit="fill" />
        </StyledTagImage>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="600"
          hasdeclaredfontcolor="#EDAC2A"
        >
          {heroData?.terms?.nodes[0]?.name}
        </StyledText>
      </StyledTag>
      <StyledTextWrapper>
        <StyledTextImage>
          <StaticImage src="../../images/artykulTitleImage.png" />
        </StyledTextImage>
        <StyledText
          as="h1"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="48px"
          hasdeclaredfontcolor="#23423D"
          hasdeclaredlineheight="1.2em"
          hasdeclaredtextalign="center"
        >
          {heroData.artykul.informacjeDoMiniaturki?.tytul}
        </StyledText>
      </StyledTextWrapper>
    </StyledArticleHeroSection>
  );
};

export default ArticleHeroSection;
