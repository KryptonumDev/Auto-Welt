import { graphql } from 'gatsby'
import React from 'react'

const TemplateExhibitions = () => {
  return (
    <>
        TemplateExhibitions
    </>
  )
}

export default TemplateExhibitions

export const query = graphql`
query wystawy($wystawaId: String) {
    wpWystawa(id: { eq: $wystawaId }) {
      wystawa {
        miejsce
        tytulPodZdjeciem
        informacjeDlaMiniaturki
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
`