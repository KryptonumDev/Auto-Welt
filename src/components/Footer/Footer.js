import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"

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
        }
      }
    }
  }
  `)
  return (
    <StyledFooter>
      <StyledImageWrapper>
        <StaticImage
          src="../../images/footerBg.jpg"
          alt="background"
          objectFit="cover"
        />
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