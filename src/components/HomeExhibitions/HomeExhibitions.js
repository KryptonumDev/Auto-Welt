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

import { areDatesEqual } from "../../utils/date";

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
            trescPrzyciskuPrzenoszacegoDo {
              target
              title
              url
            }
            tytulSekcji
          }
        }
      }
    }
  `);
  const width = useWindowSize();

  const now = new Date();

  const slidesElements = data.allWpWystawa.edges
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
    .sort(
      (a, b) =>
        new Date(a.wystawa.informacjeOgolne.data).getTime() -
        new Date(b.wystawa.informacjeOgolne.data).getTime()
    )
    .filter(
      ({ wystawa }) =>
        wystawa.informacjeOgolne.data.getTime() > now.getTime() ||
        areDatesEqual(wystawa.informacjeOgolne.data, now)
    )
    .slice(0, 3);

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
        {data.wpPage.homepage.wystawy?.tytulSekcji}
      </StyledText>
      <StyledElementsWrapper>
        {slidesElements.map((node, index) => (
          <HomeExhibitionsElement
            key={index}
            exhibitionData={node}
            buttonVariant="orange"
            slidesCount={slidesElements.length}
          />
        ))}
      </StyledElementsWrapper>
      {data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo && (
        <Button
          text={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.title
          }
          whereGo={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.url
          }
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasFontSize={width < 376 ? "15px" : "21px"}
          hasDeclaredPadding={width < 1081 ? "10px 92px" : "10px 33px"}
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
          hasTarget={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.target
          }
        />
      )}
    </StyledHomeExhibitions>
  );
};

export default HomeExhibitions;
