import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledArticleGalleryImage,
  StyledTextWrapper,
} from "./StyledArticleGalleryImage";

const ArticleGalleryImage = ({ images, photoName }) => {
  return (
    <>
      <StyledArticleGalleryImage>
        {images?.map((image) => (
          <div>
            <GatsbyImage
              image={getImage(image?.localFile)}
              alt={image?.altText}
              title={image?.title}
            />
          </div>
        ))}
      </StyledArticleGalleryImage>
      <StyledTextWrapper>{photoName && parse(photoName)}</StyledTextWrapper>
    </>
  );
};

export default ArticleGalleryImage;
