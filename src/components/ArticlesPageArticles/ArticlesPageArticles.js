import React from 'react'

import ArticleElement from "../ArticleElement/ArticleElement"

import { 
    StyledArticlesPageArticles,
    StyledArticlesSlider,
    StyledSlidesWrapper,
    StyledPagginationWrapper,
    StyledTopPaggination,
    StyledBottomPaggination
} from "./StyledArticlesPageArticles"
import { StyledText } from "../Text/StyledText"

const ArticlesPageArticles = ({ title, allArticles }) => {
  return (
    <StyledArticlesPageArticles>
        <StyledText>
            {title}
        </StyledText>
        <StyledArticlesSlider>
            <StyledSlidesWrapper>
                <ArticleElement articleData />
            </StyledSlidesWrapper>
            <StyledPagginationWrapper>
                <StyledTopPaggination>

                </StyledTopPaggination>
                <StyledBottomPaggination>

                </StyledBottomPaggination>
            </StyledPagginationWrapper>
        </StyledArticlesSlider>
    </StyledArticlesPageArticles>
  )
}

export default ArticlesPageArticles