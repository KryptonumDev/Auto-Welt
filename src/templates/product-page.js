import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ContactPageForm from "../components/ContactPageForm/ContactPageForm"
import CanInterest from "../shop-components/can-interest"
import Hero from "../shop-components/product-hero"

export default function ProductPage({ data: { wpPage, wcProduct } }) {
  return (
    <Wrapper>
      <Hero data={wcProduct} />
      <Contact>
        <h2 className="title">Masz pytania o&nbsp;produkt?</h2>
        <p className="text"><b>Napisz do mnie.</b> Chętnie rozwieję wszystkie wątpliwości.</p>
        <ContactPageForm dataForm={wpPage.kontakt.pierwszaSekcja} />
      </Contact>
      <CanInterest />
    </Wrapper>
  )
}


// seo {
//   canonical
//   metaDesc
//   opengraphSiteName
//   title
//   opengraphUrl
//   opengraphImage {
//     localFile {
//       publicURL
//     }
//   }
// }
// export { Head } from "../components/Head/Head"

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

const Wrapper = styled.div`
  max-width: 1112px;
  width: 100%;
  margin: 120px auto;
  padding: 0 16px;
  box-sizing: border-box;
`

const Contact = styled.div`
  margin-top: 120px;
  .left{
      height: auto;
    .left-image{
      height: 100%;
    }

    @media (max-width: 560px) {
      height: auto;
      width: auto;

      .left-image{
        width: 100%;
        height: auto;
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