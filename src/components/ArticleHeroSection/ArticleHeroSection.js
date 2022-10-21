import React from "react";

import {
  StyledArticleHeroSection,
  StyledImage,
  StyledTag,
  StyledTagImage,
  StyledTextWrapper,
  StyledTextImage,
} from "./StyledArticleHeroSection";
import { StyledText } from "../Text/StyledText";

const ArticleHeroSection = () => {
  return (
    <StyledArticleHeroSection>
      <StyledImage></StyledImage>
      <StyledTag>
        <StyledTagImage></StyledTagImage>
      </StyledTag>
      <StyledTextWrapper>
        <StyledTextImage></StyledTextImage>
        <StyledText></StyledText>
      </StyledTextWrapper>
    </StyledArticleHeroSection>
  );
};

export default ArticleHeroSection;
