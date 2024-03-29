import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledExhibitionHeroSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTag,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledDataWrapper,
  StyledDataImage,
  StyledTitleWrapper
} from "./StyledExhibitionHeroSection";
import { StyledTagImage } from "../ArticleHeroSection/StyledArticleHeroSection";
import { StyledText } from "../Text/StyledText";

import { areDatesEqual } from "../../utils/date";

const ExhibitionHeroSection = ({ heroData }) => {
  const date = new Date(heroData.wystawa.informacjeOgolne.data),
    now = new Date();

  return (
    <StyledExhibitionHeroSection>
      <StyledLeftWrapper>
        <StyledTag>
          <StyledTagImage>
            <StaticImage
              src="../../images/wystawaBgActual.png"
              objectFit="fill"
              alt="tło"
            />
          </StyledTagImage>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="700"
            hasdeclaredfontcolor="#EDAC2A"
          >
            Wystawa{" "}
            {heroData?.wystawa?.informacjeOgolne
              ?.czyWystawaJestAktualnaJezeliNieToJestPlanowana
              ? "aktualna"
              : date.getTime() > now.getTime() || areDatesEqual(date, now)
                ? "planowana"
                : "archiwalna"}
          </StyledText>
        </StyledTag>
        <StyledTextWrapper>
          <StyledTitleWrapper>
            <h1>
              {parse(heroData?.wystawa.informacjeOgolne?.tytulPodZdjeciem.replace(/^<p[^>]*>|<\/p>$/g, ''))}
            </h1>
          </StyledTitleWrapper>
          {heroData.wystawa.wydarzenieSzablon?.sekcjaPowitalna
            ?.krotkiOpisPodTytulem ?
            parse(
              heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna
                ?.krotkiOpisPodTytulem
            ) : null}
        </StyledTextWrapper>
        <StyledDataWrapper>
          <StyledDataImage>
            <StaticImage src="../../images/wydarzenieData.png" alt="tło" />
          </StyledDataImage>
          <StyledText
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="#23423D"
            hasdeclaredlineheight="1.2em"
            hasdeclaredtextalign="center"
          >
            {
              heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna
                ?.rozwinietaData
            }
          </StyledText>
        </StyledDataWrapper>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledImageWrapper>
          <GatsbyImage
            image={getImage(
              heroData.wystawa.wydarzenieSzablon?.sekcjaPowitalna
                ?.duzeZdjeciePoPrawo?.localFile
            )}
            alt={
              heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna
                ?.duzeZdjeciePoPrawo?.altText || " "
            }
            title={
              heroData?.wystawa.wydarzenieSzablon?.sekcjaPowitalna
                ?.duzeZdjeciePoPrawo?.title
            }
          />
        </StyledImageWrapper>
      </StyledRightWrapper>
    </StyledExhibitionHeroSection>
  );
};

export default ExhibitionHeroSection;
