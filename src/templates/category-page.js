import React, { useEffect, useMemo } from "react"
import { graphql, navigate } from "gatsby"

import ProductSlider from "../shop-components/product-slider"
import ProductListing from "../shop-components/product-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Newsletter from "../shop-components/newsletter"
import Hero from "../shop-components/category-hero"

const Category = ({ data: { allWcProduct, wcCategory } }) => {

  useEffect(() => {
    if (wcCategory.count < 1) {
      navigate('/sklep/')
    }
  }, [wcCategory])

  return (
    <main>
      <Hero title={wcCategory.name} text={wcCategory.description} />
      <ProductListing products={allWcProduct.nodes} />
      <Divider />
      <AllCategories />
      <Newsletter />
      <NewPosts />
    </main>
  );
};

export default Category

// export { Head } from "../components/Head/Head"

export const query = graphql`
  query categoryQuery($id: String!, $slug: String!) {
    allWcProduct(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
    
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
    wcCategory(id: { eq: $id }) {
      description
      name
      count
    }
  }
`;
