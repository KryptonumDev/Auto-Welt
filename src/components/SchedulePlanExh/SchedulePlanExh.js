import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledSchedulePlanExh,
  StyledSliderWrapper,
  StyledButtonsWrapper,
} from "./StyledSchedulePlanExh";
import ScheduleSlider from "../ScheduleSlider/ScheduleSlider";

const SchedulePlanExh = ({ dataPlan }) => {
  const data = useStaticQuery(graphql`
    query planExhibit {
      allWpWystawa(
        filter: {
          wystawa: {
            informacjeOgolne: {
              czyWystawaJestAktualnaJezeliNieToJestPlanowana: { eq: null }
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
  return (
    <StyledSchedulePlanExh>
      <StyledText
        hasdeclaredfontsize="48px"
        hasdeclaredlineheight="1.2em"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredtextalign="center"
        as="h2"
      >
        {dataPlan.tytulSekcji}
      </StyledText>
      <StyledSliderWrapper>
        <ScheduleSlider
          scheduleData={data.allWpWystawa.edges}
          variant="green"
        />
      </StyledSliderWrapper>
      <StyledButtonsWrapper>
        <Button
          text={dataPlan.przyciskPodSliderem.title}
          whereGo={dataPlan.przyciskPodSliderem.url}
          hasTarget={dataPlan.przyciskPodSliderem.target}
          hasDeclaredPadding="10px 33px"
          bgColor="var(--secondary500)"
          textColor="var(--primary900)"
          hasFontSize="21px"
          hoverBgColor="var(--secondary700)"
          hasBorder="2px solid transparent"
        />
      </StyledButtonsWrapper>
    </StyledSchedulePlanExh>
  );
};

export default SchedulePlanExh;
