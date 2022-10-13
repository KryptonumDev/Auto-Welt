import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

import Button from '../Button/Button';

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
    StyledGreetingText
} from "./StyledAboutMeSecondSection"

const AboutMeSecondSection = ({ secondData }) => {
  return (
    <>
        <StyledAboutMeSecondSection>
            <StyledLeftWrapper>
                <StyledTitleWrapper>
                    {parse(secondData.tytul)}
                </StyledTitleWrapper>
                <StyledDescWrapper>
                    {parse(secondData.opis)}
                </StyledDescWrapper>
            </StyledLeftWrapper>
            <StyledRightWrapper>
                <StyledTopImage>
                    <GatsbyImage 
                        image={getImage(secondData.pierwszeZdjeciePoPrawo.localFile)}
                        alt={secondData.pierwszeZdjeciePoPrawo.altText}
                    />
                </StyledTopImage>
                <StyledBottomImage>
                    <GatsbyImage 
                        image={getImage(secondData.drugieZdjeciePoPrawo.localFile)}
                        alt={secondData.drugieZdjeciePoPrawo.altText}
                    />
                </StyledBottomImage>
            </StyledRightWrapper>
        </StyledAboutMeSecondSection>
        <StyledGreetingSection>
            <StyledGreetingPanel>
                <StyledGreetingImage>
                    <GatsbyImage 
                        image={getImage(secondData.zdjecieDlaZielonegoElementuPodOpisem.localFile)}
                        alt={secondData.zdjecieDlaZielonegoElementuPodOpisem.altText}
                    />
                    <StyledGreetingText>
                        {parse(secondData.tekstWZielonymElemencie)}
                    </StyledGreetingText>
                </StyledGreetingImage>
            </StyledGreetingPanel>
            <StyledButtonsWrapper>
                <Button 
                    text={secondData.lewyPrzycisk.title}
                    whereGo={secondData.lewyPrzycisk.url}
                    hasTarget={secondData.lewyPrzycisk.target}
                />
                <Button 
                    text={secondData.prawyPrzycisk.title}
                    whereGo={secondData.prawyPrzycisk.url}
                    hasTarget={secondData.prawyPrzycisk.target}
                />
            </StyledButtonsWrapper>
        </StyledGreetingSection>
    </>
  )
}

export default AboutMeSecondSection