import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { StyledArticleGalleryImage } from "./StyledArticleGalleryImage";

const ArticleGalleryImage = ({ images }) => {
  return (
    <StyledArticleGalleryImage>
      {images?.map(image => (
        <div>
          <GatsbyImage
            image={getImage(image?.localFile)}
            alt={image?.altText}
          />
        </div>
      ))}
    </StyledArticleGalleryImage>
  );
};

export default ArticleGalleryImage;
