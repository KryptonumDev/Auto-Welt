import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledThreeCollectionImages,
  StyledImageWrapper,
} from "./StyledThreeCollectionImages";

const ThreeCollectionImages = ({ imagesData }) => {
  return (
    <StyledThreeCollectionImages>
      {imagesData ?
        imagesData?.map((image, index) => {
          return (
            <StyledImageWrapper key={index}>
              <GatsbyImage
                image={getImage(image?.localFile)}
                alt={image?.altText || " "}
                title={image?.title}
              />
            </StyledImageWrapper>
          );
        }) : null}
    </StyledThreeCollectionImages>
  );
};

export default ThreeCollectionImages;
