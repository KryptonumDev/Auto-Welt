import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useCallback, useMemo } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import AllCategories from "../shop-components/all-categories"
import CartContent from "../shop-components/cart-content"
import Empty from "../shop-components/cart-empty"
import NewPosts from "../shop-components/new-posts"

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
      <Title>koszyk</Title>
      {totalUniqueItems > 0
        ? <CartContent
          items={items}
          sum={sum}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
        />
        : <Empty />
      }
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


const Main = styled.main`
  max-width: 1080px;
  width: 100%;
  margin: 120px auto;
  padding: 0 32px;
  box-sizing: content-box;

  *{
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 16px;
  }
`

const Title = styled.h1`
  font-family: 'Nocturne Serif';
  font-weight: 400;
  font-size: 48px;
  color: #23423D;
  margin-bottom: 40px;
`