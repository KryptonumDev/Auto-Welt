import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { OutlinedLink, YellowButtonLink } from './button'

export default function NewPosts() {

    const { allWpArtykul: { nodes } } = useStaticQuery(graphql`
        {
        allWpArtykul(sort: {date: DESC}, limit: 3) {
          nodes {
            title
            slug
            artykul {
              informacjeDoMiniaturki {
                miniaturka {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                opis
                tekstWPrzycisku
              }
            }
          }
        }
      }
    `)

    return (
        <Wrapper>
            <h2>Najnowsze artykuły</h2>

            <Grid>
                {nodes.map(el => (
                    <Item>
                        <div>
                            <GatsbyImage className="image" image={el.artykul.informacjeDoMiniaturki.miniaturka.localFile.childImageSharp.gatsbyImageData} alt={el.artykul.informacjeDoMiniaturki.miniaturka.altText} />
                            <div className="title">
                                <StaticImage className="background" src='./../../static/images/title-background.jpg' alt='tło' />
                                <h3>{el.title}</h3>
                            </div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: el.artykul.informacjeDoMiniaturki.opis }} />
                        </div>
                        <YellowButtonLink to={`/artykul/${el.slug}/`}><span>{el.artykul.informacjeDoMiniaturki.tekstWPrzycisku}</span></YellowButtonLink>
                    </Item>
                ))}
            </Grid>
            <OutlinedLink to='/artykuly/'><span>WIĘCEJ ARTYKUŁÓW</span></OutlinedLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 16px;
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto;
    box-sizing: content-box;

    h2{
        margin-bottom: clamp(25px, ${25 / 768 * 100}vw, 40px);
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }
`

const Grid = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;

    @media (max-width: 964px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 480px;
        margin:  0 auto;
    }
`

const Item = styled.div`
    background: #FAF7F1;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image{
        width: 100%;
        aspect-ratio: 1/1;
    }

    .title{
        position: relative;

        h3{
            font-family: 'Roboto Condensed';
            font-weight: 600;
            font-size: 22px;
            color: #23423D;
            position: relative;
            z-index: 2;
            padding: 13px 26px;
        }
        .background{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: block;
        }
    }

    .text{
        font-family: 'Roboto Condensed';
        > p {
            &:first-child{
                &::first-letter{
                }
            }
        }
    }

    p{
        padding: 13px 26px 24px 26px;
    }
    
    a{
        margin-bottom: 36px;
        margin-top: 0;
    }
`