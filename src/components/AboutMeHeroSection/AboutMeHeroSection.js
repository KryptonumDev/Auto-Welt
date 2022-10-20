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
            {heroData.plasterNadPierwszymZdjeciem.localFile && (
              <GatsbyImage
                image={getImage(heroData.plasterNadPierwszymZdjeciem.localFile)}
                alt={heroData.plasterNadPierwszymZdjeciem.altText}
              />
            )}
          </StyledTopPlaster>
          <StyledTopImage>
            {heroData.pierwszeZdjecie.localFile && (
              <GatsbyImage
                image={getImage(heroData.pierwszeZdjecie.localFile)}
                alt={heroData.pierwszeZdjecie.altText}
              />
            )}
          </StyledTopImage>
        </StyledTopImages>
        <StyledBottomImages>
          <StyledBottomPlaster>
            {heroData.plasterNadDrugimZdjeciem.localFile && (
              <GatsbyImage
                image={getImage(heroData.plasterNadDrugimZdjeciem.localFile)}
                alt={heroData.plasterNadDrugimZdjeciem.altText}
              />
            )}
          </StyledBottomPlaster>
          <StyledBottomImage>
            {heroData.drugieZdjecie.localFile && (
              <GatsbyImage
                image={getImage(heroData.drugieZdjecie.localFile)}
                alt={heroData.drugieZdjecie.altText}
              />
            )}
          </StyledBottomImage>
        </StyledBottomImages>
      </StyledImagesWrapper>
      <StyledTextWrapper>
        <StyledTitleWrapper>
          {heroData.tytul && parse(heroData.tytul)}
        </StyledTitleWrapper>
        <StyledSubTitleWrapper>
          {heroData.zielonyOpisPodTytulem &&
            parse(heroData.zielonyOpisPodTytulem)}
        </StyledSubTitleWrapper>
        <StyledDescWrapper>
          {heroData.opis && parse(heroData.opis)}
        </StyledDescWrapper>
        <StyledButtonWrapper>
          {heroData.przyciskPodOpisem.title && (
            <Button
              text={heroData.przyciskPodOpisem.title}
              whereGo={heroData.przyciskPodOpisem.url}
              hasTarget={heroData.przyciskPodOpisem.target}
              hasDeclaredPadding="10px 33px"
              bgColor="var(--secondary500)"
              textColor="var(--primary900)"
              hasFontSize="21px"
              hoverBgColor="var(--secondary700)"
            />
          )}
        </StyledButtonWrapper>
      </StyledTextWrapper>
    </StyledAboutMeHeroSection>
  );
};

export default AboutMeHeroSection;
