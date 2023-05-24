import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"

import ExhibitionListing from './../shop-components/product-exhibition-listing'
import ProductListing from "../shop-components/product-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Newsletter from "../shop-components/newsletter"
import Hero from "../shop-components/category-hero"
import BreadCrumbs from "../shop-components/breadcrumbs"
import styled from "styled-components"

const Category = ({ pageContext, data: { allWcCategory, allWcProduct, wcCategory } }) => {

  useEffect(() => {
    if (wcCategory.count < 1) {
      navigate('/sklep/')
    }
  }, [wcCategory])

  return (
    <Wrapper>
      <BreadCrumbs pageContext={pageContext} />
      <Hero title={wcCategory.acf.page_title} text={wcCategory.description} gallery={wcCategory.acf.gallery} />
      {pageContext.slug !== 'wystawy'
        ? <ProductListing products={allWcProduct.nodes} />
        : <ExhibitionListing products={allWcProduct.nodes} />}
      {pageContext.slug !== 'wystawy'
        && <Divider />}
      <AllCategories data={allWcCategory.nodes} title={'Inne kategorie modeli'} />
      <Newsletter />
      <NewPosts />
    </Wrapper>
  );
};

export default Category

export { Head } from "../components/Head/Head"

export const query = graphql`
  query categoryQuery($id: String!, $slug: String!) {
    allWcCategory(filter: {count: {gt: 0}, id: {ne: $id}}) {
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
    allWcProduct(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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
        }
        on_sale
        regular_price
        price
      }
    }
    wcCategory(id: { eq: $id }) {
      seo : yoast_head_json{
        metaDesc : og_description
        opengraphSiteName : og_site_name
        title : og_title
      }
      description
      name
      count
      acf {
        page_title
        gallery {
          alt
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

const Wrapper = styled.main`
  margin-top: clamp(60px, ${60/768*100}vw, 90px);

  @media (max-width: 768px) {
    margin-top: 90px;
  }
`