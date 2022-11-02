import React from "react";
import { graphql } from "gatsby";

import ShopInProgress from "../components/ShopInProgress/ShopInProgress";
import HEAD from "../components/HEAD/HEAD";

const Shop = ({ data }) => {
  return (
    <>
      <HEAD seo={data.wpPage.seo} />
      <ShopInProgress shopData={data.wpPage.sklep} />
    </>
  );
};

export default Shop;

export const query = graphql`
  query shopQuery {
    wpPage(id: { eq: "cG9zdDo0NjU=" }) {
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
      sklep {
        tytulPodZdjeciami
        podTytul
        opisPodTytulami
        glowneZdjecie {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        lewyPrzycisk {
          target
          title
          url
        }
        prawyPrzycisk {
          target
          title
          url
        }
        zdjeciePlastra {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieSamochoduPrzyczepioneDoPrawejKrawedzie {
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
