import React from "react";
import { StyledText } from "../Text/StyledText";
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
        <GatsbyImage
          image={getImage(articleData.zdjecieDoMiniaturki.localFile)}
          alt={articleData.zdjecieDoMiniaturki.altText}
          objecFit="cover"
        />
      </StyledFooterEventImage>
      <StyledFooterEventContent>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredlineheight="19px"
          hasdeclaredfontweight="500"
          hasdeclaredfontcolor="var(--primary500)"
        >
          {articleData.tytulPodZdjeciem}
        </StyledText>
      </StyledFooterEventContent>
    </StyledFooterEvent>
  );
};

export default FooterEvent;
