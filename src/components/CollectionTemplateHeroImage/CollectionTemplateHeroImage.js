import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledCollectionTemplateHeroImage,
  StyledHeroImage,
  StyledTitleWrapper,
  StyledTitleImageWraper,
  StyledGatsbyImage,
} from "./StyledCollectionTemplateHeroImage";

const CollectionTemplateHeroImage = ({ heroData }) => {
  return (
    <StyledCollectionTemplateHeroImage>
      <StyledHeroImage>
        {heroData?.zdjecieGlowne && (
          <StyledGatsbyImage
            image={getImage(heroData.zdjecieGlowne.localFile)}
            alt={heroData.zdjecieGlowne.altText}
          />
        )}
      </StyledHeroImage>
      <StyledTitleWrapper>
        <StyledTitleImageWraper>
          <GatsbyImage
            image={getImage(
              heroData?.zdjecieDlaZielonegoElementuPodGlownymZdjeciem.localFile
            )}
            alt={
              heroData?.zdjecieDlaZielonegoElementuPodGlownymZdjeciem.altText
            }
          />
        </StyledTitleImageWraper>
        <div>{parse(heroData?.kolorowyTytulNaZieloneTlo)}</div>
      </StyledTitleWrapper>
      {heroData?.gdzieMaPrzenosicLinkPodZdjeciemGlownym && (
        <Button
          whereGo={heroData?.gdzieMaPrzenosicLinkPodZdjeciemGlownym.url}
          text={heroData?.gdzieMaPrzenosicLinkPodZdjeciemGlownym.title}
          bgColor="var(--creamBg)"
          hasBorder="2px solid var(--primary500)"
          textColor="var(--primary500)"
          hasDeclaredPadding="10px 36px"
          hasFontWeight="500"
          hasFontSize="21px"
          hasTarget={heroData?.gdzieMaPrzenosicLinkPodZdjeciemGlownym.target}
        />
      )}
    </StyledCollectionTemplateHeroImage>
  );
};

export default CollectionTemplateHeroImage;
