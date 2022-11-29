import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledFooterCenterWrapperArticle,
  StyledTop,
  StyledBottom,
} from "./StyledFooterCenterWrapperArticle";
import { StyledText } from "../Text/StyledText";

const FooterCenterWrapperArticle = ({ articleData, slug, title }) => {
  return (
    <StyledFooterCenterWrapperArticle to={`/artykuly/${slug}`}>
      <StyledTop>
        {articleData.informacjeDoMiniaturki.miniaturka.localFile ? (
          <GatsbyImage
            image={getImage(
              articleData.informacjeDoMiniaturki.miniaturka.localFile
            )}
            alt={articleData.informacjeDoMiniaturki.miniaturka?.altText || " "}
            title={articleData.informacjeDoMiniaturki.miniaturka?.title}
          />
        ) : null}
      </StyledTop>
      <StyledBottom>
        {title ? parse(title) : null}
      </StyledBottom>
    </StyledFooterCenterWrapperArticle>
  );
};

export default FooterCenterWrapperArticle;
