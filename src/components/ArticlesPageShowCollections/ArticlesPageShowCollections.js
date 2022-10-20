import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import RecInfoWithButton from "../../components/RecInfoWithButton/RecInfoWithButton";

import { StyledText } from "../Text/StyledText";
import {
  StyledArticlesPageShowCollections,
  StyledSlidesWrapper,
  StyledSlide,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledTitleImage,
  StyledTitleWrapper,
} from "./StyledArticlesPageShowCollections";

const ArticlesPageShowCollections = ({ collectionData }) => {
  const data = useStaticQuery(graphql`
    query articlesCollectionData {
      allWpKolekcje {
        edges {
          node {
            kolekcja {
              informacjeGlowne {
                duzaMiniaturka {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                nazwaKolekcji
                tloDlaTytuluWDuzejMiniaturce {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  `);
  return (
    <StyledArticlesPageShowCollections>
      <StyledText>
        {collectionData.tytulSekcji && collectionData.tytulSekcji}
      </StyledText>
      <StyledSlidesWrapper>
        {data.allWpKolekcje.edges.map(({ node }, index) => (
          <StyledSlide key={index}>
            <StyledImageWrapper></StyledImageWrapper>
            <StyledTextWrapper>
              <StyledTitleImage></StyledTitleImage>
              <StyledTitleWrapper>
                {node.nazwaKolekcji && node.nazwaKolekcji}
              </StyledTitleWrapper>
            </StyledTextWrapper>
          </StyledSlide>
        ))}
      </StyledSlidesWrapper>
      <RecInfoWithButton bgImage={collectionData.zdjecieWZielonymProstokacie} />
    </StyledArticlesPageShowCollections>
  );
};

export default ArticlesPageShowCollections;
