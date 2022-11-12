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
    <StyledArticleCustomQuote className="customQuote">
      <StyledIconWrapper>
        <StaticImage src="../../images/quote.png" alt="quote"/>
      </StyledIconWrapper>
      <StyledTextWrapper>{quoteText ? parse(quoteText) : null}</StyledTextWrapper>
    </StyledArticleCustomQuote>
  );
};

export default ArticleCustomQuote;
