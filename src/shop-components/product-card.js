import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button } from "./button"

export default function ProductCard({ data }) {
    const { addItem } = useCart()

    let scale = useMemo(() => {
        let val = null

        data.attributes.every(el => {
            if (el.name === 'Skala') {
                val = el.options[0]
                return false
            }
            return true
        })

        return val
    }, [data])

    return (
        <Wrapper>
            <Link to={`/sklep/modele/${data.categories[0].slug}/${data.slug}/`} />
            <GatsbyImage image={data.images[0].localFile.childImageSharp.gatsbyImageData} alt={data.images[0].alt} />
            <TextPart>
                <div>
                    <Title>{data.name}</Title>
                    {scale
                        ? <Scale>Scala: {scale}</Scale>
                        : null}
                    <Price className={data.on_sale ? 'discount' : ""}>
                        <span className={data.on_sale ? 'discount-regular-price' : 'regular-price'} >
                            {data.regular_price}&nbsp;zł
                        </span>

                        {data.on_sale && (
                            <span className="discount-price" >
                                {data.price}&nbsp;zł
                            </span>
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

    a{
        position: absolute;
        inset: 0;
    }
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