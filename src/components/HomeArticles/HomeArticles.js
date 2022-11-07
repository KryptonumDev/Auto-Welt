import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import HomeArticleElement from "../HomeArticleElement/HomeArticleElement";
import ReqInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";
import Button from "../Button/Button";

import {
  StyledHomeArticles,
  StyledArticlesWrapper,
  StyledButtonWrapper,
  StyledPaddingWrapper,
} from "./StyledHomeArticles";
import { StyledText } from "../Text/StyledText";

const HomeArticles = ({ isCollectionsModelPage, buttonData }) => {
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
                  title
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
      wpPage(id: { eq: "cG9zdDoxNQ==" }) {
        homepage {
          artykuly {
            zdjecieTlaWZielonymProstokacie {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            napisWZielonymProstokaciePodArtykulami
            tytulSekcji
            linkDoBloga {
              target
              title
              url
            }
            zdjecieTlaWZielonymProstokacieMobile {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieTlaWZielonymProstokacieTablet {
              altText
              title
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
  `);
  const imageShort = data.wpPage.homepage.artykuly;
  const images = withArtDirection(
    getImage(imageShort.zdjecieTlaWZielonymProstokacie.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(
          imageShort.zdjecieTlaWZielonymProstokacieMobile.localFile
        ),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(
          imageShort.zdjecieTlaWZielonymProstokacieTablet.localFile
        ),
      },
    ]
  );
  return (
    <>
      <StyledHomeArticles iscollectionpage={isCollectionsModelPage}>
        <StyledText
          as="h2"
          hasdeclaredfontsize="48px"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredmargin="0 0 40px"
          hasdeclaredfontfamily="Nocturne Serif"
        >
          {data.wpPage.homepage.artykuly.tytulSekcji &&
            data.wpPage.homepage.artykuly.tytulSekcji}
        </StyledText>
        <StyledArticlesWrapper slides={data.allWpArtykul?.edges.length}>
          {data.allWpArtykul?.edges.map(({ node }) => (
            <HomeArticleElement
              slug={node.slug}
              articleData={node.artykul.informacjeDoMiniaturki}
            />
          ))}
        </StyledArticlesWrapper>
      </StyledHomeArticles>
      {isCollectionsModelPage ? (
        <StyledButtonWrapper>
          {buttonData.title && data.allWpArtykul.edges.length > 2 ? (
            <Button
              text={buttonData.title}
              whereGo={buttonData.url}
              hasTarget={buttonData.target}
              hasBorder="2px solid var(--primary500)"
              textColor="var(--primary500)"
              hasFontSize="21px"
              hasDeclaredPadding="8px 33px"
              bgColor="var(--background500)"
              hoverBgColor="#F6E2BA"
            />
          ) : null}
        </StyledButtonWrapper>
      ) : (
        <StyledPaddingWrapper>
          <ReqInfoWithButton
            text={
              data.wpPage.homepage.artykuly
                .napisWZielonymProstokaciePodArtykulami
            }
            btnText={data.wpPage.homepage.artykuly.linkDoBloga.title}
            hasTarget={data.wpPage.homepage.artykuly.linkDoBloga.target}
            btnWhereGo={data.wpPage.homepage.artykuly.linkDoBloga.url}
            bgImage={images}
            btnBgColor="var(--secondary500)"
            btnColor="var(--primary900)"
            btnPadding="10px 33px"
            btnFontSize="21px"
            btnHoverBg="var(--secondary700)"
          />
        </StyledPaddingWrapper>
      )}
    </>
  );
};

export default HomeArticles;
