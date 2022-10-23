import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import parse from "html-react-parser";

import {
  StyledArticlePhotoInfo,
  StyledTextWrapper,
} from "./StyledArticlePhotoInfo";

const ArticlePhotoInfo = ({ desc }) => {
  return (
    <StyledArticlePhotoInfo>
      <StaticImage src="../../images/Aparat.png" />
      <StyledTextWrapper>{desc && parse(desc)}</StyledTextWrapper>
    </StyledArticlePhotoInfo>
  );
};

export default ArticlePhotoInfo;
