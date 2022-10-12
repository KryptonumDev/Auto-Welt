import React from "react";
import { graphql } from "gatsby";

import HomeArticles from "../components/HomeArticles/HomeArticles";
import ModelCollection from "../components/ModelCollection/ModelCollection";
import RecInfoWithButton from "../components/RecInfoWithButton/RecInfoWithButton";

import { 
  StyledContentWrapper,
} from "../components/Collections/StyledCollections";

import useWindowSize from "../utils/getWindowSize";

const ModelCollections = ({ data }) => {
  const width = useWindowSize();
  const greenData = data.wpPage.kolekcjeModeli;
  return (
    <>
      <StyledContentWrapper>
        {data.allWpKolekcje.edges.map(({ node }) => <ModelCollection collectionData={node.kolekcja} slug={node.slug}/>)}
      </StyledContentWrapper>
      <RecInfoWithButton
        text={greenData.tekstWZielonymInpucie}
        btnText={greenData.linkWZielonymInpucie.title}
        btnWhereGo={greenData.linkWZielonymInpucie.url}
        hasTarget={greenData.linkWZielonymInpucie.target}
        btnPadding={width < 937 ? "10px 44px" : "10px 22px"}
        btnBgColor="var(--secondary500)"
        btnColor="var(--primary900)"
        bgImage={greenData.tloDlaZielonegoProstokataPodKolekcjami}
        btnFontSize="21px"
        btnHoverBg="var(--secondary700)"
      />
    </>
  );
};

export default ModelCollections;

export const query = graphql`
query collectionsQueryD {
  allWpKolekcje {
    edges {
      node {
        slug
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
            trescPrzyciskuNaDuzejMiniaturce
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
  wpPage(id: {eq: "cG9zdDo0MDQ="}) {
    kolekcjeModeli {
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
    }
  }
}
`