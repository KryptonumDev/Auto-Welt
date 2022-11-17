import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
  StyledBackgroundCar,
  StyledCarBgImage,
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
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieTytulu {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            lewyObrazekTablet {
              altText
              title
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
            lewyObrazekTabletSamochody {
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
  const [isSend, setIsSend] = useState(false);
  const imageShort = data.wpPage.homepage.formularzKontaktowy;
  return (
    <StyledHomeContact>
      <StyledLeftWrapper>
        <StyledModel>
          {imageShort.lewyObrazek.localFile && (
            <GatsbyImage
              className="desctop"
              image={getImage(imageShort.lewyObrazek?.localFile)}
              alt={imageShort.lewyObrazek?.altText || " "}
              title={imageShort.lewyObrazek?.title}
              objectFit="fill"
            />
          )}
          <StyledBackgroundCar className="mobile">
            <GatsbyImage
              image={getImage(imageShort.lewyObrazekTablet?.localFile)}
              alt={imageShort.lewyObrazekTablet?.altText || " "}
              title={imageShort.lewyObrazekTablet?.title}
            />
          </StyledBackgroundCar>
          <StyledCarBgImage className="mobile">
            <GatsbyImage
              image={getImage(
                imageShort.lewyObrazekTabletSamochody?.localFile
              )}
              alt={imageShort.lewyObrazekTabletSamochody?.altText || " "}
              title={imageShort.lewyObrazekTabletSamochody?.title}
            />
          </StyledCarBgImage>
        </StyledModel>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isSend ? (
          <>
            <StyledMessageWrapper>
              <StyledTitle>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.tytul ?
                  parse(imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.tytul) : null}
              </StyledTitle>
              <StyledSubTitle>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.podTytul ?
                  parse(
                    imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.podTytul
                  ) : null}
              </StyledSubTitle>
              <StyledDesc>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.opis ?
                  parse(imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.opis) : null}
              </StyledDesc>
              <StyledButtonsWrapper>
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu.przyciskPoLewo
                  .title ? (
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
                    hasDeclaredPadding="8px 36px"
                    hasFontSize="21px"
                    hasFontWeight="700"
                    hasTarget={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoLewo.target
                    }
                    hoverBgColor="var(--primary900)"
                    hasBorder="2px solid var(--primary500)"
                    ariaLabel="link"
                  />
                ) : null}
                {imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                  .przyciskPoPrawo ? (
                  <Button
                    text={
                      imageShort.trescWiadomosciPoPoprawnymPrzeslaniu
                        .przyciskPoPrawo
                    }
                    bgColor="var(--creamBg)"
                    hasBorder="2px solid var(--primary500)"
                    textColor="var(--primary500)"
                    hasDeclaredPadding="8px 36px"
                    hasFontWeight="700"
                    hasFontSize="21px"
                    onClickHandler={() => setIsSend(false)}
                    ariaLabel="link"
                  />
                ) : null}
              </StyledButtonsWrapper>
            </StyledMessageWrapper>
          </>
        ) : (
          <>
            <StyledHeading>
              <StyledTitleImage>
                {imageShort.zdjecieTytulu.localFile ? (
                  <GatsbyImage
                    image={getImage(imageShort?.zdjecieTytulu?.localFile)}
                    alt={imageShort?.zdjecieTytulu?.altText || " "}
                    title={imageShort?.zdjecieTytulu?.title}
                    objectFit="fill"
                  />
                ) : null}
              </StyledTitleImage>
              <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(16px, 28px, 32px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredfontfamily="Nocturne Serif"
              >
                {imageShort.tytul ? imageShort.tytul : null}
              </StyledText>
            </StyledHeading>
            <HomeContactForm data={data} afterSubmit={() => setIsSend(true)} />
          </>
        )}
      </StyledRightWrapper>
    </StyledHomeContact>
  );
};

export default HomeContact;
