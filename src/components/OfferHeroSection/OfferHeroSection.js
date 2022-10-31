import React from "react";
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledOfferHeroSection,
  StyledTimeInfo,
  StyledImagesWrapper,
  StyledTextWrapper,
  StyledMoreInfoWrapper,
  StyledButtonWrapper,
  StyledBgWrapper,
} from "./StyledOfferHeroSection";

const OfferHeroSection = ({ dataOffer }) => {
  const images = withArtDirection(
    getImage(dataOffer.tloDesktopDlaOpisu?.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(dataOffer.tloMobileDlaOpisu?.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(dataOffer.tloTabletDlaOpisu?.localFile),
      },
    ]
  );
  return (
    <StyledOfferHeroSection>
      <StyledTimeInfo>
        <StyledBgWrapper>
          <GatsbyImage image={getImage(images)} alt="tło" />
        </StyledBgWrapper>
        <StyledImagesWrapper>
          <div>
            {dataOffer.pierwszeZdjeciePoLewo?.localFile && (
              <GatsbyImage
                image={getImage(dataOffer.pierwszeZdjeciePoLewo?.localFile)}
                alt={dataOffer.pierwszeZdjeciePoLewo?.altText}
              />
            )}
          </div>
          <div>
            {dataOffer.drugieZdjeciePoLewo?.localFile && (
              <GatsbyImage
                image={getImage(dataOffer.drugieZdjeciePoLewo?.localFile)}
                alt={dataOffer.drugieZdjeciePoLewo?.altText}
              />
            )}
          </div>
          <div>
            {dataOffer.trzecieZdjeciePoLewo?.localFile && (
              <GatsbyImage
                image={getImage(dataOffer.trzecieZdjeciePoLewo?.localFile)}
                alt={dataOffer.trzecieZdjeciePoLewo?.altText}
              />
            )}
          </div>
        </StyledImagesWrapper>
        <StyledTextWrapper>
          <StyledText
            as="h2"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredmargin="0 0 40px"
            hasdeclaredfontfamily="Nocturne Serif"
          >
            {dataOffer?.tytulPoPrawo && dataOffer?.tytulPoPrawo}
          </StyledText>
          <StyledMoreInfoWrapper>
            {dataOffer?.opis && parse(dataOffer?.opis)}
          </StyledMoreInfoWrapper>
          <StyledButtonWrapper>
            {dataOffer?.przyciskPodOpisem.url && (
              <Button
                whereGo={dataOffer.przyciskPodOpisem?.url}
                text={dataOffer.przyciskPodOpisem?.title}
                textColor="var(--white)"
                bgColor="var(--primary500)"
                hasDeclaredPadding="8px 36px"
                hasFontSize="21px"
                hasFontWeight="700"
                hoverBgColor="var(--primary900)"
                hasTarget={dataOffer.przyciskPodOpisem?.target}
                hasBorder="2px solid var(--primary500)"
              />
            )}
          </StyledButtonWrapper>
        </StyledTextWrapper>
      </StyledTimeInfo>
    </StyledOfferHeroSection>
  );
};

export default OfferHeroSection;
