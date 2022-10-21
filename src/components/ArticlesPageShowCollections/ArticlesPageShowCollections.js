import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

import RecInfoWithButton from "../../components/RecInfoWithButton/RecInfoWithButton";

import { StyledText } from "../Text/StyledText";
import {
  StyledArticlesPageShowCollections,
  StyledSlidesWrapper,
  StyledSlide,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledTitleImage,
  StyledTitleWrapper,
  StyledReqWrapper
} from "./StyledArticlesPageShowCollections";

const ArticlesPageShowCollections = ({ collectionData }) => {
  const data = useStaticQuery(graphql`
    query articlesCollectionData {
      allWpKolekcje(limit: 2) {
        edges {
          node {
            kolekcja {
              informacjeGlowne {
                duzaMiniaturka {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                nazwaKolekcji
                tloDlaTytuluWDuzejMiniaturce {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  `);
  const images = withArtDirection(
    getImage(collectionData.zdjecieTlaDlaZielonegoProstokatu.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(
          collectionData.zdjecieTlaDlaZielonegoProstokataMobile.localFile
        ),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(
          collectionData.zdjecieTlaDlaZielonegoProstokataTablet.localFile
        ),
      },
    ]
  );
  return (
    <>
      <StyledArticlesPageShowCollections>
        <StyledText
          hasdeclaredfontsize="48px"
          as="h2"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredlineheight="1.2em"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="#23423D"
        >
          {collectionData.tytulSekcji && collectionData.tytulSekcji}
        </StyledText>
        <StyledSlidesWrapper>
          {data.allWpKolekcje.edges.map(({ node }, index) => (
            <StyledSlide key={index}>
              <StyledImageWrapper>
                {node.informacjeGlowne?.duzaMiniaturka &&
                  <GatsbyImage
                    image={getImage(node.informacjeGlowne.duzaMiniaturka.localFile)}
                    alt={node.informacjeGlowne.duzaMiniaturka.altText}
                  />
                }
              </StyledImageWrapper>
              <StyledTextWrapper>
                <StyledTitleImage>
                  {node.informacjeGlowne?.tloDlaTytuluWDuzejMiniaturce &&
                    <GatsbyImage
                      image={getImage(node.informacjeGlowne.tloDlaTytuluWDuzejMiniaturce.localFile)}
                      alt={node.informacjeGlowne.tloDlaTytuluWDuzejMiniaturce.altText}
                    />
                  }
                </StyledTitleImage>
                <StyledTitleWrapper>
                  <StyledText
                    hasdeclaredfontsize="28px"
                    hasdeclaredfontfamily="Nocturne Serif"
                    hasdeclaredlineheight="1.2em"
                    hasdeclaredfontcolor="#23423D"
                  >
                    {node.nazwaKolekcji && node.nazwaKolekcji}
                  </StyledText>
                </StyledTitleWrapper>
              </StyledTextWrapper>
            </StyledSlide>
          ))}
        </StyledSlidesWrapper>
      </StyledArticlesPageShowCollections>
      <StyledReqWrapper>
        <RecInfoWithButton 
          bgImage={images} 
          text={collectionData.tekstWZielonymProstokacie}
          btnText={collectionData.linkWZielonymProstokacie.title}
          btnWhereGo={collectionData.linkWZielonymProstokacie.url}
          hasTarget={collectionData.linkWZielonymProstokacie.target}
          btnPadding="10px 33px"
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          btnFontSize="21px"
          btnHoverBg="var(--secondary700)"
        />
      </StyledReqWrapper>
    </>
  );
};

export default ArticlesPageShowCollections;
