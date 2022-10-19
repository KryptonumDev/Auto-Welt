import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";
import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement";

import { StyledText } from "../Text/StyledText";

import {
  StyledHomeExhibitions,
  StyledElementsWrapper,
} from "./StyledHomeExhibitions";

import useWindowSize from "../../utils/getWindowSize";

const HomeExhibitions = ({ isAboutPage }) => {
  const data = useStaticQuery(graphql`
  query currentExhibition {
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
              tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
              tloDlaMiejscaIDaty {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
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
    wpPage(id: { eq: "cG9zdDoxNQ==" }) {
      homepage {
        wystawy {
          trescPrzyciskuPrzenoszacegoDo
          tytulSekcji
        }
      }
    }
  }
  `)
  const width = useWindowSize();

  return (
    <StyledHomeExhibitions isaboutpage={isAboutPage}>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.homepage.wystawy.tytulSekcji}
      </StyledText>
      <StyledElementsWrapper>
        {data.allWpWystawa.edges.map(({ node }) => <HomeExhibitionsElement exhibitionData={node} />)}
      </StyledElementsWrapper>
      <Button
        text={data.wpPage.homepage.wystawy.trescPrzyciskuPrzenoszacegoDo}
        whereGo="/wystawy"
        textColor="var(--white)"
        bgColor="var(--primary500)"
        hasFontSize={width < 376 ? "15px" : "21px"}
        hasDeclaredPadding={width < 1081 ? "10px 92px" : "10px 33px"}
        hoverBgColor="var(--primary900)"
        hasBorder="2px solid var(--primary500)"
      />
    </StyledHomeExhibitions>
  );
};

export default HomeExhibitions;
