import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function ProductCard({ data }) {
    return (
        <Wrapper>
            <span className="color" />
            <GatsbyImage image={data.image.localFile.childImageSharp.gatsbyImageData} alt={data.image.altText} />
            <Title>{data.title}</Title>
            <Scale>{data.scale}</Scale>
            <Price className={data.oldPrice ? 'discount' : ""}>
                <span className="discount-number">
                    {data.oldPrice}
                </span>
                <span className="price">
                    {data.newPrice}
                </span>
            </Price>
            <AddToCart>DO KOSZYKA</AddToCart>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;

    .color{
        display: block;
        height: 4px;
        background-color: currentColor;     
    }
`

const Title = styled.span`

`

const Scale = styled.span`

`

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span{

    }
`

const AddToCart = styled.button`

`