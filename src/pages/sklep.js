import React, { useMemo } from "react"
import { graphql } from "gatsby"

import ProductSlider from "../shop-components/product-slider"
import ProductListing from "../shop-components/product-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Hero from "../shop-components/text-hero"
import Newsletter from "../shop-components/newsletter"

const Shop = ({ data: { allWcProduct } }) => {

  const filtredProducts = useMemo(() => {
    return allWcProduct.nodes.filter((data) => {
      const createTime = new Date(data.date_created)
      const currentTime = new Date()
      const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

      return difference <= 31
    })
  }, [allWcProduct])
  
  return (
    <main>
      <Hero maintitle={'SKLEP ONLINE MODELI KOLEKCJONERSKICH SAMOCHODÓW'} title={'Wyjątkowe modele kolekcjonerskie'} text={`Współpracujemy z czołowymi producentami modeli kolekcjonerskich samochodów 
w Europie. Weryfikujemy ich jakość i dbamy o idealne warunki składowania. Wszystko po to, żebyś miał dostęp do szerokiego asortymentu modeli kolekcjonerskich i mógł rozwijać pasję związaną z kolekcjonowaniem.`} />
      <ProductSlider title={'Nowości'}  products={filtredProducts}/>
      <ProductListing products={allWcProduct.nodes} />
      <Divider />
      <AllCategories />
      <Newsletter />
      <NewPosts />
    </main>
  );
};

export default Shop;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query shopQuery {
    allWcProduct {
      nodes {
        date_created
        id
        name
        slug
        databaseId
        attributes {
          name
          options
        }
        images {
          alt
          name
          localFile{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        categories {
          slug
        }
        on_sale
        regular_price
        price
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
