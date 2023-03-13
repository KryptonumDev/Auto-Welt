import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { YellowButtonLink } from "./button"

export default function AllCategories() {

  const data = useStaticQuery(graphql`
    query AllCategoryQuery {
          allWpProductCategory {
            nodes {
                name
                slug
                image {
                    altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
            }
          }
        }
  `)

  return (
    <Wrapper>
      <h2>Wszystkie kategorie</h2>
      <Grid>
        {data.allWpProductCategory.nodes.map(el => (
          <Item to={'/sklep/modele/' + el.slug}>
            <GatsbyImage className="image" image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
            <p>{el.name}</p>
          </Item>
        ))}
      </Grid>
      <Divider>
        <StaticImage className="image" src='./../../static/images/divider.png' alt='tło' />
        <h3>Nie znalazłeś tego, czego szukałeś?</h3>
        <YellowButtonLink><span>NAPISZ DO MNIE</span></YellowButtonLink>
      </Divider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 16px;
  max-width: 1080px;
  margin: 0 auto;
  box-sizing: content-box;
  margin-top: clamp(60px, ${60 / 768 * 100}vw, 120px);
  
  h2{
    margin-bottom: clamp(25px, ${25 / 768 * 100}vw, 40px);
    font-family: 'Nocturne Serif';
    font-weight: 400;
    font-size: clamp(32px, ${38 / 768 * 100}vw, 48px);
    color: #23423D;

  }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px clamp(20px, ${20 / 768 * 100}vw, 32px);

    @media (max-width: 840px) {
      grid-template-columns: 1fr 1fr;

      .image{
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;

    }
`

const Item = styled(Link)`
    background: #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    height: fit-content;
    text-decoration: unset;

    p{
        text-align: center;
        padding: 12px;
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: clamp(20px, ${20 / 768 * 100}vw, 24px);
        color: #FEFDFB;
        text-transform: uppercase;
    }
`

const Divider = styled.div`
  margin-top: 60px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 131px;

  @media (max-width: 864px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 0;

    a{
      margin-left: 40px !important;
      

      @media (max-width: 380px) {
        margin: 0 16px !important; 
      }

      @media (max-width: 340px) {
        width: 100%;
        margin: 0 auto!important;
      }
    }
  }

  h3{
    margin-left: 40px;
    margin-right: 20px;
    font-family: 'Nocturne Serif';
    font-weight: 400;
    font-size: clamp(24px, ${24 / 768 * 100}vw, 28px);
    color: #F2EBD8;
    width: fit-content;

    @media (max-width: 380px) {
      margin-left: 16px;
    }
  }

  a{
    margin-left: 0;
    margin-top: 0;
  }

  .image{
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
`