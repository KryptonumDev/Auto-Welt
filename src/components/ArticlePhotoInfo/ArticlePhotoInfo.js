import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import parse from "html-react-parser";

import {
  StyledArticlePhotoInfo,
  StyledTextWrapper,
} from "./StyledArticlePhotoInfo";

const ArticlePhotoInfo = ({ desc, link }) => {
  return (
    <StyledArticlePhotoInfo href={link} target="_blank">
      <StaticImage src="../../images/Aparat.png" alt="aparat"/>
      <StyledTextWrapper>{desc && parse(desc)}</StyledTextWrapper>
    </StyledArticlePhotoInfo>
  );
};

export default ArticlePhotoInfo;
