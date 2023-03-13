import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function NewArrivals({ data }) {

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
            <h2>Nowości</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 32px;
    max-width: 1080px;
    margin: 120px auto 0 auto;
    box-sizing: content-box;

    h2{
        margin-bottom: 40px;
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: 48px;
        color: #23423D;
    }
`

// const Grid = styled.div`
//     margin-top: 40px;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 24px;
// `

// const Item = styled.div`
//     background: #FAF7F1;
//     box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     .image{
//         width: 100%;
//         aspect-ratio: 1/1;
//     }

//     .title{
//         position: relative;

//         h3{
//             font-family: 'Roboto Condensed';
//             font-weight: 600;
//             font-size: 22px;
//             color: #23423D;
//             position: relative;
//             z-index: 2;
//             padding: 13px 26px;
//         }
//         .background{
//             position: absolute;
//             left: 0;
//             right: 0;
//             top: 0;
//             bottom: 0;
//             display: block;
//         }
//     }

//     .text{
//         font-family: 'Roboto Condensed';
//         > p {
//             &:first-child{
//                 &::first-letter{
//                 }
//             }
//         }
//     }

//     p{
//         padding: 13px 26px 24px 26px;
//     }
    
//     a{
//         margin-bottom: 36px;
//         margin-top: 0;
//     }
// `