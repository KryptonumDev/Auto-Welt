import { graphql } from "gatsby";
import React from "react";

import ExhibitionHeroSection from "../../ExhibitionHeroSection/ExhibitionHeroSection";
import ExhibitionTemplateContent from "../../ExhibitionTemplateContent/ExhibitionTemplateContent";

import { StyledTemplateExhibitions } from "./StyledTemplateExhibitions";

const TemplateExhibitions = ({ data }) => {
  return (
    <StyledTemplateExhibitions>
      <ExhibitionHeroSection />
      <ExhibitionTemplateContent exhibitionData={data.wpWystawa.wystawa.wydarzenieSzablon} />
    </StyledTemplateExhibitions>
  );
};

export default TemplateExhibitions;

export const query = graphql`
query wystawyQuerPage($wystawaId: String) {
  wpWystawa(id: {eq: $wystawaId}) {
    wystawa {
      informacjeOgolne {
        miejsce
        tytulPodZdjeciem
        czyWystawaJestAktualnaJezeliNieToJestPlanowana
      }
      wydarzenieSzablon {
        galeriaNaDoleWydarzenia {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        sekcjaPowitalna {
          duzeZdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          krotkiOpisPodTytulem
          rozwinietaData
        }
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
      }
    }
  }
}
`;
