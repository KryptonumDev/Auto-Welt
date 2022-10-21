import { graphql } from "gatsby";
import React from "react";

import ExhibitionHeroSection from "../../ExhibitionHeroSection/ExhibitionHeroSection";
import ExhibitionTemplateContent from "../../ExhibitionTemplateContent/ExhibitionTemplateContent";

const TemplateExhibitions = () => {
  return (
    <>
      <ExhibitionHeroSection />
      <ExhibitionTemplateContent />
    </>
  );
};

export default TemplateExhibitions;

export const query = graphql`
  query wystawyQuerPage($wystawaId: String) {
    wpWystawa(id: { eq: $wystawaId }) {
      wystawa {
        informacjeOgolne {
          miejsce
          tytulPodZdjeciem
          data
          elementyListy {
            elementListy
          }
          zdjecieDoMiniaturki {
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
