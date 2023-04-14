import { Link, navigate } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button } from "./button"

export default function ProductCard({ data }) {
  const { addItem } = useCart()

  const isNewArrivals = useMemo(() => {
    const createTime = new Date(data.date_created)
    const currentTime = new Date()
    const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

    return difference <= 31
  }, [data])

  const scale = useMemo(() => {
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
    <Wrapper className={data.on_sale || isNewArrivals ? "item yellow" : "item"}>
      <Link to={`/sklep/${data.categories[0].slug}/${data.slug}/`} />
      <div className="main-image-wrapper">
        {(data.on_sale || isNewArrivals) && (
          <NewArrivalsLabel>
            <StaticImage className="image" src='./../../static/images/product-card-label.png' alt='tło' />
            {data.on_sale
              ? <span className="yellow">PROMOCJA</span>
              : <span>NOWOŚĆ</span>
            }
          </NewArrivalsLabel>
        )}
        <GatsbyImage className="main-image" image={data.images[0].localFile.childImageSharp.gatsbyImageData} alt={data.images[0].alt} />
      </div>
      <TextPart>
        <Title>{data.name}</Title>
        {scale
          ? <Scale>Skala: {scale}</Scale>
          : null}
        {data.regular_price && (
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
        )}
      </TextPart>
      <Button disabled={data.stock_status !== 'instock'} className="add-to-cart" onClick={() => { addItem(data) }}><span>DO KOSZYKA</span></Button>
    </Wrapper>
  )
}

const NewArrivalsLabel = styled.div`
    position: absolute;
    z-index: 4;
    min-width: 167px;
    min-height: 32px;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    transform: translateY(50%);

    @media (max-width: 840px){
      transform: translateY(0);
    }

    @media (max-width: 480px){
      min-height: 26px;
    }

    .image{
        position: absolute;
        inset: 0;

        @media (max-width: 840px){
            max-width: 100%;
        }
    }

    span{
        padding: 6px 14px;
        font-family: 'Roboto Condensed';
        font-weight: 600;
        font-size: 18px;
        color: #FAF6EE;
        position: relative;
        z-index: 3;

        @media (max-width: 480px){
          padding: 3px 14px;
        }

        &.yellow{
            color: #EDAC2A;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    background: #FAF7F1;
    border-top: 4px solid #23423D;

    display: grid;
    grid-template-rows: auto 1fr auto;

    .main-image img{
      transition: transform 0.3s ease-in-out;
    }
    &:hover{
      .main-image{
        img{
          transform: scale(1.05);
        }
      }
      button{
        background: #1D2B29;
      }
    }

    @media (max-width: 840px) {
        grid-template-columns: 163fr 142fr;
        grid-template-rows:  1fr auto;
        grid-gap: 0;
        grid-template-areas: 
        'image text'
        'link link';
    }

    @media (max-width: 700px) {
      max-width: 440px;
      margin: 0 auto;
    }

    &.yellow{
        border-top: 4px solid #EDAC2A;
    }

    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

    a{
        position: absolute;
        inset: 0;
        z-index: 10;
        user-select: none;
        -webkit-user-drag: none;
    }

    .add-to-cart{
        position: relative;
        z-index: 11;

        @media (max-width: 840px){
            grid-area: link;
        }
    }

    .main-image-wrapper{
        position: relative;

        @media (max-width: 840px){
            grid-area: image;
            height: fit-content;
        }
    }

    .main-image{
        aspect-ratio: 3/2;
    }
`

const TextPart = styled.div`
    position: relative;
    @media (max-width: 840px){
        grid-area: text;
    }
`

const Title = styled.span`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: clamp(16px, ${16 / 768 * 100}vw, 24px);
    line-height: 124%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #23423D;
    text-align: center;
    display: block;
    margin-top: 30px;

    @media (max-width: 840px){
      margin: 20px 20px 0 20px;
      text-align: left;
    }
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

    @media (max-width: 840px){
      margin: 2px 20px 0 20px;
      text-align: left;
    }
`

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px 12px;
    margin-top: 10px;

    @media (max-width: 840px){
      margin: 10px 20px 0 20px;
      gap: 6px ;
      justify-content: flex-start;
      text-align: left;
      flex-wrap: wrap;
    }

    span{
        font-weight: 400;
        color: #23423D;
        font-family: 'Nocturne Serif';
    }

    .regular-price{
        font-size: 24px;
    }

    .discount-regular-price{
      font-size: 18px;
      position: relative;

      &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #EDAC2A;
        left: 0;
        bottom: 0;
        transform: rotateZ(-20deg);
        transform-origin: 0 100%;
      }
    }

    .discount-price{
        color: #EDAC2A;
        font-size: 24px;
        background: #23423D;
        padding: 0 3px;
    }
`