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
        {articleData.informacjeDoMiniaturki.miniaturka.localFile && (
          <GatsbyImage
            image={getImage(
              articleData.informacjeDoMiniaturki.miniaturka.localFile
            )}
            alt={articleData.informacjeDoMiniaturki.miniaturka.altText}
          />
        )}
      </StyledTop>
      <StyledBottom>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredfontweight="700"
        >
          {articleData.informacjeDoMiniaturki.tytul &&
            articleData.informacjeDoMiniaturki.tytul}
        </StyledText>
      </StyledBottom>
    </StyledFooterCenterWrapperArticle>
  );
};

export default FooterCenterWrapperArticle;
