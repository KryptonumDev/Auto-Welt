import { graphql } from "gatsby";
import React from "react";

const TemplateExhibitions = () => {
  return <>TemplateExhibitions</>;
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
