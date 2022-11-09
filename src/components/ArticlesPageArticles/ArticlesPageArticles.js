import React, { useMemo, useRef, useState } from "react";

import ArticleElement from "../ArticleElement/ArticleElement";
import ArticlePaginationNumber from "../ArticlePaginationNumber/ArticlePaginationNumber";

import {
  StyledArticlesPageArticles,
  StyledArticlesSlider,
  StyledSlidesWrapper,
  StyledPagginationWrapper,
  StyledTopPaggination,
  StyledBottomPaggination,
  StyledLeftArrow,
  StyledRightArrow,
  StyledInput,
  StyledButton,
} from "./StyledArticlesPageArticles";
import { StyledText } from "../Text/StyledText";
import useWindowSize from "../../utils/getWindowSize";

import LewoArt from "../../images/lewoArt.svg";
import PrawoArt from "../../images/prawoArt.svg";

function sliceIntoChunks(arr, chunkSize) {
  const res = [],
    copy = arr.map((v) => v);
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
      [allArticles]
    ),
    maxPage = useMemo(() => articles.length, [articles]);

  const paginationRef = useRef();

  const [page, setPage] = useState(0),
    pageNum = page + 1;

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
          {articles[page].map(({ node }, index) => (
            <ArticleElement key={node.slug + index} articleData={node} />
          ))}
        </StyledSlidesWrapper>
        {allArticles.length < (width < 768 ? 7 : 13) ? null : (
          <StyledPagginationWrapper>
            <StyledTopPaggination>
              <StyledLeftArrow
                onClick={() =>
                  setPage((page) => (page - 1 < 0 ? page : page - 1))
                }
              >
                <LewoArt />
              </StyledLeftArrow>
              {
                // pierwsza strona i 3 kropki
                page > 0 ? (
                  // strona 2 i dalej
                  <>
                    <ArticlePaginationNumber setPage={setPage} number={1} />
                    {page > 3 ? (
                      // strona 4 i dalej
                      <>...</>
                    ) : page > 1 ? (
                      // strona 3
                      <ArticlePaginationNumber setPage={setPage} number={2} />
                    ) : undefined}
                  </>
                ) : undefined
              }
              {
                // poprzednia strona
                page > 2 ? (
                  <ArticlePaginationNumber
                    setPage={setPage}
                    number={pageNum - 1}
                  />
                ) : undefined
              }
              <ArticlePaginationNumber
                setPage={setPage}
                number={pageNum}
                active={true}
              />
              {
                // następna strona
                page + 1 < maxPage ? (
                  <ArticlePaginationNumber
                    setPage={setPage}
                    number={pageNum + 1}
                  />
                ) : undefined
              }
              {
                // 3 kropki i ostatnia strona
                page + 4 < maxPage ? (
                  <>...</>
                ) : page + 3 < maxPage ? (
                  <ArticlePaginationNumber
                    setPage={setPage}
                    number={pageNum + 2}
                  />
                ) : undefined
              }
              {page + 2 < maxPage ? (
                <ArticlePaginationNumber setPage={setPage} number={maxPage} />
              ) : undefined}
              <StyledRightArrow
                onClick={() =>
                  setPage((page) => (page + 1 >= maxPage ? page : page + 1))
                }
              >
                <PrawoArt />
              </StyledRightArrow>
            </StyledTopPaggination>
            <StyledBottomPaggination>
              <StyledText
                hasdeclaredfontsize="24px"
                hasdeclaredlineheight="1.2em"
              >
                Idź do strony:
              </StyledText>
              <StyledInput
                type="number"
                ref={paginationRef}
                defaultValue={pageNum}
                onChange={(e) => {
                  const val = parseInt(e.target.value) - 1;
                  if (isNaN(val) || val < 0 || val >= maxPage)
                    e.target.value = pageNum;
                }}
              />
              <StyledButton
                onClick={() => {
                  const value = parseInt(paginationRef?.current?.value);
                  if (!isNaN(value)) setPage(value - 1);
                }}
              >
                Przejdź
              </StyledButton>
            </StyledBottomPaggination>
          </StyledPagginationWrapper>
        )}
      </StyledArticlesSlider>
    </StyledArticlesPageArticles>
  );
};

export default ArticlesPageArticles;
