import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { YellowButtonLink } from "../shop-components/button"

export default function Podziekowanie({ location }) {
  // redirect if not order
  // ?payment_intent=pi_3MmGU4FRHdFp2R5314z7In16&payment_intent_client_secret=pi_3MmGU4FRHdFp2R5314z7In16_secret_my9D243oLmx5UW327fb7uwHVI&redirect_status=succeeded

  // useEffect(() => {
  //   let params = new URLSearchParams(location.search);
  //   let intent = params.get('payment_intent_client_secret');


  //   (async () => {
  //     const paymentIntent = await stripe.paymentIntents.retrive(intent);
  //     debugger
  //     if (paymentIntent && paymentIntent.status === 'succeeded') {
  //       console.log('success')
  //     } else {
  //       console.log(paymentIntent.status)
  //     }
  //   })()
  // }, [])

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
