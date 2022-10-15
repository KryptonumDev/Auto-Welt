import React from 'react'
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"

import { 
    StyledExhibitionRegulations,
    StyledContentWrapper,
    StyledTextWrapper,
    StyledLinkWrapper
} from "../components/ExhibitionRegulations/StyledExhibitionRegulations"
import { StyledText } from "../components/Text/StyledText"

const ExhibitionRegulations = ({ data }) => {
  const queryData = data.wpPage.regulaminWystaw;
  return (
    <StyledExhibitionRegulations>
      <StyledContentWrapper>
          <StyledText
              hasdeclaredfontsize="48px"
              hasdeclaredfontweight="400"
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
              <Link 
                  to={queryData.pierwszyLink.url} 
                  target={queryData.pierwszyLink.target}
              >
                  {queryData.pierwszyLink.title}
              </Link>
              <Link 
                  to={queryData.drugiLink.url} 
                  target={queryData.drugiLink.target}
              >
                  {queryData.drugiLink.title}
              </Link>
          </StyledLinkWrapper>
      </StyledContentWrapper>
    </StyledExhibitionRegulations>
  )
}

export default ExhibitionRegulations

export const query = graphql`
query cxhibitionRegulationsQuery {
    wpPage(id: {eq: "cG9zdDozNzU="}) {
      regulaminWystaw {
        tytulStrony
        tekstPodTytulem
        pierwszyLink {
          target
          title
          url
        }
        drugiLink {
          target
          title
          url
        }
      }
    }
  }
`