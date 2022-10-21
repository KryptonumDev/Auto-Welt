import React from 'react'

import ChooseArticle from '../ChooseArticle/ChooseArticle'
import CustomAside from '../CustomAside/CustomAside'
import ArticleGalleryImage from "../ArticleGalleryImage/ArticleGalleryImage"
import ArticlePhotoInfo from '../ArticlePhotoInfo/ArticlePhotoInfo'
import ArticleCustomQuote from '../ArticleCustomQuote/ArticleCustomQuote'

import { 
    StyledArticleTemplateContent,
    StyledAside,
    StyledTextContent
} from "./StyledArticleTemplateContent"

const ArticleTemplateContent = () => {
  return (
    <StyledArticleTemplateContent>
        <StyledAside>
            <CustomAside />
        </StyledAside>
        <StyledTextContent>
            <ArticleCustomQuote />
            <ArticleGalleryImage />
            <ArticlePhotoInfo />
            <ChooseArticle />
        </StyledTextContent>
    </StyledArticleTemplateContent>
  )
}

export default ArticleTemplateContent