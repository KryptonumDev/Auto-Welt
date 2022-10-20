import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledAboutMeImagesSection,
  StyledImagesWrapper,
  StyledImage,
  StyledRightImage,
  StyledAparatWrapper,
  StyledIconWrapper,
  StyledTextWrapper,
} from "./StyledAboutMeImagesSection";

const AboutMeImagesSection = ({ imagesData }) => {
  return (
    <StyledAboutMeImagesSection>
      <StyledImagesWrapper>
        {imagesData.trzyZdjecia && (
          <>
            {imagesData.trzyZdjecia.map((image, index) => (
              <StyledImage key={index}>
                <GatsbyImage
                  image={getImage(image.localFile)}
                  alt={image.altText}
                />
              </StyledImage>
            ))}
          </>
        )}
        <StyledRightImage>
          {imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
            .localFile && (
            <GatsbyImage
              image={getImage(
                imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
                  .localFile
              )}
              alt={
                imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
                  .altText
              }
            />
          )}
        </StyledRightImage>
      </StyledImagesWrapper>
      <StyledAparatWrapper>
        <StyledIconWrapper>
          <StaticImage src="../../images/Aparat.png" />
        </StyledIconWrapper>
        <StyledTextWrapper>
          {imagesData.tekstPrzyIkonceAparatu &&
            parse(imagesData.tekstPrzyIkonceAparatu)}
        </StyledTextWrapper>
      </StyledAparatWrapper>
    </StyledAboutMeImagesSection>
  );
};

export default AboutMeImagesSection;
