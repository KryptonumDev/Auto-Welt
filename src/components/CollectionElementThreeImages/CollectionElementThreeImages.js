import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import { StyledCollectionElementThreeImages } from "./StyledCollectionElementThreeImages";

const CollectionElementThreeImages = ({ imagesData, linkData }) => {
  return (
    <StyledCollectionElementThreeImages>
      <div>
        {imagesData &&
          imagesData?.map((image, index) => (
            <GatsbyImage
              key={index}
              image={getImage(image?.localFile)}
              alt={image?.altText || " "}
              title={image?.title}
            />
          ))}
      </div>
      {linkData && (
        <Button
          whereGo={linkData?.url}
          text={linkData?.title}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasDeclaredPadding="8px 36px"
          hasFontSize="21px"
          hasFontWeight="700"
          hasTarget={linkData?.target}
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
        />
      )}
    </StyledCollectionElementThreeImages>
  );
};

export default CollectionElementThreeImages;
