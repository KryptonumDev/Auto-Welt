import React from "react"
import styled from "styled-components"
import ExhibitionCard from "./exhibition-card"

export default function ExhibitionListing({ products }) {
  return (
    <Wrapper>
      <Grid>
        {products.map((el, index) => <ExhibitionCard key={el.name} data={el} />)}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 0 clamp(16px, ${16 / 768 * 100}vw, 32px);
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    h1{
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 32px;

    @media (max-width: 840px) {
        grid-gap: 20px;
    }

    @media (max-width: 700px){
        grid-template-columns: 1fr;
    }
`

