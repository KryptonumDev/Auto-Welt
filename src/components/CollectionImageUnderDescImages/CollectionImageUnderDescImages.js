import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledCollectionImageUnderDescImages,
  StyledTopImage,
  StyledBottomImage,
} from "./StyledCollectionImageUnderDescImages";

const CollectionImageUnderDescImages = ({ imagesData }) => {
  return (
    <StyledCollectionImageUnderDescImages>
      <StyledTopImage>
        {imagesData?.prostokatneZdjeciePodOpisem ? (
          <GatsbyImage
            image={getImage(imagesData.prostokatneZdjeciePodOpisem?.localFile)}
            alt={imagesData.prostokatneZdjeciePodOpisem?.altText || " "}
            title={imagesData.prostokatneZdjeciePodOpisem?.title}
          />
        ) : null}
      </StyledTopImage>
      <StyledBottomImage>
        {imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi ? (
          <GatsbyImage
            image={getImage(
              imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi?.localFile
            )}
            alt={imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi?.altText || " "}
            title={imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi?.title}
          />
        ) : null}
      </StyledBottomImage>
    </StyledCollectionImageUnderDescImages>
  );
};

export default CollectionImageUnderDescImages;
