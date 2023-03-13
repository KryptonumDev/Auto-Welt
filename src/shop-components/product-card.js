import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button } from "./button"

export default function ProductCard({ data }) {
    const { addItem } = useCart()

    return (
        <Wrapper>
            <GatsbyImage image={data.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={data.featuredImage.node.altText} />
            <TextPart>
                <div>
                    <Title>{data.name}</Title>
                    <Scale>Scala: {data.scale ? data.scale : 'nie wskazana'}</Scale>
                    <Price className={data.onSale ? 'discount' : ""}>
                        <span className={data.onSale ? 'discount-regular-price' : 'regular-price'} dangerouslySetInnerHTML={{ __html: data.regularPrice.replace(',00', '') }} />

                        {data.onSale && (
                            <span className="discount-price" dangerouslySetInnerHTML={{ __html: data.price.replace(',00', '') }} />
                        )}
                    </Price>
                </div>
                <Button className="add-to-cart" onClick={() => { addItem(data) }}><span>DO KOSZYKA</span></Button>
            </TextPart>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    background: #FAF7F1;
    border-top: 4px solid #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

`

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.span`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 124%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #23423D;
    text-align: center;
    display: block;
    margin-top: 30px;
`

const Scale = styled.span`
    display: block;
    text-align: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135.19%;
    font-feature-settings: 'pnum' on, 'onum' on;
    margin-top: 2px;
`

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 10px;

    span{
        font-weight: 400;
        color: #23423D;

    }

    .regular-price{
        font-size: 24px;
    }

    .discount-regular-price{
        font-size: 18px;
    }

    .discount-price{
        color: #EDAC2A;
        font-size: 24px;
        background: #23423D;
    }
`