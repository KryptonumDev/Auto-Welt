import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import RecInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";
import HomeCollectionElement from "../HomeCollectionElement/HomeCollectionElement";

import {
  StyledHomeCollections,
  StyledImagesWrapper,
  StyledImage,
  StyledRecButtonWrapper,
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
              kolejnoscWyswietlania
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
            tytulSekcji
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
            tloDlaZielonegoProstokatu {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            tloMobileDlaZielonegoProsotkatu {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            tloTabletDlaZielonegoProsotkatu {
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
  `);
  const imageShort = wpPage.homepage.kolekcje;
  const images = withArtDirection(
    getImage(imageShort.tloDlaZielonegoProstokatu.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(imageShort.tloMobileDlaZielonegoProsotkatu.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(imageShort.tloTabletDlaZielonegoProsotkatu.localFile),
      },
    ]
  );
  return (
    <>
      <StyledHomeCollections>
        <StyledText
          as="h2"
          hasdeclaredfontsize="clamp(24px, 48px, 60px)"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredmargin="80px 0 40px"
          hasdeclaredfontfamily="Nocturne Serif"
        >
          {wpPage.homepage.kolekcje.tytulSekcji &&
            wpPage.homepage.kolekcje.tytulSekcji}
        </StyledText>
        <StyledImagesWrapper>
          {allWpKolekcje.nodes
            ?.sort(
              (a, b) =>
                a.kolekcja.informacjeGlowne.kolejnoscWyswietlania -
                b.kolekcja.informacjeGlowne.kolejnoscWyswietlania
            )
            .map((kolekcja) => (
              <HomeCollectionElement
                bgImage={
                  kolekcja.kolekcja.informacjeGlowne
                    .tloDlaMiniaturkiNaStroneGlowna
                }
                image={kolekcja.kolekcja.informacjeGlowne.miniaturka}
                buttonText={kolekcja.kolekcja.informacjeGlowne.nazwaKolekcji}
                whereGo={kolekcja.slug}
              />
            ))}
          <StyledImage>
            {wpPage.homepage.kolekcje.duzeZdjeciePrzyczepioneDoPrawejKrawedzi
              .localFile && (
              <GatsbyImage
                image={getImage(
                  wpPage.homepage.kolekcje
                    .duzeZdjeciePrzyczepioneDoPrawejKrawedzi.localFile
                )}
                alt={
                  wpPage.homepage.kolekcje
                    .duzeZdjeciePrzyczepioneDoPrawejKrawedzi.altText
                }
                objectFit="fill"
              />
            )}
          </StyledImage>
        </StyledImagesWrapper>
      </StyledHomeCollections>
      <StyledRecButtonWrapper>
        {wpPage.homepage.kolekcje.trescTekstuWZielonymProstokacie && (
          <RecInfoWithButton
            text={wpPage.homepage.kolekcje.trescTekstuWZielonymProstokacie}
            btnText={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.title}
            btnWhereGo={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.url}
            hasTarget={wpPage.homepage.kolekcje.gdzieMaPrzenosicPrzycisk.target}
            btnPadding={width < 937 ? "10px 44px" : "10px 22px"}
            btnBgColor="var(--secondary500)"
            btnColor="var(--primary900)"
            bgImage={images}
            isMoveLeft={true}
            btnFontSize="21px"
            btnHoverBg="var(--secondary700)"
          />
        )}
      </StyledRecButtonWrapper>
    </>
  );
};

export default HomeCollections;
