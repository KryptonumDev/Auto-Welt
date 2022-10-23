import React, { useMemo, useState } from "react";

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
import useWindowSize from "../../utils/getWindowSize";

function sliceIntoChunks(arr, chunkSize) {
  const res = [],
    copy = arr.map(v => v);
  for (let i = 0; i < copy.length; i += chunkSize) {
      const chunk = copy.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}

const ArticlesPageArticles = ({ title, allArticles }) => {
  const width = useWindowSize(),
    numElements = width < 768 ? 6 : 12;

  const articles = useMemo(
      () => sliceIntoChunks(allArticles, numElements),
      [ allArticles ]
    ),
    maxPage = useMemo(
      () => articles.length,
      [ articles ]
    );

  const [page, setPage] = useState(0);

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
          {articles[page].map(({ node }) => <ArticleElement articleData={node} />)}
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
