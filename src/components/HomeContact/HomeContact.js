import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import parse from "html-react-parser";

import HomeContactForm from "../HomeContactForm/HomeContactForm";
import Button from "../Button/Button";

import {
  StyledHomeContact,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledHeading,
  StyledModel,
  StyledTitleImage,
  StyledMessageWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledDesc,
  StyledButtonsWrapper,
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
            lewyObrazekMobile {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            lewyObrazekTablet {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            trescWiadomosciPoPoprawnymPrzeslaniu {
              opis
              podTytul
              przyciskPoPrawo
              tytul
              przyciskPoLewo {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  `);
  const [isSend, setIsSend] = useState(true);
  const imageShort = data.wpPage.homepage.formularzKontaktowy;
  const images = withArtDirection(getImage(imageShort.lewyObrazek.localFile), [
    {
      media: "(max-width: 375px)",
      image: getImage(imageShort.lewyObrazekMobile.localFile),
    },
    {
      media: "(max-width: 972px)",
      image: getImage(imageShort.lewyObrazekTablet.localFile),
    },
  ]);
  return (
    <StyledHomeContact>
      <StyledLeftWrapper>
        <StyledModel>
          {images && <GatsbyImage image={images} objectFit="fill" />}
        </StyledModel>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isSend ? (
          <>
            <StyledMessageWrapper>
              <StyledTitle>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.tytul &&
                  parse(imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.tytul)}
              </StyledTitle>
              <StyledSubTitle>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.podTytul &&
                  parse(
                    imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.podTytul
                  )}
              </StyledSubTitle>
              <StyledDesc>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.opis &&
                  parse(imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.opis)}
              </StyledDesc>
              <StyledButtonsWrapper>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.przyciskPoLewo
                  .title && (
                  <Button
                    whereGo={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoLewo.url
                    }
                    text={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoLewo.title
                    }
                    textColor="var(--white)"
                    bgColor="var(--primary500)"
                    hasDeclaredPadding="10px 36px"
                    hasFontSize="21px"
                    hasFontWeight="500"
                    hasTarget={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoLewo.target
                    }
                    hoverBgColor="var(--primary900)"
                    hasBorder="2px solid var(--primary500)"
                  />
                )}
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                  .przyciskPoPrawo && (
                  <Button
                    text={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoPrawo
                    }
                    bgColor="var(--creamBg)"
                    hasBorder="2px solid var(--primary500)"
                    textColor="var(--primary500)"
                    hasDeclaredPadding="10px 36px"
                    hasFontWeight="500"
                    hasFontSize="21px"
                  />
                )}
              </StyledButtonsWrapper>
            </StyledMessageWrapper>
          </>
        ) : (
          <>
            (
            <StyledHeading>
              <StyledTitleImage>
                <GatsbyImage
                  image={getImage(imageShort.zdjecieTytulu.localFile)}
                  alt={imageShort.formularzKontaktowy.zdjecieTytulu.altText}
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
                {imageShort.formularzKontaktowy.tytul}
              </StyledText>
            </StyledHeading>
            <HomeContactForm data={data} />)
          </>
        )}
      </StyledRightWrapper>
    </StyledHomeContact>
  );
};

export default HomeContact;
