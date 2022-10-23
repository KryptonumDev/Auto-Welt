import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage, withArtDirection } from "gatsby-plugin-image";

import RecInfoWithButton from "../../components/RecInfoWithButton/RecInfoWithButton";

import { StyledText } from "../Text/StyledText";
import {
  StyledArticlesPageShowCollections,
  StyledSlidesWrapper,
  StyledSlide,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledTitleImage,
  StyledTitleWrapper,
  StyledReqWrapper,
} from "./StyledArticlesPageShowCollections";

const ArticlesPageShowCollections = ({ collectionData }) => {
  const images = withArtDirection(
    getImage(collectionData.zdjecieTlaDlaZielonegoProstokatu.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(
          collectionData.zdjecieTlaDlaZielonegoProstokataMobile.localFile
        ),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(
          collectionData.zdjecieTlaDlaZielonegoProstokataTablet.localFile
        ),
      },
    ]
  );
  return (
    <>
      <StyledArticlesPageShowCollections>
        <StyledText
          hasdeclaredfontsize="48px"
          as="h2"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredlineheight="1.2em"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="#23423D"
        >
          {collectionData?.tytulSekcji}
        </StyledText>
        <StyledSlidesWrapper>
          <StyledSlide>
            <StyledImageWrapper>
              <GatsbyImage
                image={getImage(
                  collectionData.pierwszaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.duzaMiniaturka
                    ?.localFile
                )}
                alt={
                  collectionData.pierwszaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.duzaMiniaturka
                    ?.altText
                }
              />
            </StyledImageWrapper>
            <StyledTextWrapper to={`/kolekcje-modeli/${collectionData.pierwszaKolekcjaKtoraPolecasz.slug}`}>
              <StyledTitleImage>
                <StaticImage
                  src="../../images/polecanaKolekcja.png"
                />
              </StyledTitleImage>
              <StyledTitleWrapper>
                <StyledText
                  hasdeclaredfontsize="28px"
                  hasdeclaredfontfamily="Nocturne Serif"
                  hasdeclaredlineheight="1.2em"
                  hasdeclaredfontcolor="#23423D"
                  hasdeclaredtextalign="center"
                >
                  {collectionData.pierwszaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.nazwaKolekcji}
                </StyledText>
              </StyledTitleWrapper>
            </StyledTextWrapper>
          </StyledSlide>
          <StyledSlide>
            <StyledImageWrapper>
              <GatsbyImage
                image={getImage(
                  collectionData.drugaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.duzaMiniaturka
                    ?.localFile
                )}
                alt={
                  collectionData.drugaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.duzaMiniaturka
                    ?.altText
                }
              />
            </StyledImageWrapper>
            <StyledTextWrapper to={`/kolekcje-modeli/${collectionData.drugaKolekcjaKtoraPolecasz.slug}`}>
              <StyledTitleImage>
                <StaticImage
                  src="../../images/polecanaKolekcja.png"
                />
              </StyledTitleImage>
              <StyledTitleWrapper>
                <StyledText
                  hasdeclaredfontsize="28px"
                  hasdeclaredfontfamily="Nocturne Serif"
                  hasdeclaredlineheight="1.2em"
                  hasdeclaredfontcolor="#23423D"
                  hasdeclaredtextalign="center"
                >
                  {collectionData.drugaKolekcjaKtoraPolecasz.kolekcja.informacjeGlowne.nazwaKolekcji}
                </StyledText>
              </StyledTitleWrapper>
            </StyledTextWrapper>
          </StyledSlide>
        </StyledSlidesWrapper>
      </StyledArticlesPageShowCollections>
      <StyledReqWrapper>
        <RecInfoWithButton
          bgImage={images}
          text={collectionData?.tekstWZielonymProstokacie}
          btnText={collectionData?.linkWZielonymProstokacie.title}
          btnWhereGo={collectionData?.linkWZielonymProstokacie.url}
          hasTarget={collectionData?.linkWZielonymProstokacie.target}
          btnPadding="10px 33px"
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          btnFontSize="21px"
          btnHoverBg="var(--secondary700)"
        />
      </StyledReqWrapper>
    </>
  );
};

export default ArticlesPageShowCollections;
