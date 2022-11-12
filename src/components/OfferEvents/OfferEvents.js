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

import { areDatesEqual } from "../../utils/date";

const OfferEvents = ({ dataEvents }) => {
  const data = useStaticQuery(graphql`
    query currentOfferExhibition {
      allWpWystawa(limit: 2) {
        edges {
          node {
            slug
            wystawa {
              stronaOfertaInformacjeDlaElementowWSekcjiEventy {
                tytulPrzyciskuPrzenoszacyDlaStronyWydarzenia
                tytulZUwzglednieniemMiasta
                wiekszaMiniaturkaNaStroneOferty {
                  altText
                  title
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

  const now = new Date();

  return (
    <StyledOfferEvents>
      <StyledText
        as="h2"
        hasdeclaredfontsize="48px"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {dataEvents?.tytul ? dataEvents?.tytul : null}
      </StyledText>
      <StyledTextWrapper>
        {dataEvents?.tekstPodTytulem ? parse(dataEvents?.tekstPodTytulem) : null}
      </StyledTextWrapper>
      <StyledEventsWrapper>
        {data.allWpWystawa?.edges
          .map(({ node }) => ({
            ...node,
            wystawa: {
              ...node.wystawa,
              informacjeOgolne: {
                ...node.wystawa.informacjeOgolne,
                data: new Date(node.wystawa.informacjeOgolne.data),
              },
            },
          }))
          .filter(
            ({ wystawa }) =>
              wystawa.informacjeOgolne.data.getTime() > now.getTime() ||
              areDatesEqual(wystawa.informacjeOgolne.data, now)
          )
          .sort(
            // malejąco - 'b-a'
            (a, b) =>
              a.wystawa.informacjeOgolne.data.getTime() -
              b.wystawa.informacjeOgolne.data.getTime()
          )
          .map((node, index) => (
            <OfferEvent key={index} offerData={node.wystawa} slug={node.slug} />
          ))}
      </StyledEventsWrapper>
      <StyledEventsButtonWrapper>
        {dataEvents?.przyciskPoLewo.url ? (
          <Button
            whereGo={dataEvents.przyciskPoLewo?.url}
            text={dataEvents.przyciskPoLewo?.title}
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasFontSize="21px"
            hasDeclaredPadding="8px 33px"
            hasTarget={dataEvents.przyciskPoLewo?.target}
            bgColor="var(--background500)"
            hoverBgColor="#F6E2BA"
            ariaLabel="link"
          />
        ) : null}
        {dataEvents?.przyciskPoPrawo.url ? (
          <Button
            whereGo={dataEvents.przyciskPoPrawo?.url}
            text={dataEvents.przyciskPoPrawo?.title}
            hasTarget={dataEvents.przyciskPoPrawo?.target}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasFontSize="21px"
            hasDeclaredPadding="8px 33px"
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
            ariaLabel="link"
          />
        ) : null}
      </StyledEventsButtonWrapper>
    </StyledOfferEvents>
  );
};

export default OfferEvents;
