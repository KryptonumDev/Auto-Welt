import React, { useEffect, useMemo } from "react"
import { graphql, navigate } from "gatsby"
import { useCart } from "react-use-cart"
import styled, { keyframes } from "styled-components"
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

  useEffect(() => {
    if (location?.state?.sum !== sum) {
      navigate('/koszyk/')
    }
  }, []);

  if (typeof window === 'undefined') {
    return (
      <Placeholder >
        <Loader><div className="wrap"><div /><div /><div /></div></Loader>
      </Placeholder>
    )
  }

  return (
    <Wrapper>
      <Checkout items={items} sum={sum} />
    </Wrapper>
  )
}

export default Zamowienie;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query orderPage {
    wpPage(id: {eq: "cG9zdDoyNzQ1"}) {
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

const Wrapper = styled.main`
  max-width: 1112px;
  width: 100%;
  margin: clamp(60px, ${60/768*100}vw, 90px) auto;
  padding: 0 16px;
  box-sizing: border-box;
  overflow-x: hidden;

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

const Placeholder = styled.div`
  height: 100vh;
`

const loaderAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`

const Loader = styled.div`
    position: fixed;
    z-index: 2000;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
    display: flex;
    justify-content: center;
    align-items: center;

    .wrap{
        width: 80px;
        height: 80px;
        position: relative;
    }

    .wrap div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: ${loaderAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .wrap div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    .wrap div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    .wrap div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
`