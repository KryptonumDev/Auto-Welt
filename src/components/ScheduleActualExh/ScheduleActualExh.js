import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledScheduleActualExh,
  StyledSliderWrapper,
  StyledButtonsWrapper,
} from "./StyledScheduleActualExh";
import ScheduleSlider from "../ScheduleSlider/ScheduleSlider";

import { areDatesEqual } from "../../utils/date";

const ScheduleActualExh = ({ dataActual }) => {
  const data = useStaticQuery(graphql`
    query actualeExhibit {
      allWpWystawa(
        filter: {
          wystawa: {
            informacjeOgolne: {
              czyWystawaJestAktualnaJezeliNieToJestPlanowana: { eq: true }
            }
          }
        }
      ) {
        edges {
          node {
            slug
            wystawa {
              informacjeOgolne {
                data
                elementyListy {
                  elementListy
                }
                miejsce
                tloDlaMiejscaIDaty {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
                tytulPodZdjeciem
                zdjecieDoMiniaturki {
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
      }
    }
  `);

  const now = new Date();

  return (
    <StyledScheduleActualExh>
      <StyledText
        hasdeclaredfontsize="48px"
        hasdeclaredlineheight="1.2em"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredtextalign="center"
        as="h2"
      >
        {dataActual.tytulNadSliderem && dataActual.tytulNadSliderem}
      </StyledText>
      <StyledSliderWrapper>
        <ScheduleSlider
          scheduleData={
            data.allWpWystawa.edges
            .map(edge => ({
              ...edge,
              date: new Date(edge.node.wystawa.informacjeOgolne.data)
            }))
            .filter(
              ({ date }) => date.getTime() > now.getTime() || areDatesEqual(date, now)
            )
          }
          variant="orange"
        />
      </StyledSliderWrapper>
      <StyledButtonsWrapper>
        {dataActual.przyciskPodSliderem.title && (
          <Button
            text={dataActual.przyciskPodSliderem.title}
            whereGo={dataActual.przyciskPodSliderem.url}
            hasTarget={dataActual.przyciskPodSliderem.target}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="10px 33px"
            hoverBgColor="var(--primary900)"
            hasFontSize="21px"
            hasBorder="2px solid var(--primary500)"
          />
        )}
      </StyledButtonsWrapper>
    </StyledScheduleActualExh>
  );
};

export default ScheduleActualExh;
