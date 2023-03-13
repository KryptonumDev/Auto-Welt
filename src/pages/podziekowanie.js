import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { YellowButtonLink } from "../shop-components/button"

export default function Podziekowanie({ location }) {
    return (
        <>
            <Wrapper>
                <StaticImage className="image" src="./../../static/images/podziekowanie.png" alt='koszyk zakupowy' />
                <h1>Dziękuję za złożenie zamówienia {location?.state?.orderNumber ? 'nr. ' + location.state.orderNumber : ''}</h1>
                <p>Cieszę się, że wybrałaś/ eś właśnie Auto-Welt</p>
                <YellowButtonLink><span>POWRÓT DO SKLEPU</span></YellowButtonLink>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.main`
    max-width: 1060px;
    padding: 0 32px;
    margin: 120px auto;

    > .image{
        display: block;
        width: fit-content;
        margin: 0 auto;
    }

    > h1{
        margin-top: 40px;
        margin-bottom: 10px;
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: 48px;
        color: #23423D;
        text-align: center;
    }

    > p{
        margin-bottom: 32px;
        font-size: 20px;
        font-family: 'Roboto Condensed';
        text-align: center;
    }
`

export { Head } from "../components/Head/Head"

export const query = graphql`
  query shopQuery {
    wpPage(id: { eq: "cG9zdDo0NjU=" }) {
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
