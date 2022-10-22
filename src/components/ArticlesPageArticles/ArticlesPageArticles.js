import React from "react";

import ArticleElement from "../ArticleElement/ArticleElement";

import {
  StyledArticlesPageArticles,
  StyledArticlesSlider,
  StyledSlidesWrapper,
  StyledPagginationWrapper,
  StyledTopPaggination,
  StyledBottomPaggination,
} from "./StyledArticlesPageArticles";
import { StyledText } from "../Text/StyledText";

const ArticlesPageArticles = ({ title, allArticles }) => {
  return (
    <StyledArticlesPageArticles>
      <StyledText
        hasdeclaredfontsize="48px"
        as="h1"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredlineheight="1.2em"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredpadding="0 0 40px 0"
      >
        {title && title}
      </StyledText>
      <StyledArticlesSlider>
        <StyledSlidesWrapper>
          {allArticles.map(({ node }) => <ArticleElement articleData={node} />)}
        </StyledSlidesWrapper>
        <StyledPagginationWrapper>
          <StyledTopPaggination></StyledTopPaggination>
          <StyledBottomPaggination></StyledBottomPaggination>
        </StyledPagginationWrapper>
      </StyledArticlesSlider>
    </StyledArticlesPageArticles>
  );
};

export default ArticlesPageArticles;
