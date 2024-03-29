import React, { useMemo } from "react"
import { graphql } from "gatsby"

import ProductSlider from "../shop-components/product-slider"
import ProductListing from "../shop-components/product-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Hero from "../shop-components/text-hero"
import Newsletter from "../shop-components/newsletter"

const Shop = ({ data: { wpPage, news, allWcProduct, allWcCategory } }) => {

  const filtredProducts = useMemo(() => {
    return allWcProduct.nodes.filter((data) => {
      const createTime = new Date(data.date_created)
      const currentTime = new Date()
      const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

      return difference <= 31 && data.stock_status === 'instock'
    }).slice(0, 5);
  }, [allWcProduct])

  return (
    <main>
      <Hero maintitle={'SKLEP ONLINE MODELI KOLEKCJONERSKICH SAMOCHODÓW'} title={'Wyjątkowe modele kolekcjonerskie'} text={`Oferowane modele w moim sklepie to głównie samochody drugiej połowy XX wieku ponieważ ten okres w historii motoryzacji jest moją pasją. Oferowane modele to samochody osobowe, dostawcze, ciężarowe, czy autobusy zarówno z okresu PRL-u ale i Europy Zachodniej. Coś dla siebie odnajdą też osoby które interesują się samochodami sportowymi czy rajdowymi. Tutaj znaleźć można także różne gadżety motoryzacyjne jak magnesy czy książki. Oferuję modele zarówno takich firm jak np. Welly, ale i także modele dla bardziej wymagających klientów po to abyś mógł rozwijać swoją pasję i zainteresowania związane ze zbieraniem i kolekcjonowaniem modeli. To także oferta dla osób chcących poszerzyć swoją wiedzę o ciekawe książki. Zachęcam do zapoznania się z ofertą na moim sklepie i życzę Ci rozwoju swojej pasji i zainteresowań.`} />
      <ProductSlider title={'Nowości'} products={filtredProducts} />
      <ProductListing categories={allWcCategory.nodes} products={allWcProduct.nodes} />
      <Divider />
      <AllCategories data={allWcCategory.nodes} title={'Wszystkie kategorie'} />
      <Newsletter />
      <NewPosts />
    </main>
  );
};

export default Shop;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query shopQuery {
    allWcCategory(filter: {count: {gt: 0}}) {
      nodes {
        name
        slug
        acf{
          order_number
        }
        image {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
      }
    }
    allWcProduct(filter: {categories: {elemMatch: {slug: {ne: "wystawy"}}}}, sort: {date_created: DESC}) {
      nodes {
        date_created
        id
        name
        slug
        databaseId
        stock_status
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
          name
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
    }
  }
`;
