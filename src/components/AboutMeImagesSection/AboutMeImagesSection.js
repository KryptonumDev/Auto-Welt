import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

import {
    StyledAboutMeImagesSection,
    StyledImagesWrapper,
    StyledImage,
    StyledRightImage,
    StyledAparatWrapper,
    StyledIconWrapper,
    StyledTextWrapper
} from "./StyledAboutMeImagesSection"

const AboutMeImagesSection = ({ imagesData }) => {
  return (
    <StyledAboutMeImagesSection>
        <StyledImagesWrapper>
            {imagesData.trzyZdjecia.map((image, index) => (
                <StyledImage key={index}>
                    <GatsbyImage 
                        image={getImage(image.localFile)}
                        alt={image.altText}
                    />
                </StyledImage>
            ))}
            <StyledRightImage>
                <GatsbyImage 
                    image={getImage(imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony.localFile)}
                    alt={imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony.altText}
                />
            </StyledRightImage>
        </StyledImagesWrapper>
        <StyledAparatWrapper>
            <StyledIconWrapper>
                <GatsbyImage 
                    image={getImage(imagesData.ikonkaAparatu.localFile)}
                    alt={imagesData.ikonkaAparatu.altText}
                />
            </StyledIconWrapper>
            <StyledTextWrapper>
                {parse(imagesData.tekstPrzyIkonceAparatu)}
            </StyledTextWrapper>
        </StyledAparatWrapper>
    </StyledAboutMeImagesSection>
  )
}

export default AboutMeImagesSection