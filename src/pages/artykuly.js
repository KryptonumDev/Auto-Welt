import React from "react";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import ArticlesPageArticles from "../components/ArticlesPageArticles/ArticlesPageArticles";
import ArticlesPageShowCollections from "../components/ArticlesPageShowCollections/ArticlesPageShowCollections";

import { graphql } from "gatsby";

const Articles = ({ data }) => {
  return (
    <>
      <ArticlesPageArticles
        title={data.wpPage.artykuly.tytulStrony}
        allArticles={data.allWpArtykul.edges}
      />
      <ArticlesPageShowCollections
        collectionData={data.wpPage.artykuly.zobaczKolekcje}
      />
    </>
  );
};

export default Articles;

export const query = graphql`
  query articlesPageQuery {
    allWpArtykul {
      edges {
        node {
          slug
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo1MzI=" }) {
      artykuly {
        tytulStrony
        zobaczKolekcje {
          tytulSekcji
          tekstWZielonymProstokacie
          linkWZielonymProstokacie {
            target
            title
            url
          }
          zdjecieTlaDlaZielonegoProstokataMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaDlaZielonegoProstokataTablet {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaDlaZielonegoProstokatu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
