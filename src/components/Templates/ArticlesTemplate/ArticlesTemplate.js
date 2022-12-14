import React from "react";
import { graphql } from "gatsby";

import ArticleHeroSection from "../../ArticleHeroSection/ArticleHeroSection";
import ArticleTemplateContent from "../../ArticleTemplateContent/ArticleTemplateContent";

import { StyledArticleTemplate } from "./StyledArticleTemplate";

const ArticlesTemplate = ({ data }) => {
  
  return (
    <StyledArticleTemplate>
      <ArticleHeroSection heroData={data.wpArtykul} />
      <ArticleTemplateContent contentData={data.wpArtykul} slug={data.wpArtykul.slug}/>
    </StyledArticleTemplate>
  );
};

export default ArticlesTemplate;

export { Head } from "../../Head/Head"

export const query = graphql`
  query artykul($articleId: String) {
    wpArtykul(id: { eq: $articleId }) {
      slug
      title
      artykul {
        dedykowanaStronaArtykulu {
          galeriaNaKoncuArtykulu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          pierwszaSekcja {
            duzeZdjecie {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          sekcjaPolecajacaNaszeKolekcjeWLewejCzesciStrony {
            drugiPrzycisk {
              target
              title
              url
            }
            ktoraKolekcjePolecic {
              kolekcja {
                target
                title
                url
              }
            }
            pierwszyPrzycisk {
              target
              title
              url
            }
            tytul
          }
          sekcjaZAutoremZdjec {
            opis
            linkDoStrony
          }
          ktoryArtykulPolecicNaDoleStrony {
            ... on WpArtykul {
              title
              artykul {
                informacjeDoMiniaturki {
                  miniaturka {
                    altText
                    title
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
      content
      terms {
        nodes {
          ... on WpCategory {
            name
          }
        }
      }
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
    }
  }
`;
