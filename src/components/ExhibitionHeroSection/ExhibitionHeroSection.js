import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

import {
  StyledExhibitionHeroSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTag,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledDataWrapper,
  StyledDataImage
} from "./StyledExhibitionHeroSection";
import {
  StyledTagImage
} from "../ArticleHeroSection/StyledArticleHeroSection";
import { StyledText } from "../Text/StyledText";

const ExhibitionHeroSection = ({ heroData }) => {
  console.log(heroData)
  return (
    <StyledExhibitionHeroSection>
      <StyledLeftWrapper>
        <StyledTag>
          <StyledTagImage>
            <StaticImage
              src="../../images/wystawaBgActual.png"
              objectFit="fill"
            />
          </StyledTagImage>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="600"
            hasdeclaredfontcolor="#EDAC2A"
          >
            WYSTAWA tutaj trzeba warunek
          </StyledText>
        </StyledTag>
        <StyledTextWrapper>
          <StyledText
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredlineheight="1.2em"
            as="h1"
          >
            {heroData?.wystawa.informacjeOgolne?.tytulPodZdjeciem}
          </StyledText>
          {heroData.wystawa.wydarzenieSzablon.sekcjaPowitalna.krotkiOpisPodTytulem && parse(heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna?.krotkiOpisPodTytulem)}
        </StyledTextWrapper>
        <StyledDataWrapper>
          <StyledDataImage>
            <StaticImage
              src="../../images/wydarzenieData.png"
            />
          </StyledDataImage>
          <StyledText
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredlineheight="1.2em"
            hasdeclaredtextalign="center"
          >
            {heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna?.rozwinietaData}
          </StyledText>
        </StyledDataWrapper>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledImageWrapper>
          <GatsbyImage
            image={getImage(heroData.wystawa.wydarzenieSzablon?.sekcjaPowitalna?.duzeZdjeciePoPrawo.localFile)}
            alt={heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna?.duzeZdjeciePoPrawo.altText}
            objectFit="cover"
          />
        </StyledImageWrapper>
      </StyledRightWrapper>
    </StyledExhibitionHeroSection>
  );
};

export default ExhibitionHeroSection;
