import React, { useMemo } from "react"
import { graphql, Link, navigate } from "gatsby"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import Checkout from "../shop-components/checkout-process"

const Zamowienie = ({ location }) => {
  const { items } = useCart()

  const sum = useMemo(() => {
    let count = 0
    items.forEach(el => {
      count += el.price.replace(/[^0-9]/g, '') * el.quantity
    })
    return count
  }, [items])

  React.useEffect(() => {
    if (location?.state?.sum !== sum) {
      navigate('/koszyk/')
    }
  }, []);

  return (
    <Wrapper>
      <Checkout items={items} sum={sum} />
    </Wrapper>
  )
}

export default Zamowienie;

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


const Wrapper = styled.main`
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