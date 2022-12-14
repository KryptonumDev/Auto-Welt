import { graphql } from "gatsby";
import React from "react";

import ExhibitionHeroSection from "../../ExhibitionHeroSection/ExhibitionHeroSection";
import ExhibitionTemplateContent from "../../ExhibitionTemplateContent/ExhibitionTemplateContent";

import { StyledTemplateExhibitions } from "./StyledTemplateExhibitions";

const TemplateExhibitions = ({ data }) => {
  
  return (
    <StyledTemplateExhibitions>
      <ExhibitionHeroSection heroData={data?.wpWystawa} />
      <ExhibitionTemplateContent exhibitionData={data?.wpWystawa} />
    </StyledTemplateExhibitions>
  );
};

export default TemplateExhibitions;

export { Head } from "../../Head/Head"

export const query = graphql`
  query wystawyQuerPage($wystawaId: String) {
    wpWystawa(id: { eq: $wystawaId }) {
      wystawa {
        informacjeOgolne {
          data
          czyWystawaJestAktualnaJezeliNieToJestPlanowana
          tytulPodZdjeciem
        }
        wydarzenieSzablon {
          zielonyElementZKolekcjamiDoPolecenia {
            drugiPrzycisk {
              target
              title
              url
            }
            ktoraKolekcjePolecic {
              kolekcja {
                target
                url
                title
              }
            }
            pierwszyPrzycisk {
              url
              title
              target
            }
            tytul
          }
          sekcjaPowitalna {
            duzeZdjeciePoPrawo {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            krotkiOpisPodTytulem
            rozwinietaData
          }
          galeriaNaDoleWydarzenia {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          nazwaFotografa
          ktoryArtykulPolecicNaDoleStrony {
            ... on WpArtykul {
              id
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
