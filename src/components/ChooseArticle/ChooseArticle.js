import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"

import Button from "../Button/Button";

import {
  StyledChooseArticle,
  StyledArticle,
  StyledImageWrapper,
  StyledTextWrapper,
} from "./StyledChooseArticle";
import { StyledText } from "../Text/StyledText";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ChooseArticle = ({ chosenArticle }) => {
  const [article, setArticle] = useState();
  const data = useStaticQuery(graphql`
    query approveArticle{
      allWpArtykul {
        edges {
          node {
            slug
            title
            artykul {
              informacjeDoMiniaturki {
                miniaturka {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  altText
                }
              }
            }
          }
        }
      }
    }
  `)
  
  // useEffect(() => {
  //   const article1 = data.allWpArtykul.edges.filter(({ node }) => node.title == chosenArticle.title)
  //   console.log(...article1);
  //   setArticle(...article1)
  //   // console.log(article1);
  //   // console.log(article)
  // }, [chosenArticle, data])

  return (
    <StyledChooseArticle>
      <StyledText
        hasdeclaredfontsize="Nocturne Serif"
        hasdeclaredfontlineheight="1.2em"
        hasdeclaredpadding="0 0 40px 0"
        hasdeclaredfontcolor="#23423D"
      >
        Zobacz również
      </StyledText>
      <StyledArticle>
        <StyledImageWrapper>
          {/* <GatsbyImage 
            image={getImage(article.node.artykul.informacjeDoMiniaturki.miniaturka.localFile)}
            alt={article.node.artykul.informacjeDoMiniaturki.miniaturka.altText}
          /> */}
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText>dsadsa</StyledText>
          {/* <Button /> */}
        </StyledTextWrapper>
      </StyledArticle>
    </StyledChooseArticle>
  );
};

export default ChooseArticle;