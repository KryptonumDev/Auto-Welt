import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";
import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement";

import { StyledText } from "../Text/StyledText";

import {
  StyledHomeExhibitions,
  StyledElementsWrapper,
} from "./StyledHomeExhibitions";

const HomeExhibitions = () => {
  const data = useStaticQuery(graphql`
  query currentExhibition {
    allWpWystawa {
      edges {
        node {
          slug
          wystawa {
            data
            tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
            elementyListy {
              elementListy
            }
            informacjeDlaMiniaturki
            miejsce
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
  return (
    <StyledHomeExhibitions>
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
        hasMaxWidth="188px"
        hasFontSize="clamp(12px, 21px, 24px)"
        hasDeclaredPadding="10px 33px"
      />
    </StyledHomeExhibitions>
  );
};

export default HomeExhibitions;
