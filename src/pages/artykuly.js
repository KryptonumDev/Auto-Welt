import React from "react";

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

export { Head } from "../components/Head/Head"

export const query = graphql`
  query articlesPageQuery {
    allWpArtykul(sort: {date: DESC}) {
      edges {
        node {
          slug
          artykul {
            informacjeDoMiniaturki {
              miniaturka {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          date
          title
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo1MzI=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
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
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaDlaZielonegoProstokataTablet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaDlaZielonegoProstokatu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          pierwszaKolekcjaKtoraPolecasz {
            ... on WpKolekcje {
              id
              kolekcja {
                informacjeGlowne {
                  duzaMiniaturka {
                    altText
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  nazwaKolekcji
                }
              }
              slug
            }
          }
          drugaKolekcjaKtoraPolecasz {
            ... on WpKolekcje {
              id
              kolekcja {
                informacjeGlowne {
                  duzaMiniaturka {
                    altText
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  nazwaKolekcji
                }
              }
              slug
            }
          }
        }
      }
    }
  }
`;
