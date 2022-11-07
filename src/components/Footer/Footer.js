import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import FooterLeftWrapper from "../FooterLeftWrapper/FooterLeftWrapper";
import FooterCenterWrapper from "../FooterCenterWrapper/FooterCenterWrapper";
import FooterRightWrapper from "../FooterRightWrapper/FooterRightWrapper";

import {
  StyledFooter,
  StyledImageWrapper,
  StyledFooterMainWrapper,
} from "./StyledFooter";

const Footer = () => {
  const data = useStaticQuery(graphql`
  query footerQuery {
    wpPage(id: {eq: "cG9zdDozMw=="}) {
      globalConfig {
        stopka {
          stworzonePrzezKryptonumTekst
          adres {
            linijkaAdresu
          }
          email
          imie
          kontaktTytul
          linkDoFacebooka
          linkDoInstagrama
          logo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tekstPodLogiem
          telefon
          przyciskPrzenoszacyDoTerminarza {
            target
            title
            url
          }
          wydarzeniaTytul
          szybkieLinkiTytul
          tloDlaStopkiWersjaDesktop {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloDlaStopkiWersjaMobile {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloDlaStopkiWersjaTablet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          logoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          logoTablet {
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
  `);
  const imageShort = data.wpPage.globalConfig.stopka;
  const images = withArtDirection(
    getImage(imageShort.tloDlaStopkiWersjaDesktop.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(imageShort.tloDlaStopkiWersjaMobile.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(imageShort.tloDlaStopkiWersjaTablet.localFile),
      },
    ]
  );
  return (
    <StyledFooter>
      <StyledImageWrapper>
        {images && (
          <GatsbyImage
            image={images}
            alt={imageShort.tloDlaStopkiWersjaTablet?.altText}
            title={imageShort.tloDlaStopkiWersjaTablet?.title}
          />
        )}
      </StyledImageWrapper>
      <StyledFooterMainWrapper>
        <FooterLeftWrapper footerData={data.wpPage.globalConfig.stopka} />
        <FooterCenterWrapper footerData={data.wpPage.globalConfig.stopka} />
        <FooterRightWrapper footerData={data.wpPage.globalConfig.stopka} />
      </StyledFooterMainWrapper>
    </StyledFooter>
  );
};

export default Footer;
