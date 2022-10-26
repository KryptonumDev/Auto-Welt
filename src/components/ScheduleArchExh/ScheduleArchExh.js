import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledScheduleArchExh,
  StyledElements,
  StyledbuttonsWrapper,
  StyledElement,
  StyledImage,
  StyledInfoWrapper,
  StyledDataWrapper,
  StyledContentWrapper,
  StyledContentList,
  StyledButtonWrapper,
  StyledBgWrapper,
} from "./StyledScheduleArchExh";

import ListIcon from "../../images/greenIcon.svg";

import { areDatesEqual } from "../../utils/date";

const ScheduleArchExh = ({ dataArch }) => {
  const [imagesIndex, setImagesIndex] = useState(3);
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
              stronaOfertaInformacjeDlaElementowWSekcjiEventy {
                wiekszaMiniaturkaNaStroneOferty {
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
    <StyledScheduleArchExh>
      <StyledText
        hasdeclaredfontsize="48px"
        hasdeclaredlineheight="1.2em"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredtextalign="center"
        as="h2"
      >
        {dataArch.tytulNadSliderem}
      </StyledText>
      <StyledElements>
        {data.allWpWystawa.edges
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
              wystawa.informacjeOgolne.data.getTime() < now.getTime() &&
              !areDatesEqual(wystawa.informacjeOgolne.data, now)
          )
          .sort(
            // malejąco - 'b-a'
            (a, b) =>
              b.wystawa.informacjeOgolne.data.getTime() -
              a.wystawa.informacjeOgolne.data.getTime()
          )
          .slice(0, imagesIndex)
          .map((node, index) => {
            const convertedData = node.wystawa.informacjeOgolne.data
              .toLocaleString("pl", { dateStyle: "long" })
              .split(" ");
            return (
              <StyledElement key={index}>
                <StyledImage>
                  {node.wystawa.stronaOfertaInformacjeDlaElementowWSekcjiEventy
                    .wiekszaMiniaturkaNaStroneOferty && (
                    <GatsbyImage
                      image={getImage(
                        node.wystawa
                          .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                          .wiekszaMiniaturkaNaStroneOferty.localFile
                      )}
                      alt={
                        node.wystawa
                          .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                          .wiekszaMiniaturkaNaStroneOferty.altText
                      }
                      objectFit="cover"
                    />
                  )}
                </StyledImage>
                <StyledInfoWrapper>
                  <StyledBgWrapper>
                    <StaticImage src="../../images/wystawyArchiwalneTło.png" />
                  </StyledBgWrapper>
                  <StyledDataWrapper>
                    <StyledText
                      hasdeclaredfontsize="32px"
                      hasdeclaredfontcolor="#23423D"
                    >
                      {`${convertedData[0]} ${convertedData[1]} ${convertedData[2]}`}
                    </StyledText>
                  </StyledDataWrapper>
                  <StyledText
                    hasdeclaredfontsize="16px"
                    hasdeclaredfontcolor="#000"
                    hasdeclaredfontweight="400"
                    hasdeclaredmargin="-8px 0 25px 0"
                  >
                    {node.wystawa.informacjeOgolne.miejsce &&
                      node.wystawa.informacjeOgolne.miejsce}
                  </StyledText>
                  <StyledContentWrapper>
                    <StyledText
                      hasdeclaredfontcolor="#23423D"
                      hasdeclaredfontsize="20px"
                      hasdeclaredlineheight="1.2em"
                      hasdeclaredfontweight="500"
                      hasdeclaredmargin="0 0 8px 0"
                    >
                      {node.wystawa.informacjeOgolne.tytulPodZdjeciem &&
                        node.wystawa.informacjeOgolne.tytulPodZdjeciem}
                    </StyledText>
                    <StyledContentList>
                      {node.wystawa.informacjeOgolne.elementyListy.map(
                        (element) => (
                          <div>
                            <ListIcon />
                            <StyledText
                              hasdeclaredfontsize="14px"
                              hasdeclaredlineheight="1.2em"
                              hasdeclaredfontweight="500"
                              hasdeclaredfontcolor="#000"
                            >
                              {element.elementListy && element.elementListy}
                            </StyledText>
                          </div>
                        )
                      )}
                    </StyledContentList>
                  </StyledContentWrapper>
                  <StyledButtonWrapper>
                    <Button
                      text={
                        node.wystawa.informacjeOgolne
                          .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
                      }
                      whereGo={`/wystawy/${node.slug}`}
                      bgColor="var(--creamBg)"
                      hasBorder="2px solid var(--primary500)"
                      textColor="var(--primary500)"
                      hasDeclaredPadding="8px 33px"
                      hasFontWeight="500"
                      hasFontSize="21px"
                      hoverBgColor="#F6E2BA"
                    />
                  </StyledButtonWrapper>
                </StyledInfoWrapper>
              </StyledElement>
            );
          })}
      </StyledElements>
      <StyledbuttonsWrapper>
        <Button
          text={dataArch.lewyPrzyciskPodSliderem}
          bgColor="var(--creamBg)"
          hasBorder="2px solid var(--primary500)"
          textColor="var(--primary500)"
          hasDeclaredPadding="8px 36px"
          hasFontWeight="500"
          hasFontSize="21px"
          onClickHandler={() => setImagesIndex(imagesIndex + 3)}
          hoverBgColor="#F6E2BA"
        />
        <Button
          whereGo={dataArch.prawyPrzyciskPodSliderem.url}
          text={dataArch.prawyPrzyciskPodSliderem.title}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasDeclaredPadding="8px 36px"
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
