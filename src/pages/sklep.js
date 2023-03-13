import React from "react"
import { graphql } from "gatsby"

import NewArrivals from "../shop-components/new-arrivals"
import ProductListing from "../shop-components/product-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Hero from "../shop-components/text-hero"

const Shop = ({ data: { allWpProduct } }) => {
  return (
    <main>
      <Hero maintitle={'SKLEP ONLINE MODELI KOLEKCJONERSKICH SAMOCHODÓW'} title={'Wyjątkowe modele kolekcjonerskie'} text={`Współpracujemy z czołowymi producentami modeli kolekcjonerskich samochodów 
w Europie. Weryfikujemy ich jakość i dbamy o idealne warunki składowania. Wszystko po to, żebyś miał dostęp do szerokiego asortymentu modeli kolekcjonerskich i mógł rozwijać pasję związaną z kolekcjonowaniem.`} />
      {/* <NewArrivals /> */}
      {/* <ProductListing products={allWpProduct.nodes} /> */}
      <Divider />
      <AllCategories />
      <NewPosts />
    </main>
  );
};

export default Shop;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query shopQuery {
    allWpProduct {
      nodes {
        name
        databaseId
        onSale
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on WpSimpleProduct {
          id
          name
          price
          regularPrice
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo0NjU=" }) {
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
      sklep {
        tytulPodZdjeciami
        podTytul
        opisPodTytulami
        glowneZdjecie {
          altText
          title
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
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieSamochoduPrzyczepioneDoPrawejKrawedzie {
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
