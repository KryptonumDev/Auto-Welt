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
    <StyledHomeCollectionElement to={`/kolekcje-modeli/${whereGo}`}>
      <StyledBackground>
        {bgImage.localFile && (
          <GatsbyImage
            image={getImage(bgImage?.localFile)}
            alt={bgImage?.altText || " "}
            title={bgImage?.title}
            objectFit="fill"
          />
        )}
      </StyledBackground>
      <StyledImage>
        {image.localFile && (
          <GatsbyImage
            image={getImage(image?.localFile)}
            alt={image?.altText || " "}
            title={image?.title}
            objectFit="fill"
          />
        )}
      </StyledImage>
      {buttonText && (
        <Button
          text={buttonText}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasMaxWidth="323px"
          hasFontSize="21px"
          hasDeclaredPadding="8px 15px"
          hasFontWeight="500"
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
          hasNotTabIndex
        />
      )}
    </StyledHomeCollectionElement>
  );
};

export default HomeCollectionElement;
