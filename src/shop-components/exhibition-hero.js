import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { LightgalleryItem } from "react-lightgallery"

export default function Hero({ data }) {
  return (
    <Wrapper>
      <Content>
        <div className="gallery">
          <div className="main">
            {data.images.map((el, index) => {
              if (index) return null
              return <LightgalleryItem src={el.localFile.publicURL}>
                <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt || ' '} />
                {data.images.length > 1 && <span>1 z {data.images.length}</span>}
              </LightgalleryItem>
            })}
          </div>
          <div className="carousel">
            <div className="carousel-content">
              {data.images.map((el, index) => {
                if (!index) return null

                return <LightgalleryItem src={el.localFile.publicURL}><GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt || ' '} /></LightgalleryItem>
              })}
            </div>
          </div>
        </div>
        <div className="inform">
          <h1>{data.name}</h1>
          <div className="flex">
            <span>Dostępność:</span>
            <span>
              {data.stock_status === 'instock' && 'dostępny'}
              {data.stock_status === 'onbackorder' && 'na zamówienie'}
              {data.stock_status === 'outofstock' && 'nie dostępny'}
            </span>
          </div>
          <Button className="ml" to={'/kontakt/'} >
            <span>ZAPYTAJ O WYCENĘ</span>
          </Button>
        </div>
        <div className="description">
          <div className="title-description">
            <StaticImage className="image" src='./../../static/images/description-background.png' alt='tło' />
            <h2>Opis produktu:</h2>
          </div>
          <div className="description-content" dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </Content>
    </Wrapper >
  )
}

const Wrapper = styled.section`
    *{
        font-family: 'Roboto Condensed';
    }

    .ml{
      margin-left: 11px;
      margin-right: 11px;
      margin-top: 40px;
      width: calc(100% - 22px);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 53fr 47fr;
    grid-gap: 60px clamp(25px, ${25 / 768 * 100}vw,100px);
    grid-template-areas: 
    'gallery inform'
    'description description';

    .gallery{
        grid-area: gallery;
    }

    .inform{
        grid-area: inform;
    }

    .description{
        grid-area: description;
    }

    @media (max-width: 680px){
        grid-template-columns: 1fr;
        grid-template-areas: 
        'gallery'
        'inform'
        'description';
    }

    .gallery{
        button{
            border: none;
            background-color: transparent;
            width: fit-content;
        }
        .main{
            position: relative;

            span{
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 10px;
                font-size: 24px;
                background: #23423D;
                color: #fff;
                font-variant-numeric: initial;
            }
        }
        .carousel{
            margin-top: 20px;
            overflow: hidden;
            .carousel-content{
                display: flex;
                gap: 16px;
                button{
                    width: 40%;
                }
            }
        }
    }


    h1{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        &:first-child{
            margin-top: 24px;
        }

        span{
            font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
            &:first-child{
                color: #23423D;
            }
        }
    }

    .title-description{
        position: relative;
        min-height: 72.5px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        max-width: 530px;
        h2{
            padding: 16px 20px;
            font-family: 'Nocturne Serif';
            font-weight: 400;
            font-size: clamp(24px, ${24 / 768 * 100}vw, 28px);
            color: #FEFDFB;
        }
        .image{
            position: absolute;
            inset: 0;
            z-index: -1;
        }
    }

    .description-content{
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
        line-height: 124%;
        columns: 2;

        @media (max-width: 420px) {
          columns: 1;
        }

        p+p{
          margin-top: 24px;
        }

        strong{
          font-weight: unset;
          position: relative;
          white-space: nowrap;

          &::before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 50%;
            background-color: #F6E2BA;
            z-index: -1;
          }
        }
    }
` 