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
      <div>
        <StyledImagesWrapper>
          {imagesData?.trzyZdjecia && (
            <>
              {imagesData?.trzyZdjecia.map((image, index) => (
                <StyledImage key={index}>
                  <GatsbyImage
                    image={getImage(image?.localFile)}
                    alt={image?.altText || " "}
                    title={image?.title}
                  />
                </StyledImage>
              ))}
            </>
          )}
          <StyledRightImage>
            {imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
              ?.localFile && (
              <GatsbyImage
                image={getImage(
                  imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
                    ?.localFile
                )}
                alt={
                  imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
                    ?.altText || " "
                }
                title={
                  imagesData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony
                    ?.title
                }
              />
            )}
          </StyledRightImage>
        </StyledImagesWrapper>
        <StyledAparatWrapper>
          <StyledIconWrapper href={imagesData.linkDoStronyFotografa} target="_blank">
            <StaticImage src="../../images/Aparat.png" />
          </StyledIconWrapper>
          <StyledTextWrapper href={imagesData.linkDoStronyFotografa} target="_blank">
            {imagesData?.tekstPrzyIkonceAparatu &&
              parse(imagesData?.tekstPrzyIkonceAparatu)}
          </StyledTextWrapper>
        </StyledAparatWrapper>
      </div>
    </StyledAboutMeImagesSection>
  );
};

export default AboutMeImagesSection;
