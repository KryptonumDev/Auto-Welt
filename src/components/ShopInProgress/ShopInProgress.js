import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledShopInProgress,
  StyledImagesWrapper,
  StyledIconWrapper,
  StyledHeroImage,
  StyledCarImage,
  StyledShopInfoWrapper,
  StyledTitleWrapper,
  StyledSubTitleWrapper,
  StyledDescription,
  StyledButtonsWrapper,
} from "./StyledShopInProgress";

const ShopInProgress = ({ shopData }) => {
  return (
    <StyledShopInProgress>
      <StyledImagesWrapper>
        <StyledIconWrapper>
          <GatsbyImage
            image={getImage(shopData.zdjeciePlastra.localFile)}
            alt={shopData.zdjeciePlastra.altText || " "}
            title={shopData.zdjeciePlastra.title}
          />
        </StyledIconWrapper>
        <StyledHeroImage>
          <GatsbyImage
            image={getImage(shopData.glowneZdjecie.localFile)}
            alt={shopData.glowneZdjecie.altText || " "}
            title={shopData.glowneZdjecie.title}
          />
        </StyledHeroImage>
        <StyledCarImage>
          <GatsbyImage
            image={getImage(
              shopData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedzie.localFile
            )}
            alt={shopData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedzie.altText || " "}
            title={shopData.zdjecieSamochoduPrzyczepioneDoPrawejKrawedzie.title}
          />
        </StyledCarImage>
      </StyledImagesWrapper>
      <StyledShopInfoWrapper>
        <StyledTitleWrapper>
          {parse(shopData.tytulPodZdjeciami)}
        </StyledTitleWrapper>
        <StyledSubTitleWrapper>
          {parse(shopData.podTytul)}
        </StyledSubTitleWrapper>
        <StyledDescription>{parse(shopData.opisPodTytulami)}</StyledDescription>
        <StyledButtonsWrapper>
          <Button
            whereGo={shopData.lewyPrzycisk.url}
            text={shopData.lewyPrzycisk.title}
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasFontSize="21px"
            bgColor="var(--creamBg)"
            hasTarget={shopData.lewyPrzycisk.target}
            hasDeclaredPadding="8px 33px"
            hoverBgColor="#F6E2BA"
            ariaLabel="link"
          />
          <Button
            whereGo={shopData.prawyPrzycisk.url}
            text={shopData.prawyPrzycisk.title}
            textColor="var(--white)"
            hasBorder="2px solid var(--primary500)"
            bgColor="var(--primary500)"
            hasFontSize="21px"
            hasTarget={shopData.prawyPrzycisk.target}
            hasDeclaredPadding="8px 33px"
            hoverBgColor="var(--primary900)"
            ariaLabel="link"
          />
        </StyledButtonsWrapper>
      </StyledShopInfoWrapper>
    </StyledShopInProgress>
  );
};

export default ShopInProgress;
