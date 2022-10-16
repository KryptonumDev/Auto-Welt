import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import CalendarComponent from "../CalendarComponent/CalendarComponent";
import Button from "../Button/Button";

import { 
  StyledHomeCalendar, 
  StyledFooterCar,
  StyledButtonWrapper
} from "./StyledHomeCalendar";
import { StyledText } from "../Text/StyledText";


const HomeCalendar = () => {
  const data = useStaticQuery(graphql`
  query calendarHome {
    wpPage(id: {eq: "cG9zdDoxNQ=="}) {
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
            data
            miejsce
          }
          title
        }
      }
    }
  }
  `)
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
        {data.wpPage.homepage.kalendarz.tytulSekcji}
      </StyledText>
      <CalendarComponent 
        exhibitions={
          data.allWpWystawa.edges.map(
            edge => ({
              ...edge.node.wystawa,
              title: edge.node.title
            })
          )
        }
      />
      <StyledButtonWrapper>
        <Button 
          text={data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza.title}
          whereGo={data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza.url}
          bgColor="var(--primary500)"
          textColor="var(--background50)"
          hasFontSize="21px"
          hasDeclaredPadding="10px 33px"
          hasTarget={data.wpPage.homepage.kalendarz.przyciskPrzenoszacyDoTerminarza.target}
          hoverBgColor="var(--primary900)"
        />
      </StyledButtonWrapper>
      <StyledFooterCar>
        <GatsbyImage
          image={getImage(data.wpPage.homepage.zdjecieSamochoduNadStopka.localFile)}
          alt={data.wpPage.homepage.zdjecieSamochoduNadStopka.altText}
        />
      </StyledFooterCar>
    </StyledHomeCalendar>
  );
};

export default HomeCalendar;
