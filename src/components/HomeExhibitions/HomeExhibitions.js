import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";
import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement";

import { StyledText } from "../Text/StyledText";

import {
  StyledHomeExhibitions,
  StyledElementsWrapper,
} from "./StyledHomeExhibitions";


import { areDatesEqual } from "../../utils/date";

const HomeExhibitions = ({ isAboutPage }) => {
  const data = useStaticQuery(graphql`
    query currentExhibition {
      allWpWystawa {
        nodes {
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
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                tytulPodZdjeciem
                zdjecieDoMiniaturki {
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

  const slidesElements = useMemo(() => {
    const now = new Date();
    return data.allWpWystawa.nodes
      .sort(
        (a, b) => {
          var aa = a.wystawa.informacjeOgolne.data.split('-').join(),
            bb = b.wystawa.informacjeOgolne.data.split('-').join();
          return aa < bb ? -1 : (aa > bb ? 1 : 0);
        }
      )
      .filter(
        ({ wystawa }) => {
          let firstCondition = new Date(wystawa.informacjeOgolne.data).getTime() > now.getTime()
          let secondCondition = areDatesEqual(new Date(wystawa.informacjeOgolne.data), now)
          return firstCondition || secondCondition
        }
      )
      .slice(0, 3);
  }, [data.allWpWystawa.edges])

  if(slidesElements.length === 0) return null

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
      <StyledElementsWrapper slides={slidesElements.length}>
        {slidesElements.map((node, index) => (
          <HomeExhibitionsElement
            key={index + node.wystawa.informacjeOgolne.miejsce}
            exhibitionData={node}
            buttonVariant="orange"
            slidesCount={slidesElements.length}
          />
        ))}
      </StyledElementsWrapper>
      {data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo ? (
        <Button
          text={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.title
          }
          whereGo={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.url
          }
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasFontSize={"21px"}
          hasDeclaredPadding={"10px 33px"}
          hoverBgColor="var(--primary900)"
          hasBorder="2px solid var(--primary500)"
          hasTarget={
            data.wpPage.homepage.wystawy?.trescPrzyciskuPrzenoszacegoDo?.target
          }
          ariaLabel="link"
        />
      ) : null}
    </StyledHomeExhibitions>
  );
};

export default HomeExhibitions;
