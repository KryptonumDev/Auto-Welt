import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import styled from "styled-components"
import { ButtonLink } from "./button"

export default function ExhibitionCard({ data }) {
  const isNewArrivals = useMemo(() => {
    const createTime = new Date(data.date_created)
    const currentTime = new Date()
    const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

    return difference <= 31
  }, [data])

  return (
    <Wrapper className={data.on_sale || isNewArrivals ? "item yellow" : "item"}>
      <Link className='wrap-link' to={`/sklep/${data.categories[0].slug}/${data.slug}/`} />
      <GatsbyImage className="main-image" image={data.images[0].localFile.childImageSharp.gatsbyImageData} alt={data.images[0].alt || 'obrazek'} />
      <TextPart>
        <div>
          <Title>{data.name}</Title>
          <p className="text">Organizacja wystawy</p>
        </div>
        <p className="price">Zapytaj o wycenę</p>
        <ButtonLink to='/kontakt/' className="button"><span>KONTAKT</span></ButtonLink>
      </TextPart>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    background: #FAF7F1;
    border-top: 4px solid #23423D;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .main-image{
      height: 100%;
    }

    &.yellow{
        border-top: 4px solid #EDAC2A;
    }

    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

    .wrap-link{
        position: absolute;
        inset: 0;
        z-index: 10;
        user-select: none;
        -webkit-user-drag: none;
    }

    .price{
      margin-top: 36px;
      font-family: 'Nocturne Serif';
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      font-feature-settings: 'pnum' on, 'onum' on;
      color: #23423D;
    }

    .text{
      font-size: 16px;
      line-height: 135.19%;
      font-feature-settings: 'pnum' on, 'onum' on;
      color: #000000;
      margin-top: 4px;
    }

`

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 0 20px;

    .button{
      width: calc(100% - 24px);
      margin-top: 12px;
      position: relative;
      z-index: 11;
    }
`

const Title = styled.span`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 124%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #23423D;
    text-align: left;
    display: block;
    margin-top: 30px;

`