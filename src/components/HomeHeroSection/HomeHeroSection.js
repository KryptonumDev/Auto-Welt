/** @format */

import React, { useState, useEffect } from "react";
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

import getWindowSize from "../../utils/getWindowSize";

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
  const width = getWindowSize();
  const heroImage = getImage(wpPage.homepage.duzeZdjecieSrodkowe.localFile);
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);

  useEffect(() => {
    const lImages = [];
    const rImages = [];
    wpPage.homepage.maleZdjecia.map((image, index) => {
      if (index < 3) {
        return lImages.push({
          localFile: getImage(image.localFile),
          alt: image.altText,
          title: image.title,
        });
      } else {
        return rImages.push({
          localFile: getImage(image.localFile),
          alt: image.altText,
          title: image.title,
        });
      }
    });
    setLeftImages(lImages);
    setRightImages(rImages);
  }, [wpPage]);

  return (
    <StyledHomeHeroSection>
      <StyledImagesLeftWrapper>
        {leftImages?.map((image) => (
          <StyledImageWrapper key={image.altText}>
            <GatsbyImage
              image={image.localFile}
              alt={image.alt || " "}
              title={image.title}
              objectFit="fill"
            />
          </StyledImageWrapper>
        ))}
      </StyledImagesLeftWrapper>
      <StyledHeroImageWrapper>
        <StyledHeroImage>
          <GatsbyImage
            image={heroImage}
            alt={wpPage.homepage?.duzeZdjecieSrodkowe?.altText || " "}
            title={wpPage.homepage?.duzeZdjecieSrodkowe?.title}
          />
        </StyledHeroImage>
        {width > 768 ? (
          <StyledButtonsWrapper>
            {wpPage.homepage.gdzieMaPrzeniescLinkLewy.title && (
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
            )}
            {wpPage.homepage.gdzieMaPrzeniescLinkPrawy.title && (
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
            )}
          </StyledButtonsWrapper>
        ) : null}
      </StyledHeroImageWrapper>
      <StyledImagesRightWrapper>
        {rightImages?.map((image) => (
          <StyledImageWrapper key={image?.altText}>
            <GatsbyImage
              image={image.localFile}
              alt={image?.alt || " "}
              title={image?.title}
              objectFit="fill"
            />
          </StyledImageWrapper>
        ))}
      </StyledImagesRightWrapper>
      {width < 769 ? (
        <StyledButtonsWrapper>
          {wpPage.homepage.gdzieMaPrzeniescLinkLewy.title && (
            <Button
              whereGo={wpPage.homepage.gdzieMaPrzeniescLinkLewy.url}
              text={wpPage.homepage.gdzieMaPrzeniescLinkLewy.title}
              bgColor="var(--creamBg)"
              hasBorder="2px solid var(--primary500)"
              textColor="var(--primary500)"
              hasDeclaredPadding="8px 41px"
              hasFontSize={width < 376 ? "15px" : "21px"}
              hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkLewy.target}
              hoverBgColor="#F6E2BA"
              hasFontWeight="700"
              ariaLabel="link"
            />
          )}
          {wpPage.homepage.gdzieMaPrzeniescLinkPrawy.url && (
            <Button
              whereGo={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.url}
              text={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.title}
              textColor="var(--white)"
              bgColor="var(--primary500)"
              hasDeclaredPadding="8px 41px"
              hasFontSize={width < 376 ? "15px" : "21px"}
              hasTarget={wpPage.homepage.gdzieMaPrzeniescLinkPrawy.target}
              hoverBgColor="var(--primary900)"
              hasBorder="2px solid var(--primary500)"
              hasFontWeight="700"
              ariaLabel="link"
            />
          )}
        </StyledButtonsWrapper>
      ) : null}
    </StyledHomeHeroSection>
  );
};

export default HomeHeroSection;
