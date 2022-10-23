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
  let headerIds = {};
  const content = contentData.content ? parse(contentData?.content, {
    replace: (domNode) => {
      if (!domNode.children)
        return;

      switch (domNode.name) {
        case "blockquote":
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
        case "h2":
        case "h3":
          const id = (
            domNode
            .children[0]
            .data
          )
          .replace(' ', '_')
          .normalize("NFKD")
          .replace(/\u0142/g, "l")
          .replace(/[^\w]/g, '')
          .replace('_', '-')
          .toLowerCase();
          headerIds[id] = (headerIds[id] ?? 0) + 1;
          domNode.attribs.id = `${id}-${headerIds[id]}`;
      }
    }
  }) : null,
    headers = (() => {
      const nav = [],
        newHeaderObj = (id, name = "", children = []) => ({ id, name, children })
      for (let header of content?.filter(val => [ "h2", "h3" ].includes(val.type))) {
        const headerContent = (
          Array.isArray(header.props.children) ? (
            header.props.children?.[0]
          ) : (
            header.props.children
          )
        ), { id } = header.props,
          headerObj = header.type === "h2" ? newHeaderObj(id, headerContent) : nav.pop();

        if (!headerObj) {
          console.warn("ArticleTemplateContent", "Got 'h3' before 'h2'! Aborting!");
          return undefined;
        }

        if (header.type === "h3")
          headerObj.children.push(newHeaderObj(id, headerContent));
        nav.push(headerObj);
      }
      return nav;
    })();

  return (
    <StyledArticleTemplateContent>
      <StyledAside>
        <CustomAside
          tableOfContents={headers}
          asideData={contentData?.artykul?.dedykowanaStronaArtykulu?.sekcjaPolecajacaNaszeKolekcjeWLewejCzesciStrony}
        />
      </StyledAside>
      <StyledTextContent>
        {content}
        {contentData.artykul?.dedykowanaStronaArtykulu?.galeriaNaKoncuArtykulu &&
          <ArticleGalleryImage images={contentData.artykul.dedykowanaStronaArtykulu?.galeriaNaKoncuArtykulu}/>
        }
        {contentData.artykul?.dedykowanaStronaArtykulu?.sekcjaZAutoremZdjec?.opis && 
          <ArticlePhotoInfo desc={contentData.artykul?.dedykowanaStronaArtykulu?.sekcjaZAutoremZdjec?.opis} />
        }
        {contentData.artykul?.dedykowanaStronaArtykulu?.ktoryArtykulPolecicNaDoleStrony &&
          <ChooseArticle chosenArticle={contentData.artykul?.dedykowanaStronaArtykulu?.ktoryArtykulPolecicNaDoleStrony} />
        }
      </StyledTextContent>
    </StyledArticleTemplateContent>
  );
};

export default ArticleTemplateContent;
