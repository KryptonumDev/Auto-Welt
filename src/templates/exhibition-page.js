import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ContactPageForm from "../components/ContactPageForm/ContactPageForm"
import Hero from "../shop-components/exhibition-hero"
import ProductSlider from "../shop-components/product-slider"
import "lightgallery.js/dist/css/lightgallery.css"
import HomeCalendar from "../components/HomeCalendar/HomeCalendar";
import { LightgalleryProvider } from "react-lightgallery"

export default function ProductPage({ data: { wpPage, wcProduct, allWcProduct } }) {
  return (
    <Wrapper>
      <LightgalleryProvider galleryClassName="gallery">
        <Hero data={wcProduct} />
      </LightgalleryProvider>
      <HomeCalendar />
      <Contact>
        <h2 className="title">Chcesz zamówić wystawę?</h2>
        <p className="text"><b>Napisz do mnie.</b></p>
        <ContactPageForm dataForm={wpPage.kontakt.pierwszaSekcja} />
      </Contact>
      <ProductSlider title={'Mogą cię zainteresować'} products={allWcProduct.nodes} />
    </Wrapper>
  )
}

export { Head } from "../components/Head/Head"

export const query = graphql`
query productPageQuery ($id: String!){
  wcProduct(id: {eq: $id}) {
    seo : yoast_head_json{
      metaDesc : og_description
      opengraphSiteName : og_site_name
      title : og_title
    }
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
  wpPage(id: { eq: "cG9zdDo1NzM=" }) {
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
  margin: 120px auto;
  padding: 0 16px;
  box-sizing: border-box;

  .calendar{
    margin-top: 120px;
    padding-bottom: 0;
    .gatsby-image-wrapper{
      display: none;
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