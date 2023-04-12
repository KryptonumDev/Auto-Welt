import React, { useEffect, useMemo } from "react"
import { graphql, navigate } from "gatsby"
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

  useEffect(() => {
    if (location?.state?.sum !== sum) {
      navigate('/koszyk/')
    }
  }, []);

  if(typeof window === 'undefined'){
    return null
  }

  return (
    <Wrapper>
      <Checkout items={items} sum={sum} />
    </Wrapper>
  )
}

export default Zamowienie;

const Wrapper = styled.div`
  max-width: 1112px;
  width: 100%;
  margin: 120px auto;
  padding: 0 16px;
  box-sizing: border-box;
  overflow-x: hidden;

  *{
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 16px;
  }
`