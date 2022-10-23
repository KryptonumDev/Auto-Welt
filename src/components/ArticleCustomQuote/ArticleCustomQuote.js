import React from "react";

import parse from "html-react-parser";

import {
  StyledArticleCustomQuote,
  StyledIconWrapper,
  StyledTextWrapper,
} from "./StyledArticleCustomQuote";
import { StaticImage } from "gatsby-plugin-image";

const ArticleCustomQuote = ({ quoteText }) => {
  return (
    <StyledArticleCustomQuote>
      <StyledIconWrapper>
        <StaticImage src="../../images/quote.png" />
      </StyledIconWrapper>
      <StyledTextWrapper>{quoteText && parse(quoteText)}</StyledTextWrapper>
    </StyledArticleCustomQuote>
  );
};

export default ArticleCustomQuote;
