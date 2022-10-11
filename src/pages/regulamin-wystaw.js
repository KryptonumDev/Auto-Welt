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
                {data.wpPage.regulaminWystaw.tytulStrony}
            </StyledText>
            <StyledTextWrapper>
                {parse(data.wpPage.regulaminWystaw.tekstPodTytulem)}
            </StyledTextWrapper>
            <StyledLinkWrapper>
                <Link 
                    to={data.wpPage.regulaminWystaw.pierwszyLink.url} 
                    target={data.wpPage.regulaminWystaw.pierwszyLink.target}
                >
                    {data.wpPage.regulaminWystaw.pierwszyLink.title}
                </Link>
                <Link 
                    to={data.wpPage.regulaminWystaw.drugiLink.url} 
                    target={data.wpPage.regulaminWystaw.drugiLink.target}
                >
                    {data.wpPage.regulaminWystaw.drugiLink.title}
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