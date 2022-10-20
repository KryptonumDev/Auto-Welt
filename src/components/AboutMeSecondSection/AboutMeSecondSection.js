import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledAboutMeSecondSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTitleWrapper,
  StyledTopImage,
  StyledDescWrapper,
  StyledBottomImage,
  StyledGreetingSection,
  StyledGreetingPanel,
  StyledButtonsWrapper,
  StyledGreetingImage,
  StyledGreetingText,
} from "./StyledAboutMeSecondSection";

const AboutMeSecondSection = ({ secondData, images }) => {
  return (
    <>
      <StyledAboutMeSecondSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper>
            {secondData.tytul && parse(secondData.tytul)}
          </StyledTitleWrapper>
          <StyledDescWrapper>
            {secondData.opis && parse(secondData.opis)}
          </StyledDescWrapper>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTopImage>
            {secondData.pierwszeZdjeciePoPrawo.localFile && (
              <GatsbyImage
                image={getImage(secondData.pierwszeZdjeciePoPrawo.localFile)}
                alt={secondData.pierwszeZdjeciePoPrawo.altText}
              />
            )}
          </StyledTopImage>
          <StyledBottomImage>
            {secondData.drugieZdjeciePoPrawo.localFile && (
              <GatsbyImage
                image={getImage(secondData.drugieZdjeciePoPrawo.localFile)}
                alt={secondData.drugieZdjeciePoPrawo.altText}
              />
            )}
          </StyledBottomImage>
        </StyledRightWrapper>
      </StyledAboutMeSecondSection>
      <StyledGreetingSection>
        <StyledGreetingPanel>
          <StyledGreetingImage>
            <GatsbyImage image={images} objectFit="fill" />
          </StyledGreetingImage>
          <StyledGreetingText>
            {secondData.tekstWZielonymElemencie &&
              parse(secondData.tekstWZielonymElemencie)}
          </StyledGreetingText>
        </StyledGreetingPanel>
        <StyledButtonsWrapper>
          {secondData.lewyPrzycisk.title && (
            <Button
              text={secondData.lewyPrzycisk.title}
              whereGo={secondData.lewyPrzycisk.url}
              hasTarget={secondData.lewyPrzycisk.target}
              bgColor="var(--creamBg)"
              hasBorder="2px solid var(--primary500)"
              textColor="var(--primary500)"
              hasDeclaredPadding="10px 36px"
              hasFontWeight="500"
              hasFontSize="21px"
            />
          )}
          {secondData.prawyPrzycisk.title && (
            <Button
              text={secondData.prawyPrzycisk.title}
              whereGo={secondData.prawyPrzycisk.url}
              hasTarget={secondData.prawyPrzycisk.target}
              textColor="var(--white)"
              bgColor="var(--primary500)"
              hasBorder="2px solid var(--primary500)"
              hasDeclaredPadding="10px 36px"
              hasFontSize="21px"
              hasFontWeight="500"
              hoverBgColor="var(--primary900)"
            />
          )}
        </StyledButtonsWrapper>
      </StyledGreetingSection>
    </>
  );
};

export default AboutMeSecondSection;
