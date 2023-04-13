import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import CartContent from "../shop-components/cart-content"
import Empty from "../shop-components/cart-empty"
import ProductSlider from "../shop-components/product-slider"

export default function KoszykPage({ data: { allWcProduct } }) {
  const {
    addItem,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem
  } = useCart()

  const sum = useMemo(() => {
    let count = 0
    items.forEach(el => {
      count += el.price.replace(/[^0-9]/g, '') * el.quantity
    })
    return count
  }, [items])
  
  return (
    <Main>
      <Title>Koszyk</Title>
      {totalUniqueItems > 0
        ? <CartContent
          items={items}
          sum={sum}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
        />
        : <Empty />
      }
      <ProductSlider title={'Zobacz również'} products={allWcProduct.nodes} />
    </Main>
  )
}

export { Head } from "../components/Head/Head"

export const query = graphql`
  query productPageQuery {
    allWcProduct(filter: {categories: {elemMatch: {slug: {ne: "wystawy"}}}}, sort: {date_created: DESC}, limit: 5) {
      nodes {
        date_created
        id
        name
        slug
        databaseId
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
    wpPage(id: {eq: "cG9zdDoyNzQy"}) {
      id
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


const Main = styled.div`
  max-width: 1112px;
  width: 100%;
  margin: 120px auto;
  padding: 0 16px;
  box-sizing: border-box;

  *{
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 16px;
  }
`

const Title = styled.h1`
  font-family: 'Nocturne Serif';
  font-weight: 400;
  font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
  color: #23423D;
  margin-bottom: clamp(25px, ${25 / 768 * 100}vw, 40px);
`