import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import CalendarComponent from "../CalendarComponent/CalendarComponent";
import Button from "../Button/Button";

import {
  StyledHomeCalendar,
  StyledFooterCar,
  StyledButtonWrapper,
} from "./StyledHomeCalendar";
import { StyledText } from "../Text/StyledText";

const HomeCalendar = () => {
  const data = useStaticQuery(graphql`
    query calendarHome {
      wpPage(id: { eq: "cG9zdDoxNQ==" }) {
        homepage {
          kalendarz {
            tytulSekcji
            przyciskPrzenoszacyDoTerminarza {
              target
              title
              url
            }
          }
          zdjecieSamochoduNadStopka {
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
      allWpWystawa {
        edges {
          node {
            wystawa {
              informacjeOgolne {
                data
                dataZakonczenia
                miejsce
                tytulDoKalendarzaNaStroneGlownaKrotki
                elementyListy {
                  elementListy
                }
              }
            }
            title
            slug
          }
        }
      }
    }
  `);
  return (
    <StyledHomeCalendar>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.homepage.kalendarz.tytulSekcji ?
          data.wpPage.homepage.kalendarz.tytulSekcji : null}
      </StyledText>
      <CalendarComponent
        exhibitions={data.allWpWystawa.edges.map((edge) => ({
          ...edge.node.wystawa.informacjeOgolne,
          data: new Date(edge.node.wystawa.informacjeOgolne.data),
          dataZakonczenia: new Date(edge.node.wystawa.informacjeOgolne.dataZakonczenia),
          title: edge.node.wystawa.informacjeOgolne.tytulDoKalendarzaNaStroneGlownaKrotki,
          slug: edge.node.slug,
          elementyListy: edge.node.wystawa.informacjeOgolne.elementyListy
        }))}
      />
      <StyledButtonWrapper>
        {data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza
          .title ? (
          <Button
            text={
              data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza
                .title
            }
            whereGo={
              data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza.url
            }
            bgColor="var(--primary500)"
            textColor="var(--background50)"
            hasFontSize="21px"
            hasDeclaredPadding="8px 33px"
            hasTarget={
              data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza
                .target
            }
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
            ariaLabel="link"
          />
        ) : null}
      </StyledButtonWrapper>
      <StyledFooterCar>
        {data.wpPage.homepage.zdjecieSamochoduNadStopka.localFile ? (
          <GatsbyImage
            image={getImage(
              data.wpPage.homepage.zdjecieSamochoduNadStopka.localFile
            )}
            alt={data.wpPage.homepage.zdjecieSamochoduNadStopka.altText || " "}
            title={data.wpPage.homepage.zdjecieSamochoduNadStopka.title}
          />
        ) : null}
      </StyledFooterCar>
    </StyledHomeCalendar>
  );
};

export default HomeCalendar;
