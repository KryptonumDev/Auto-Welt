import React, { useEffect, useMemo } from "react"
import { graphql, navigate } from "gatsby"

import ExhibitionListing from './../shop-components/product-exhibition-listing'
import ProductListing from "../shop-components/product-category-listing"
import Divider from './../shop-components/organize-divider'
import AllCategories from './../shop-components/all-categories'
import NewPosts from './../shop-components/new-posts'
import Newsletter from "../shop-components/newsletter"
import Hero from "../shop-components/category-hero"

const Category = ({ pageContext, data: { allWcCategory, allWcProduct, wcCategory } }) => {

  useEffect(() => {
    if (wcCategory.count < 1) {
      navigate('/sklep/')
    }
  }, [wcCategory])

  return (
    <main>
      <Hero title={wcCategory.name} text={wcCategory.description} />
      {pageContext.slug !== 'wystawy'
        ? <ProductListing products={allWcProduct.nodes} />
        : <ExhibitionListing products={allWcProduct.nodes} />}
      {pageContext.slug !== 'wystawy'
        && <Divider />}
      <AllCategories data={allWcCategory.nodes} title={'Inne kategorie'} />
      <Newsletter />
      <NewPosts />
    </main>
  );
};

export default Category

// export { Head } from "../components/Head/Head"

export const query = graphql`
  query categoryQuery($id: String!, $slug: String!) {
    allWcCategory(filter: {count: {gt: 0}, id: {ne: $id}}) {
        nodes {
            name
            slug
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
