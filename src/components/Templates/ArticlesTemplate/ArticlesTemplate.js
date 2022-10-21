import React from "react";

import ArticleHeroSection from "../../ArticleHeroSection/ArticleHeroSection";
import ArticleTemplateContent from "../../ArticleTemplateContent/ArticleTemplateContent";

import { StyledArticleTemplate } from "./StyledArticleTemplate";

const ArticlesTemplate = () => {
  return (
    <StyledArticleTemplate>
      <ArticleHeroSection />
      <ArticleTemplateContent />
    </StyledArticleTemplate>
  );
};

export default ArticlesTemplate;
