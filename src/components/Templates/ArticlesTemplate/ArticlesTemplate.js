import React from "react";
import { graphql } from "gatsby";

import ArticleHeroSection from "../../ArticleHeroSection/ArticleHeroSection";
import ArticleTemplateContent from "../../ArticleTemplateContent/ArticleTemplateContent";

import { StyledArticleTemplate } from "./StyledArticleTemplate";

const ArticlesTemplate = ({ data }) => {
  return (
    <StyledArticleTemplate>
      <ArticleHeroSection heroData={data.wpArtykul} />
      <ArticleTemplateContent contentData={data.wpArtykul} />
    </StyledArticleTemplate>
  );
};

export default ArticlesTemplate;

export const query = graphql`
query artykul($articleId: String) {
  wpArtykul(id: { eq: $articleId }) {
    artykul {
      dedykowanaStronaArtykulu {
        galeriaNaKoncuArtykulu {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        ktoraKolekcjePolecic {
          target
          title
          url
        }
        pierwszaSekcja {
          duzeZdjecie {
            altText
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
        }
      }
      informacjeDoMiniaturki {
        tytul
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
  }
}
`