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
        {articleData.zdjecieDoMiniaturki.localFile && (
          <GatsbyImage
            image={getImage(articleData.zdjecieDoMiniaturki?.localFile)}
            alt={articleData.zdjecieDoMiniaturki?.altText || " "}
            title={articleData.zdjecieDoMiniaturki?.title}
          />
        )}
      </StyledFooterEventImage>
      <StyledFooterEventContent>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontweight="700"
          hasdeclaredfontcolor="var(--primary500)"
        >
          {articleData.tytulPodZdjeciem && articleData.tytulPodZdjeciem}
        </StyledText>
      </StyledFooterEventContent>
    </StyledFooterEvent>
  );
};

export default FooterEvent;
