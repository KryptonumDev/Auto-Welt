import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import HomeArticleElement from "../HomeArticleElement/HomeArticleElement";
import ReqInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";

import {
  StyledHomeArticles,
  StyledArticlesWrapper,
} from "./StyledHomeArticles";
import { StyledText } from "../Text/StyledText";

const HomeArticles = () => {
  const data = useStaticQuery(graphql`
  query homeArticle {
    allWpArtykul(limit: 2) {
      edges {
        node {
          slug
          artykul {
            informacjeDoMiniaturki {
              opis
              tekstWPrzycisku
              tytul
              miniaturka {
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
      }
    }
    wpPage(id: {eq: "cG9zdDoxNQ=="}) {
      homepage {
        artykuly {
          napisWZielonymProstokaciePodArtykulami
          tytulSekcji
          linkDoBloga {
            target
            title
            url
          }
        }
      }
    }
  }
  `)
  return (
    <StyledHomeArticles>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.homepage.artykuly.tytulSekcji}
      </StyledText>
      <StyledArticlesWrapper>
        {data.allWpArtykul.edges.map(({node}) => 
          <HomeArticleElement 
            slug={node.slug} 
            articleData={node.artykul.informacjeDoMiniaturki} 
          />
        )}
      </StyledArticlesWrapper>
      <ReqInfoWithButton 
        text={data.wpPage.homepage.artykuly.napisWZielonymProstokaciePodArtykulami}
        btnText={data.wpPage.homepage.artykuly.linkDoBloga.title}
        hasTarget={data.wpPage.homepage.artykuly.linkDoBloga.target}
        btnWhereGo={data.wpPage.homepage.artykuly.linkDoBloga.url}
        btnBgColor="var(--secondary500)"
        btnColor="var(--primary900)"
        btnPadding="10px 33px"
        btnFontSize="21px"
      />
    </StyledHomeArticles>
  );
};

export default HomeArticles;
