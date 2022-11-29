import React from "react";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledFooterEvent,
  StyledFooterEventContent,
  StyledFooterEventImage,
} from "./StyledFooterEvent";

const FooterEvent = ({ articleData, slug }) => {
  return (
    <StyledFooterEvent to={`/wystawy/${slug}`}>
      <StyledFooterEventImage>
        {articleData.zdjecieDoMiniaturki.localFile ? (
          <GatsbyImage
            image={getImage(articleData.zdjecieDoMiniaturki?.localFile)}
            alt={articleData.zdjecieDoMiniaturki?.altText || " "}
            title={articleData.zdjecieDoMiniaturki?.title}
          />
        ) : null}
      </StyledFooterEventImage>
      <StyledFooterEventContent>
        {articleData.tytulPodZdjeciem ? parse(articleData.tytulPodZdjeciem) : null}
      </StyledFooterEventContent>
    </StyledFooterEvent>
  );
};

export default FooterEvent;
