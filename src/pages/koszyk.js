import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useCallback, useMemo } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import AllCategories from "../shop-components/all-categories"
import CartContent from "../shop-components/cart-content"
import Empty from "../shop-components/cart-empty"
import NewPosts from "../shop-components/new-posts"
import ProductSlider from "../shop-components/product-slider"

export default function KoszykPage() {
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
      <ProductSlider title={'Zobacz również'} products={[]} />
    </Main>
  )
}

export { Head } from "../components/Head/Head"

export const query = graphql`
  query productPageQuery {
    wpPage {
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