import React, { useMemo } from "react"
import { Link, graphql } from "gatsby"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import CartContent from "../shop-components/cart-content"
import Empty from "../shop-components/cart-empty"
import ProductSlider from "../shop-components/product-slider"

export default function KoszykPage({ data: { allWcProduct } }) {
  const {
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
      <Flex>
        <Link to='/sklep/'>Sklep /  </Link>
        <span>Koszyk</span>
      </Flex>
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
      <ProductSlider yellow={true} title={'Zobacz również'} products={allWcProduct.nodes} />
    </Main>
  )
}

export { Head } from "../components/Head/Head"

export const query = graphql`
  query productPageQuery {
    allWcProduct(filter: {stock_status: {eq: "instock"}, categories: {elemMatch: {slug: {ne: "wystawy"}}}}, sort: {date_created: DESC}, limit: 5) {
      nodes {
        date_created
        id
        name
        slug
        databaseId
        stock_status
        stock_quantity
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


const Main = styled.main`
  max-width: 1112px;
  width: 100%;
  margin: clamp(60px, ${60/768*100}vw, 90px) auto;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 90px;
    .breadcrumbs{
      padding: 0;
    }
  }

  *{
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 16px;
  }
`

const Flex = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  a, span{
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135.19%;
    text-decoration: none;

    text-align: center;
    font-feature-settings: 'pnum' on, 'onum' on;

    color: #000000;
    white-space: nowrap;

    &:last-child{
      font-weight: 600;
    }

  }
  span{
    padding: 0 5px 0 3px;
  }
`

const Title = styled.h1`
  font-family: 'Nocturne Serif';
  font-weight: 400;
  font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
  color: #23423D;
  margin-bottom: clamp(25px, ${25 / 768 * 100}vw, 40px);
`