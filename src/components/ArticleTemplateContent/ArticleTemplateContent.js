import React from "react";

import ChooseArticle from "../ChooseArticle/ChooseArticle";
import CustomAside from "../CustomAside/CustomAside";
import ArticleGalleryImage from "../ArticleGalleryImage/ArticleGalleryImage";
import ArticlePhotoInfo from "../ArticlePhotoInfo/ArticlePhotoInfo";
import ArticleCustomQuote from "../ArticleCustomQuote/ArticleCustomQuote";

import {
  StyledArticleTemplateContent,
  StyledAside,
  StyledTextContent,
} from "./StyledArticleTemplateContent";

const ArticleTemplateContent = ({ contentData }) => {
  return (
    <StyledArticleTemplateContent>
      <StyledAside>
        <CustomAside asideData={contentData.artykul.dedykowanaStronaArtykulu.sekcjaPolecajacaNaszeKolekcjeWLewejCzesciStrony} />
      </StyledAside>
      <StyledTextContent>
        <ArticleCustomQuote quoteText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " />
        <ArticleGalleryImage images={contentData.artykul.dedykowanaStronaArtykulu?.galeriaNaKoncuArtykulu}/>
        <ArticlePhotoInfo desc={contentData.artykul.dedykowanaStronaArtykulu.sekcjaZAutoremZdjec?.opis} />
        <ChooseArticle />
      </StyledTextContent>
    </StyledArticleTemplateContent>
  );
};

export default ArticleTemplateContent;
