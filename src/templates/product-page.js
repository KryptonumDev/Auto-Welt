import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ContactPageForm from "../components/ContactPageForm/ContactPageForm"
import Hero from "../shop-components/product-hero"
import ProductSlider from "../shop-components/product-slider"
import "lightgallery.js/dist/css/lightgallery.css"
import { LightgalleryProvider } from "react-lightgallery";
import BreadCrumbs from "../shop-components/breadcrumbs"

export default function ProductPage({ pageContext, data: { pageData, wpPageQunatity, wpPage, allWcProduct } }) {
  wpPage.stock_quantity = wpPageQunatity.stockQuantity
  return (
    <Wrapper>
      <BreadCrumbs pageContext={pageContext} />
      <LightgalleryProvider galleryClassName="gallery">
        <Hero data={wpPage} />
      </LightgalleryProvider>
      <Contact>
        <h2 className="title">Masz pytania o&nbsp;produkt?</h2>
        <p className="text"><b>Napisz do mnie.</b> Chętnie rozwieję wszystkie wątpliwości.</p>
        <ContactPageForm dataForm={pageData.kontakt.pierwszaSekcja} />
      </Contact>
      <ProductSlider title={'Mogą cię zainteresować'} products={allWcProduct.nodes} />
    </Wrapper>
  )
}
export { Head } from "../components/Head/Head"

export const query = graphql`
query productPageQuery ($id: String!, $itemId: Int!){
  wpPageQunatity: wpProduct(databaseId: {eq: $itemId}) {
    ... on WpSimpleProduct {
    	stockQuantity
    }
  }
  wpPage: wcProduct(id: {eq: $id}) {
    seo : yoast_head_json{
      metaDesc : og_description
      opengraphSiteName : og_site_name
      title : og_title
    }
    stock_quantity
    id
    name
    slug
    databaseId
    stock_status
    description
    attributes {
      name
      options
    }
    images {
      alt
      name
      localFile{
        publicURL
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
  allWcProduct(filter: {id: {ne: $id}, stock_status: {eq: "instock"}, categories: {elemMatch: {slug: {ne: "wystawy"}}}}, sort: {date_created: DESC}, limit: 5) {
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
  pageData : wpPage(id: { eq: "cG9zdDo1NzM=" }) {
    kontakt {
      pierwszaSekcja {
        tytulFormularza
        pierwszyDuzyTekst
        opisPodPierwszymTekstem
        podpisPodObszaremDoWyslaniaWiadomosci
        trescPrzyciskuPotwierdzajacegoWyslanie
        zdjecieDlaFormularza {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieDlaTytuluFormularza {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tytulPolaEmail
        tytulPolaImie
        tytulPolaNazwisko
        tytulPolaNrTelefonu
        tytulPolaTrescWiadomosci
        zdjecieDoFormularzaMobile {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieDoFormularzaTablet {
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
`;

const Wrapper = styled.main`
  max-width: 1112px;
  width: 100%;
  margin: clamp(60px, ${60 / 768 * 100}vw, 90px) auto;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 90px;
    .breadcrumbs{
      padding: 0;
    }
  }
`

const Contact = styled.div`
  margin-top: 120px;
  .left{
    height: auto;
    .left-image{
      height: 100%;
    }

    @media (max-width: 560px){
      height: 100vw;
    }

    @media (max-width: 560px) {
      width: auto;

      .left-image{
        width: 100%;
      }
    }
  }

.title{
    font-family: 'Nocturne Serif';
    font-weight: 400;
    font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
    color: #23423D;
}
.text{
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    font-family: 'Roboto Condensed';

    b{
        font-weight: unset;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            background: #F6E2BA;
            left: -3px;
            right: 0;
            top: 40%;
            bottom: 0;
            z-index: -1;
            transform: translateY(20%);
        }
    }
}

`