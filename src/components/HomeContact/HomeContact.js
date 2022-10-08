import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import HomeContactForm from "../HomeContactForm/HomeContactForm";

import {
  StyledHomeContact,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledHeading,
  StyledModel,
  StyledTitleImage
} from "./StyledHomeContact";
import { StyledText } from "../Text/StyledText";

const HomeContact = () => {
  const data = useStaticQuery(graphql`
  query homeContact {
    wpPage(id: { eq: "cG9zdDoxNQ==" }) {
      homepage {
        formularzKontaktowy {
          tytul
          tytulPola
          tytulPolaImie
          tytulPolaEMail
          tytulPolaNrTelefonu
          tytulPolaNazwisko
          trescPrzyciskuPotwierdzajacegoWyslanie
          podpisPodObszaremDoWyslaniaWiadomosci
          lewyObrazek {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTytulu {
            altText
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
  `)
  return (
    <StyledHomeContact>
      <StyledLeftWrapper>
        <StyledModel>
          <GatsbyImage
            image={getImage(data.wpPage.homepage.formularzKontaktowy.lewyObrazek.localFile)}
            alt={data.wpPage.homepage.formularzKontaktowy.lewyObrazek.altText}
          />
        </StyledModel>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledHeading>
          <StyledTitleImage>
            <GatsbyImage
              image={getImage(data.wpPage.homepage.formularzKontaktowy.zdjecieTytulu.localFile)}
              alt={data.wpPage.homepage.formularzKontaktowy.zdjecieTytulu.altText}
              objectFit="fill"
            />
          </StyledTitleImage>
          <StyledText
            as="h2"
            hasdeclaredfontsize="clamp(16px, 28px, 32px)"
            hasdeclaredtextalign="center"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredfontfamily="Nocturne Serif"
          >
            {data.wpPage.homepage.formularzKontaktowy.tytul}
          </StyledText>
        </StyledHeading>
        <HomeContactForm data={data} />
      </StyledRightWrapper>
    </StyledHomeContact>
  );
};

export default HomeContact;
