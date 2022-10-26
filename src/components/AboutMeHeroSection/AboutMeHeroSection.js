import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledAboutMeHeroSection,
  StyledImagesWrapper,
  StyledTextWrapper,
  StyledTitleWrapper,
  StyledSubTitleWrapper,
  StyledDescWrapper,
  StyledButtonWrapper,
  StyledTopImages,
  StyledBottomImages,
  StyledTopPlaster,
  StyledTopImage,
  StyledBottomPlaster,
  StyledBottomImage,
} from "./StyledAboutMeHeroSection";

const AboutMeHeroSection = ({ heroData }) => {
  return (
    <StyledAboutMeHeroSection>
      <StyledImagesWrapper>
        <StyledTopImages>
          <StyledTopPlaster>
            <GatsbyImage
              image={getImage(heroData.plasterNadPierwszymZdjeciem?.localFile)}
              alt={heroData.plasterNadPierwszymZdjeciem?.altText}
            />
          </StyledTopPlaster>
          <StyledTopImage>
            <GatsbyImage
              image={getImage(heroData.pierwszeZdjecie?.localFile)}
              alt={heroData.pierwszeZdjecie?.altText}
            />
          </StyledTopImage>
        </StyledTopImages>
        <StyledBottomImages>
          <StyledBottomPlaster>
            <GatsbyImage
              image={getImage(heroData.plasterNadDrugimZdjeciem?.localFile)}
              alt={heroData.plasterNadDrugimZdjeciem?.altText}
            />
          </StyledBottomPlaster>
          <StyledBottomImage>
            <GatsbyImage
              image={getImage(heroData.drugieZdjecie?.localFile)}
              alt={heroData.drugieZdjecie?.altText}
            />
          </StyledBottomImage>
        </StyledBottomImages>
      </StyledImagesWrapper>
      <StyledTextWrapper>
        <StyledTitleWrapper>
          {heroData?.tytul && parse(heroData.tytul)}
        </StyledTitleWrapper>
        <StyledSubTitleWrapper>
          {heroData?.zielonyOpisPodTytulem &&
            parse(heroData.zielonyOpisPodTytulem)}
        </StyledSubTitleWrapper>
        <StyledDescWrapper>
          {heroData.opis && parse(heroData.opis)}
        </StyledDescWrapper>
        <StyledButtonWrapper>
          {heroData.przyciskPodOpisem?.title && (
            <Button
              text={heroData.przyciskPodOpisem?.title}
              whereGo={heroData.przyciskPodOpisem?.url}
              hasTarget={heroData.przyciskPodOpisem?.target}
              hasDeclaredPadding="8px 33px"
              bgColor="var(--secondary500)"
              textColor="var(--primary900)"
              hasFontSize="21px"
              hoverBgColor="var(--secondary700)"
              hasBorder="2px solid transparent"
            />
          )}
        </StyledButtonWrapper>
      </StyledTextWrapper>
    </StyledAboutMeHeroSection>
  );
};

export default AboutMeHeroSection;
