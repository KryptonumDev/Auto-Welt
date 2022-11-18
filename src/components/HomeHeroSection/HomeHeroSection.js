/** @format */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledHomeHeroSection,
  StyledImagesLeftWrapper,
  StyledHeroImageWrapper,
  StyledImagesRightWrapper,
  StyledHeroImage,
  StyledButtonsWrapper,
  StyledImageWrapper,
} from "./StyledHomeHeroSection";

const HomeHeroSection = () => {
  const { wpPage } = useStaticQuery(graphql`
    query heroSectionQuery {
      wpPage(id: { eq: "cG9zdDoxNQ==" }) {
        homepage {
          duzeZdjecieSrodkowe {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          gdzieMaPrzeniescLinkLewy {
            title
            url
            target
          }
          gdzieMaPrzeniescLinkPrawy {
            title
            url
            target
          }
          maleZdjecia {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const heroImage = getImage(wpPage.homepage.duzeZdjecieSrodkowe.localFile);

  return (
    <StyledHomeHeroSection>
      <StyledImagesLeftWrapper>
        {wpPage.homepage.maleZdjecia?.map((image, index) => {
          if (index < 3) {
            return (
              <StyledImageWrapper key={image.altText + `${index}`}>
                <GatsbyImage
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  alt={image.altText || " "}
                />
              </StyledImageWrapper>
            )
          }
          return null
        })}
      </StyledImagesLeftWrapper>
      <StyledHeroImageWrapper>
        <StyledHeroImage>
          <GatsbyImage
            image={heroImage}
            alt={wpPage.homepage?.duzeZdjecieSrodkowe?.altText || " "}
            title={wpPage.homepage?.duzeZdjecieSrodkowe?.title}
          />
        </StyledHeroImage>
        <StyledButtonsWrapper className="desctop">
          {wpPage.homepage.gdzieMaPrzeniescLinkLewy.title ? (
            <Button
              whereGo={wpPage.homepage.gdzieMaPrzeniescLinkLewy.url}
              text={wpPage.homepage.gdzieMaPrzeniescLinkLewy.title}
              bgColor="var(--creamBg)"
              hasBorder="2px solid var(--primary500)"
              textColor="var(--primary500)"
              hasDeclaredPadding="8px 36px"
              hasFontWeight="700"
              hasFontSize="21px"
              hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkLewy.target}
              hoverBgColor="#F6E2BA"
              ariaLabel="link"
            />
          ) : null}
          {wpPage.homepage.gdzieMaPrzeniescLinkPrawy.title ? (
            <Button
              whereGo={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.url}
              text={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.title}
              textColor="var(--white)"
              bgColor="var(--primary500)"
              hasDeclaredPadding="8px 36px"
              hasFontSize="21px"
              hasFontWeight="700"
              hasBorder="2px solid var(--primary500)"
              hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.target}
              hoverBgColor="var(--primary900)"
              ariaLabel="link"
            />
          ) : null}
        </StyledButtonsWrapper>
      </StyledHeroImageWrapper>
      <StyledImagesRightWrapper>
        {wpPage.homepage.maleZdjecia?.map((image, index) => {
          if (index > 2) {
            return (
              <StyledImageWrapper key={image?.altText + `${index}`}>
                <GatsbyImage
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  alt={image?.altText || " "}
                />
              </StyledImageWrapper>
            )
          }
          return null
        })}
      </StyledImagesRightWrapper>
      <StyledButtonsWrapper className="mobile">
        {wpPage.homepage.gdzieMaPrzeniescLinkLewy.title ? (
          <Button
            whereGo={wpPage.homepage.gdzieMaPrzeniescLinkLewy.url}
            text={wpPage.homepage.gdzieMaPrzeniescLinkLewy.title}
            bgColor="var(--creamBg)"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasDeclaredPadding="8px 41px"
            hasFontSize={"21px"}
            hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkLewy.target}
            hoverBgColor="#F6E2BA"
            hasFontWeight="700"
            ariaLabel="link"
          />
        ) : null}
        {wpPage.homepage.gdzieMaPrzeniescLinkPrawy.url ? (
          <Button
            whereGo={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.url}
            text={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="8px 41px"
            hasFontSize={"21px"}
            hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.target}
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
            hasFontWeight="700"
            ariaLabel="link"
          />
        ) : null}
      </StyledButtonsWrapper>
    </StyledHomeHeroSection>
  );
};

export default HomeHeroSection;
