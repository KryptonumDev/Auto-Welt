import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import GoogleMapsContact from "../components/GoogleMapsContact/GoogleMapsContact";
import ContactPageForm from "../components/ContactPageForm/ContactPageForm";
import Questions from "../components/Questions/Questions";
import Button from "../components/Button/Button";

import {
  StyledContact,
  StyledDesc,
  StyledBigImage,
  StyledButtonsWrapper,
  StyledBottomSection,
} from "../components/Contact/StyledContact";
import { StyledText } from "../components/Text/StyledText";


const Contact = ({ data }) => {

  return (
    <StyledContact>
      <StyledText
        as="h1"
        hasdeclaredfontsize="48px"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="45px 0 30px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.kontakt.pierwszaSekcja.pierwszyDuzyTekst}
      </StyledText>
      <StyledDesc>
        {parse(data.wpPage.kontakt.pierwszaSekcja.opisPodPierwszymTekstem)}
      </StyledDesc>
      <ContactPageForm dataForm={data.wpPage.kontakt.pierwszaSekcja} />
      <GoogleMapsContact mapData={data.wpPage.kontakt.mapa} />
      <Questions isContactPage />
      <StyledBottomSection>
        <StyledBigImage>
          <GatsbyImage
            image={getImage(
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.duzejZdjecie
                .localFile
            )}
            alt={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.duzejZdjecie
                ?.altText || " "
            }
            title={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.duzejZdjecie
                ?.title
            }
          />
        </StyledBigImage>
        <StyledButtonsWrapper>
          <Button
            whereGo={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo.url
            }
            text={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo.title
            }
            bgColor="var(--creamBg)"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasDeclaredPadding="8px 41px"
            hasFontSize={"21px"}
            hasTarget={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo
                .target
            }
            hoverBgColor="#F6E2BA"
            ariaLabel="link"
          />
          <Button
            whereGo={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo.url
            }
            text={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo
                .title
            }
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="8px 41px"
            hasFontSize={"21px"}
            hasTarget={
              data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo
                .target
            }
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
            ariaLabel="link"
          />
        </StyledButtonsWrapper>
      </StyledBottomSection>
    </StyledContact>
  );
};

export default Contact;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query contactQuery {
    wpPage(id: { eq: "cG9zdDo1NzM=" }) {
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
      kontakt {
        mapa {
          tytulNadMapka
          linkDoStronyZAdresemFirmy
          zdjecieMapyDesktop {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieMapyMobile {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieMapyTablet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
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
        sekcjaOTerminarzuNaDoleStrony {
          linkPoPrawo {
            target
            title
            url
          }
          linkPoLewo {
            target
            title
            url
          }
          duzejZdjecie {
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
