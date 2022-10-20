import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";
import OfferEvent from "../OfferEvent/OfferEvent";

import parse from "html-react-parser";

import { StyledText } from "../Text/StyledText";
import {
  StyledOfferEvents,
  StyledEventsWrapper,
  StyledEventsButtonWrapper,
  StyledTextWrapper,
} from "./StyledOfferEvents";

const OfferEvents = ({ dataEvents }) => {
  const data = useStaticQuery(graphql`
    query currentOfferExhibition {
      allWpWystawa {
        edges {
          node {
            slug
            wystawa {
              stronaOfertaInformacjeDlaElementowWSekcjiEventy {
                tytulPrzyciskuPrzenoszacyDlaStronyWydarzenia
                tytulZUwzglednieniemMiasta
                wiekszaMiniaturkaNaStroneOferty {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              informacjeOgolne {
                data
                miejsce
              }
            }
          }
        }
      }
    }
  `);
  return (
    <StyledOfferEvents>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {dataEvents.tytul && dataEvents.tytul}
      </StyledText>
      <StyledTextWrapper>
        {dataEvents.tekstPodTytulem && parse(dataEvents.tekstPodTytulem)}
      </StyledTextWrapper>
      <StyledEventsWrapper>
        {data.allWpWystawa?.edges.map(({ node }, index) => (
          <OfferEvent key={index} offerData={node.wystawa} slug={node.slug} />
        ))}
      </StyledEventsWrapper>
      <StyledEventsButtonWrapper>
        {dataEvents.przyciskPoLewo.url && (
          <Button
            whereGo={dataEvents.przyciskPoLewo.url}
            text={dataEvents.przyciskPoLewo.title}
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasFontSize="21px"
            hasDeclaredPadding="10px 33px"
            hasTarget={dataEvents.przyciskPoLewo.target}
            bgColor="var(--background500)"
          />
        )}
        {dataEvents.przyciskPoPrawo.url && (
          <Button
            whereGo={dataEvents.przyciskPoPrawo.url}
            text={dataEvents.przyciskPoPrawo.title}
            hasTarget={dataEvents.przyciskPoPrawo.target}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasFontSize="21px"
            hasDeclaredPadding="10px 33px"
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
          />
        )}
      </StyledEventsButtonWrapper>
    </StyledOfferEvents>
  );
};

export default OfferEvents;
