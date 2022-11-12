import React from "react";
import parse from "html-react-parser";

import ChooseArticle from "../ChooseArticle/ChooseArticle";
import CustomAside from "../CustomAside/CustomAside";
import ArticleCustomQuote from "../ArticleCustomQuote/ArticleCustomQuote";
import ArticleGalleryImage from "../ArticleGalleryImage/ArticleGalleryImage";

import {
  StyledExhibitionTemplateContent,
  StyledAsideWrapper,
  StyledContentWrapper,
} from "./StyledExhibitionTemplateContent";

const ExhibitionTemplateContent = ({ exhibitionData }) => {
  let headerIds = {};
  const content = exhibitionData?.content
    ? parse(exhibitionData?.content, {
        replace: (domNode) => {
          if (!domNode.children) return;

          switch (domNode.name) {
            case "blockquote":
              return (
                <ArticleCustomQuote
                  quoteText={
                    domNode.children.find((child) => child.name === "cite")
                      ?.children?.[0]?.data
                  }
                />
              );
            case "h2":
            case "h3":
              const id = domNode.children[0].data
                .replace(" ", "_")
                .normalize("NFKD")
                .replace(/\u0142/g, "l")
                .replace(/[^\w]/g, "")
                .replace("_", "-")
                .toLowerCase();
              headerIds[id] = (headerIds[id] ?? 0) + 1;
              domNode.attribs.id = `${id}-${headerIds[id]}`;
          }
        },
      })
    : null;

  return (
    <StyledExhibitionTemplateContent>
      <StyledAsideWrapper>
        <CustomAside
          asideData={
            exhibitionData.wystawa.wydarzenieSzablon
              ?.zielonyElementZKolekcjamiDoPolecenia
          }
        />
      </StyledAsideWrapper>
      <StyledContentWrapper>
        {content ? content : null}
        {exhibitionData.wystawa.wydarzenieSzablon?.galeriaNaDoleWydarzenia ? (
          <ArticleGalleryImage
            images={
              exhibitionData.wystawa.wydarzenieSzablon?.galeriaNaDoleWydarzenia
            }
            photoName={exhibitionData.wystawa.wydarzenieSzablon?.nazwaFotografa}
          />
        ) : null}
        {exhibitionData.wystawa.wydarzenieSzablon
          .ktoryArtykulPolecicNaDoleStrony ? (
          <ChooseArticle
            chosenArticle={
              exhibitionData.wystawa.wydarzenieSzablon
                ?.ktoryArtykulPolecicNaDoleStrony
            }
          />
        ) : null}
      </StyledContentWrapper>
    </StyledExhibitionTemplateContent>
  );
};

export default ExhibitionTemplateContent;
