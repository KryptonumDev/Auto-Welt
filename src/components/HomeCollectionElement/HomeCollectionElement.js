import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledHomeCollectionElement,
  StyledBackground,
  StyledImage,
} from "./StyledHomeCollectionElement";

const HomeCollectionElement = ({ bgImage, image, buttonText, whereGo }) => {
  return (
    <StyledHomeCollectionElement>
      <StyledBackground>
        {bgImage.localFile && (
          <GatsbyImage
            image={getImage(bgImage.localFile)}
            alt={bgImage.altText}
            objectFit="fill"
          />
        )}
      </StyledBackground>
      <StyledImage>
        {image.localFile && (
          <GatsbyImage
            image={getImage(image.localFile)}
            alt={image.altText}
            objectFit="fill"
          />
        )}
      </StyledImage>
      {buttonText && (
        <Button
          text={buttonText}
          whereGo={`/kolekcje-modeli/${whereGo}`}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasMaxWidth="323px"
          hasFontSize="21px"
          hasDeclaredPadding="10px 16px"
          hasFontWeight="500"
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
        />
      )}
    </StyledHomeCollectionElement>
  );
};

export default HomeCollectionElement;
