import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledFooterCenterWrapperArticle,
  StyledTop,
  StyledBottom,
} from "./StyledFooterCenterWrapperArticle";
import { StyledText } from "../Text/StyledText";

const FooterCenterWrapperArticle = ({ articleData, slug }) => {
  return (
    <StyledFooterCenterWrapperArticle to={`/artykuly/${slug}`}>
      <StyledTop>
        <GatsbyImage
          image={getImage(articleData.informacjeDoMiniaturki.miniaturka.localFile)}
          alt={articleData.informacjeDoMiniaturki.miniaturka.altText}
          objectFit="fill"
        />
      </StyledTop>
      <StyledBottom>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredlineheight="19px"
          hasdeclaredfontcolor="var(--primary500)"
        >
          {articleData.informacjeDoMiniaturki.tytul}
        </StyledText>
      </StyledBottom>
    </StyledFooterCenterWrapperArticle>
  );
};

export default FooterCenterWrapperArticle;
