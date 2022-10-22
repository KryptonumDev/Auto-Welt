import React from "react";
import parse from "html-react-parser";

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
  const content = parse(contentData.content, {
    replace: (domNode) => {
      if (domNode.name === "blockquote")
        return (
          <ArticleCustomQuote
            quoteText={
              domNode.children
              .find(
                child => child.name === "cite"
              )
              ?.children?.[0]
              ?.data
            }
          />
        );
    }
  }),
    headers = (() => {
      const nav = [],
        newHeaderObj = (name = "", children = []) => ({ name, children })
      for (let header of content.filter(val => [ "h2", "h3" ].includes(val.type))) {
        const headerContent = (
          Array.isArray(header.props.children) ? (
            header.props.children?.[0]
          ) : (
            header.props.children
          )
        ), headerObj = header.type === "h2" ? newHeaderObj(headerContent) : nav.pop();

        if (!headerObj) {
          console.warn("ArticleTemplateContent", "Got 'h3' before 'h2'! Aborting!");
          return undefined;
        }

        if (header.type === "h3")
          headerObj.children.push(newHeaderObj(headerContent));
        nav.push(headerObj);
      }
      return nav;
    })();

  return (
    <StyledArticleTemplateContent>
      <StyledAside>
        <CustomAside
          tableOfContents={headers}
          asideData={contentData.artykul.dedykowanaStronaArtykulu.sekcjaPolecajacaNaszeKolekcjeWLewejCzesciStrony}
        />
      </StyledAside>
      <StyledTextContent>
        {content}
        <ArticleCustomQuote quoteText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. " />
        <ArticleGalleryImage images={contentData.artykul.dedykowanaStronaArtykulu?.galeriaNaKoncuArtykulu}/>
        <ArticlePhotoInfo desc={contentData.artykul.dedykowanaStronaArtykulu.sekcjaZAutoremZdjec?.opis} />
        <ChooseArticle />
      </StyledTextContent>
    </StyledArticleTemplateContent>
  );
};

export default ArticleTemplateContent;
