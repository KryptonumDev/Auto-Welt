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
        {descData?.zdjecie && (
          <GatsbyImage
            image={getImage(descData.zdjecie.localFile)}
            alt={descData.zdjecie.altText}
          />
        )}
      </StyledImageWrapper>
    </StyledCollectionTemplateDesc>
  );
};

export default CollectionTemplateDesc;
