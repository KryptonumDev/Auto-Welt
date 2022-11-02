import React from "react";

import ArticlesPageArticles from "../components/ArticlesPageArticles/ArticlesPageArticles";
import ArticlesPageShowCollections from "../components/ArticlesPageShowCollections/ArticlesPageShowCollections";
import HEAD from "../components/HEAD/HEAD";

import { graphql } from "gatsby";

const Articles = ({ data }) => {
  return (
    <>
      <HEAD seo={data.wpPage.seo} />
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
          artykul {
            informacjeDoMiniaturki {
              tytul
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
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo1MzI=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
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
          pierwszaKolekcjaKtoraPolecasz {
            ... on WpKolekcje {
              id
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
