import React from 'react'

import { 
    StyledArticleElement,
    StyledImageWrapper,
    StyledTextWrapper,
    StyledDate,
    StyledLinkWrapper,
    StyledTitle
} from "./StyledArticleElement"

const ArticleElement = ({ articleData }) => {
  return (
    <StyledArticleElement>
        <StyledImageWrapper>

        </StyledImageWrapper>
        <StyledTextWrapper>
            <StyledDate>

            </StyledDate>
            <StyledTitle>

            </StyledTitle>
            <StyledLinkWrapper>

            </StyledLinkWrapper>
        </StyledTextWrapper>
    </StyledArticleElement>
  )
}

export default ArticleElement