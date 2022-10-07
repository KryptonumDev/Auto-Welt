import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import RecInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";
import HomeCollectionElement from "../HomeCollectionElement/HomeCollectionElement";

import {
  StyledHomeCollections,
  StyledImagesWrapper,
  StyledImage,
} from "./StyledHomeCollections";
import { StyledText } from "../Text/StyledText";

import useWindowSize from "../../utils/getWindowSize";

const HomeCollections = () => {
  const width = useWindowSize();
  const { allWpKolekcje, wpPage } = useStaticQuery(graphql`
    query kolekcjeHomePage {
      allWpKolekcje {
        nodes {
          kolekcja {
            informacjeGlowne {
              trescPrzyciskuPrzenoszacegoDoStronyKolekcji
              nazwaKolekcji
              miniaturka {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              tloDlaMiniaturkiNaStroneGlowna {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          slug
        }
      }
      wpPage(id: { eq: "cG9zdDoxNQ==" }) {
        homepage {
          kolekcje {
            duzeZdjeciePrzyczepioneDoPrawejKrawedzi {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            trescTekstuWZielonymProstokacie
            gdzieMaPrzenosicPrzycisk {
              title
              url
              target
            }
          }
        }
      }
    }
  `);
  return (
    <StyledHomeCollections>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="80px 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        Kolekcje:
      </StyledText>
      <StyledImagesWrapper>
        {allWpKolekcje.nodes.map((kolekcja) => (
          <HomeCollectionElement
            bgImage={
              kolekcja.kolekcja.informacjeGlowne.tloDlaMiniaturkiNaStroneGlowna
            }
            image={kolekcja.kolekcja.informacjeGlowne.miniaturka}
            buttonText={
              kolekcja.kolekcja.informacjeGlowne
                .trescPrzyciskuPrzenoszacegoDoStronyKolekcji
            }
            whereGo={kolekcja.slug}
          />
        ))}
        <StyledImage>
          <GatsbyImage
            image={getImage(
              wpPage.homepage.kolekcje.duzeZdjeciePrzyczepioneDoPrawejKrawedzi
                .localFile
            )}
            alt={
              wpPage.homepage.kolekcje.duzeZdjeciePrzyczepioneDoPrawejKrawedzi
                .altText
            }
            objectFit="fill"
          />
        </StyledImage>
      </StyledImagesWrapper>
      <RecInfoWithButton
        text={wpPage.homepage.kolekcje.trescTekstuWZielonymProstokacie}
        btnText={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.title}
        btnWhereGo={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.url}
        hasTarget={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.target}
        btnPadding={width < 937 ? "10px 44px" : "10px 22px"}
        btnBgColor="var(--secondary500)"
        btnColor="var(--primary900)"
        isMoveLeft
      />
    </StyledHomeCollections>
  );
};

export default HomeCollections;
