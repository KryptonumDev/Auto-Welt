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
      <a href={link} target="_blank">
        <StaticImage src="../../images/Aparat.png" alt="aparat"/>
      </a>
      <StyledTextWrapper href={link} target="_blank">
        {desc ? parse(desc) : null}
      </StyledTextWrapper>
    </StyledArticlePhotoInfo>
  );
};

export default ArticlePhotoInfo;
