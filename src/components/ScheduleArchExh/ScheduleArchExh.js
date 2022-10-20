import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledScheduleArchExh,
  StyledElements,
  StyledbuttonsWrapper,
  StyledElement,
} from "./StyledScheduleArchExh";

const ScheduleArchExh = ({ dataArch }) => {
  const data = useStaticQuery(graphql`
    query archExhibi {
      allWpWystawa {
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
    <StyledScheduleArchExh>
      <StyledText
        hasdeclaredfontsize="48px"
        hasdeclaredlineheight="1.2em"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredtextalign="center"
      >
        {dataArch.tytulNadSliderem}
      </StyledText>
      <StyledElements>
        <StyledElement></StyledElement>
      </StyledElements>
      <StyledbuttonsWrapper>
        <Button
          whereGo={dataArch.lewyPrzyciskPodSliderem.url}
          text={dataArch.lewyPrzyciskPodSliderem.title}
          bgColor="var(--creamBg)"
          hasBorder="2px solid var(--primary500)"
          textColor="var(--primary500)"
          hasDeclaredPadding="10px 36px"
          hasFontWeight="500"
          hasFontSize="21px"
          hasTarget={dataArch.lewyPrzyciskPodSliderem.target}
        />
        <Button
          whereGo={dataArch.prawyPrzyciskPodSliderem.url}
          text={dataArch.prawyPrzyciskPodSliderem.title}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasDeclaredPadding="10px 36px"
          hasFontSize="21px"
          hasFontWeight="500"
          hasTarget={dataArch.prawyPrzyciskPodSliderem.target}
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
        />
      </StyledbuttonsWrapper>
    </StyledScheduleArchExh>
  );
};

export default ScheduleArchExh;
