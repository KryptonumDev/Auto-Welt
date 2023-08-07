import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import {
  StyledExhibitionRegulations,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledLinkWrapper,
} from "../components/ExhibitionRegulations/StyledExhibitionRegulations";
import { StyledText } from "../components/Text/StyledText";

const ExhibitionRegulations = ({ data }) => {
  const queryData = data.wpPage.regulaminWystaw;

  return (
    <StyledExhibitionRegulations>
      <StyledContentWrapper>
        <StyledText
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredfontfamily="Nocturne Serif"
          as="h1"
        >
          {queryData.tytulStrony}
        </StyledText>
        <StyledTextWrapper>
          {parse(queryData.tekstPodTytulem)}
        </StyledTextWrapper>
        <StyledLinkWrapper>
          {queryData.links.map(el => (
            <a
              download
              href={el.file.localFile.publicURL}
              aria-label="pobierz umowę"
            >
              {el.file.title}
            </a>
          ))}
        </StyledLinkWrapper>
      </StyledContentWrapper>
    </StyledExhibitionRegulations>
  );
};

export default ExhibitionRegulations;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query cxhibitionRegulationsQuery {
    wpPage(id: {eq: "cG9zdDozNzU="}) {
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
      regulaminWystaw {
        tytulStrony
        tekstPodTytulem
        links{
          file{
            title
            localFile{
              publicURL
            }
          }
        }
      }
    }
  }
`;
