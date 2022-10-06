import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from 'html-react-parser';

import Button from "../Button/Button";

import { 
    StyledCollectionTemplateHeroImage,
    StyledHeroImage,
    StyledTitleWrapper
} from "./StyledCollectionTemplateHeroImage"

const CollectionTemplateHeroImage = ({ heroData }) => {
  const heroImage = getImage(heroData.zdjecieGlowne.localFile)

  return (
    <StyledCollectionTemplateHeroImage>
        <StyledHeroImage>
            <GatsbyImage image={heroImage} alt={heroData.zdjecieGlowne.altText} objectFit="fill"/>
        </StyledHeroImage>
        <StyledTitleWrapper>
            {parse(heroData.trescPrzyciskuPodZdjeciemGlownym)}
        </StyledTitleWrapper>
        <Button
            whereGo={heroData.gdzieMaPrzenosicLinkPodZdjeciemGlownym.url}
            text={heroData.gdzieMaPrzenosicLinkPodZdjeciemGlownym.title}
            bgColor="var(--creamBg)"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasDeclaredPadding="10px 36px"
            hasFontWeight="500"
            hasFontSize="21px"
            hasTarget={heroData.gdzieMaPrzenosicLinkPodZdjeciemGlownym.target}
        />
    </StyledCollectionTemplateHeroImage>
  )
}

export default CollectionTemplateHeroImage