import React from "react";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledCollectionTemplateDesc,
  StyledTextWrapper,
  StyledImageWrapper,
} from "./StyledCollectionTemplateDesc";

const CollectionTemplateDesc = ({ descData }) => {
  return (
    <StyledCollectionTemplateDesc>
      <StyledTextWrapper>
        {descData?.opisKolekcji && parse(descData.opisKolekcji)}
      </StyledTextWrapper>
      <StyledImageWrapper>
        {descData?.zdjecieObokOpisu && (
          <GatsbyImage
            image={getImage(descData.zdjecieObokOpisu?.localFile)}
            alt={descData.zdjecieObokOpisu?.altText}
          />
        )}
      </StyledImageWrapper>
    </StyledCollectionTemplateDesc>
  );
};

export default CollectionTemplateDesc;
