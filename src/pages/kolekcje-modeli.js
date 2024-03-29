import React from "react";
import { graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import HomeArticles from "../components/HomeArticles/HomeArticles";
import ModelCollection from "../components/ModelCollection/ModelCollection";
import RecInfoWithButton from "../components/RecInfoWithButton/RecInfoWithButton";

import {
  StyledContentWrapper,
  StyledModelCollections,
  StyledReqButton,
} from "../components/Collections/StyledCollections";
import styled from "styled-components";


const ModelCollections = ({ data }) => {
  const greenData = data.wpPage.kolekcjeModeli;

  const images = withArtDirection(
    getImage(greenData.tloDlaZielonegoProstokataPodKolekcjami.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(
          greenData.tloMobileDlaZielonegoProstokataPodKolekcjami.localFile
        ),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(
          greenData.tloTabletDlaZielonegoProstokataPodKolekcjami.localFile
        ),
      },
    ]
  );
  return (
    <main>
      <Title>
        Kolekcje samochodów:
      </Title>
      <StyledModelCollections>
        <StyledContentWrapper>
          {data.allWpKolekcje.edges
            .sort(
              (a, b) =>
                a.node.kolekcja.informacjeGlowne.kolejnoscWyswietlania -
                b.node.kolekcja.informacjeGlowne.kolejnoscWyswietlania
            )
            .map(({ node }, index) => (
              <ModelCollection
                key={index + `${node.informacjeGlowne?.tytulNaDuzejMiniaturce}`}
                collectionData={node.kolekcja}
                slug={node.slug}
              />
            ))}
        </StyledContentWrapper>
      </StyledModelCollections>
      <StyledReqButton>
        <RecInfoWithButton
          text={greenData.tekstWZielonymInpucie}
          btnText={greenData.linkWZielonymInpucie.title}
          btnWhereGo={greenData.linkWZielonymInpucie.url}
          hasTarget={greenData.linkWZielonymInpucie.target}
          btnPadding={"10px 22px"}
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          bgImage={images}
          btnFontSize="21px"
          btnHoverBg="var(--secondary700)"
        />
      </StyledReqButton>
      <HomeArticles
        isCollectionsModelPage={true}
        buttonData={greenData.przyciskPodArtykulamiNaDoleStrony}
      />
    </main>
  );
};

const Title = styled.h1`
  width: 100%;
  max-width: 1144px;
  margin: 50px auto 30px;
  padding: 0px 32px;

  color: var(--primary500);
  font: 500 48px / 1em "Nocturne Serif";

  @media only screen and (max-width: 768px) {
    margin-top: 130px;
    padding: 0 16px;
  }

  @media (max-width: 594px) {
    font-size: 34px;
  }

  @media (max-width: 375px) {
    font-size: 30px;
  }
`

export default ModelCollections;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query collectionsQueryD {
    allWpKolekcje(sort: {date: DESC}) {
      edges {
        node {
          slug
          kolekcja {
            informacjeGlowne {
              kolejnoscWyswietlania
              duzaMiniaturka {
                altText
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              nazwaKolekcji
              trescPrzyciskuNaDuzejMiniaturce
              tytulNaDuzejMiniaturce
              tloDlaTytuluWDuzejMiniaturce {
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
    wpPage(id: { eq: "cG9zdDo0MDQ=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      kolekcjeModeli {
        przyciskPodArtykulamiNaDoleStrony {
          target
          title
          url
        }
        tekstWZielonymInpucie
        linkWZielonymInpucie {
          target
          title
          url
        }
        tloDlaZielonegoProstokataPodKolekcjami {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tloMobileDlaZielonegoProstokataPodKolekcjami {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tloTabletDlaZielonegoProstokataPodKolekcjami {
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
`;
