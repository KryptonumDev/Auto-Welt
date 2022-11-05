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

import useWindowSize from "../utils/getWindowSize";

const ModelCollections = ({ data }) => {
  const width = useWindowSize();
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
    <>
      <StyledModelCollections>
        <StyledContentWrapper>
          {data.allWpKolekcje.edges
            .sort(
              (a, b) =>
                a.node.kolekcja.informacjeGlowne.kolejnoscWyswietlania -
                b.node.kolekcja.informacjeGlowne.kolejnoscWyswietlania
            )
            .map(({ node }) => (
              <ModelCollection
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
          btnPadding={width < 937 ? "10px 44px" : "10px 22px"}
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
    </>
  );
};

export default ModelCollections;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query collectionsQueryD {
    allWpKolekcje {
      edges {
        node {
          slug
          kolekcja {
            informacjeGlowne {
              kolejnoscWyswietlania
              duzaMiniaturka {
                altText
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
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tloMobileDlaZielonegoProstokataPodKolekcjami {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tloTabletDlaZielonegoProstokataPodKolekcjami {
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
`;
