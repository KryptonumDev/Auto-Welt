import React from "react";

import {
  GatsbyImage,
  getImage,
  withArtDirection,
  StaticImage,
} from "gatsby-plugin-image";

import {
  StyledScheduleHeroSection,
  StyledHeroImage,
  StyledTitleWrapper,
  StyledTitleImage,
} from "./StyledScheduleHeroSection";
import { StyledText } from "../Text/StyledText";

const ScheduleHeroSection = ({ heroData }) => {
  const images = withArtDirection(
    getImage(heroData.powitalneZdjecieDesktop.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(heroData.powitalneZdjecieMobile.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(heroData.powitalneZdjecieTablet.localFile),
      },
    ]
  );
  return (
    <StyledScheduleHeroSection>
      <StyledHeroImage>
        <GatsbyImage
          image={images}
          alt={heroData.powitalneZdjecieDesktop?.altText}
          title={heroData.powitalneZdjecieDesktop?.title}
          objectFit="fill"
        />
      </StyledHeroImage>
      <StyledTitleWrapper>
        <StyledTitleImage>
          <StaticImage src="../../images/scheduleBgTitle.png" />
        </StyledTitleImage>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="48px"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="#23423D"
          as="h1"
        >
          {heroData.tekstNaTlePowitalnegoZdjecia}
        </StyledText>
      </StyledTitleWrapper>
    </StyledScheduleHeroSection>
  );
};

export default ScheduleHeroSection;
