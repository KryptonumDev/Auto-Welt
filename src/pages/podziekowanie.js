import { graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useMemo } from "react"
import styled from "styled-components"
import { YellowButtonLink } from "../shop-components/button"
import ProductSlider from "../shop-components/product-slider"
import { useCart } from "react-use-cart"

export default function Podziekowanie({ location, data: { allWcProduct } }) {
  const { emptyCart } = useCart();
  // ?payment_intent=pi_3MmGU4FRHdFp2R5314z7In16&payment_intent_client_secret=pi_3MmGU4FRHdFp2R5314z7In16_secret_my9D243oLmx5UW327fb7uwHVI&redirect_status=succeeded
  const params = new URLSearchParams(location?.search);
  const status = params.get('status');
  const order = params.get('order');

  useEffect(() => {
    if (!status) {
      navigate('/sklep/')
    } else if (status === 'succeeded') {
      emptyCart()
    }
  }, [])

  const filtredProducts = useMemo(() => {
    return allWcProduct.nodes.filter((data) => {
      const createTime = new Date(data.date_created)
      const currentTime = new Date()
      const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

      return difference <= 31 && data.stock_status === 'instock'
    }).slice(0, 5)
  }, [allWcProduct])

  return (
    <Wrapper>
      <StaticImage className="image" src="./../../static/images/podziekowanie.png" alt='koszyk zakupowy' />
      <h1>{status !== 'succeeded'
        ? `Płatność nie powiodła się.`
        : `Dziękuję za złożenie zamówienia ${order ? 'nr. ' + order : ''}`}</h1>
      <p>
        {status !== 'succeeded'
          ? 'Sprobój ponownie, lub skontaktuj się z nami.'
          : 'Cieszę się, że wybrałaś/ eś właśnie Auto-Welt'}
      </p>
      <YellowButtonLink to={status !== 'succeeded' ? '/koszyk/' : '/sklep/'}><span>
        {status !== 'succeeded' ? 'POWRÓT DO KOSZYKA' : 'POWRÓT DO SKLEPU'}
      </span></YellowButtonLink>
      <ProductSlider title={'Nowości'} products={filtredProducts} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
    max-width: 1060px;
    padding: 0 32px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 90px) auto;

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
    allWcProduct(filter: {categories: {elemMatch: {slug: {ne: "wystawy"}}}}, sort: {date_created: DESC}) {
      nodes {
        date_created
        id
        name
        slug
        databaseId
        stock_status
        attributes {
          name
          options
        }
        images {
          alt
          name
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        categories {
          slug
          name
        }
        on_sale
        regular_price
        price
      }
    }
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
