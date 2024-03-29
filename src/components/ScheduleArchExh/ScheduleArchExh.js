/** @format */

import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

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
    StyledTitleWrapper
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
                                dataZakonczenia
                                elementyListy {
                                    elementListy
                                }
                                miejsce
                                tloDlaMiejscaIDaty {
                                    altText
                                    title
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
                                    title
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
            }
        }
    `);

    const now = new Date();

    const slidesData = data.allWpWystawa.edges
        .map(({ node }) => ({
            ...node,
            wystawa: {
                ...node.wystawa,
                informacjeOgolne: {
                    ...node.wystawa.informacjeOgolne,
                    data: new Date(node.wystawa.informacjeOgolne.data),
                    dataZakonczenia: new Date(node.wystawa.informacjeOgolne.dataZakonczenia),
                },
            },
        }))
        .filter(
            ({ wystawa }) =>
                wystawa.informacjeOgolne.dataZakonczenia.getTime() < now.getTime() &&
                !areDatesEqual(wystawa.informacjeOgolne.dataZakonczenia, now)
        )
        .sort(
            // malejąco - 'b-a'
            (a, b) =>
                b.wystawa.informacjeOgolne.data.getTime() -
                a.wystawa.informacjeOgolne.data.getTime()
        );

    return (
        <StyledScheduleArchExh hasmargin={slidesData.length !== 0}>
            {slidesData.length !== 0 ? (
                <>
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
                        {slidesData.slice(0, imagesIndex).map((node, index) => {
                            const convertedData =
                                node.wystawa.informacjeOgolne.data
                                    .toLocaleString("pl", { dateStyle: "long" })
                                    .split(" ");
                            return (
                                <StyledElement
                                    key={
                                        index +
                                        node.wystawa.informacjeOgolne.miejsce
                                    }
                                >
                                    <StyledImage>
                                        {node.wystawa
                                            .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                                            .wiekszaMiniaturkaNaStroneOferty ? (
                                            <GatsbyImage
                                                image={getImage(
                                                    node.wystawa
                                                        .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                                                        .wiekszaMiniaturkaNaStroneOferty
                                                        ?.localFile
                                                )}
                                                alt={
                                                    node.wystawa
                                                        .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                                                        .wiekszaMiniaturkaNaStroneOferty
                                                        ?.altText || " "
                                                }
                                                title={
                                                    node.wystawa
                                                        .stronaOfertaInformacjeDlaElementowWSekcjiEventy
                                                        .wiekszaMiniaturkaNaStroneOferty
                                                        ?.title
                                                }
                                                objectFit="cover"
                                            />
                                        ) : null}
                                    </StyledImage>
                                    <StyledInfoWrapper>
                                        <StyledBgWrapper>
                                            <StaticImage
                                                src="../../images/wystawyArchiwalneTło.png"
                                                alt="tło"
                                            />
                                        </StyledBgWrapper>
                                        <StyledDataWrapper>
                                            <StyledText
                                                hasdeclaredfontsize="32px"
                                                hasdeclaredfontcolor="#23423D"
                                                hasdeclaredfontweight="700"
                                                hasdeclaredlineheight="1.2em"
                                            >
                                                {`${convertedData[0]} ${convertedData[1]} ${convertedData[2]}`}
                                            </StyledText>
                                        </StyledDataWrapper>
                                        <StyledText
                                            hasdeclaredfontsize="16px"
                                            hasdeclaredfontcolor="#000"
                                            hasdeclaredfontweight="500"
                                            hasdeclaredmargin="-8px 0 25px 0"
                                        >
                                            {node.wystawa.informacjeOgolne
                                                .miejsce ?
                                                node.wystawa.informacjeOgolne
                                                    .miejsce : null}
                                        </StyledText>
                                        <StyledContentWrapper>
                                            <StyledTitleWrapper>
                                                {node.wystawa.informacjeOgolne
                                                    .tytulPodZdjeciem ?
                                                    parse(node.wystawa
                                                        .informacjeOgolne
                                                        .tytulPodZdjeciem) : null}
                                            </StyledTitleWrapper>
                                            <StyledContentList>
                                                {node.wystawa.informacjeOgolne.elementyListy.map(
                                                    (element, index) => (
                                                        <div
                                                            key={
                                                                element.elementListy +
                                                                index
                                                            }
                                                        >
                                                            <ListIcon />
                                                            <StyledText
                                                                hasdeclaredfontsize="14px"
                                                                hasdeclaredlineheight="1.2em"
                                                                hasdeclaredfontweight="500"
                                                                hasdeclaredfontcolor="#000"
                                                            >
                                                                {element.elementListy ?
                                                                    element.elementListy : null}
                                                            </StyledText>
                                                        </div>
                                                    )
                                                )}
                                            </StyledContentList>
                                        </StyledContentWrapper>
                                        <StyledButtonWrapper>
                                            <Button
                                                text={
                                                    node.wystawa
                                                        .informacjeOgolne
                                                        .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
                                                }
                                                whereGo={`/wystawy/${node.slug}`}
                                                bgColor="var(--creamBg)"
                                                hasBorder="2px solid var(--primary500)"
                                                textColor="var(--primary500)"
                                                hasDeclaredPadding="8px 33px"
                                                hasFontWeight="700"
                                                hasFontSize="21px"
                                                hoverBgColor="#F6E2BA"
                                                ariaLabel="link"
                                            />
                                        </StyledButtonWrapper>
                                    </StyledInfoWrapper>
                                </StyledElement>
                            );
                        })}
                    </StyledElements>
                    <StyledbuttonsWrapper>
                        {slidesData.length < 4 ? null : (
                            <Button
                                text={dataArch.lewyPrzyciskPodSliderem}
                                bgColor="var(--creamBg)"
                                hasBorder="2px solid var(--primary500)"
                                textColor="var(--primary500)"
                                hasDeclaredPadding="8px 36px"
                                hasFontWeight="700"
                                hasFontSize="21px"
                                onClickHandler={() =>
                                    setImagesIndex(imagesIndex + 3)
                                }
                                hoverBgColor="#F6E2BA"
                                ariaLabel="Włącz więcej wydarzeń"
                            />
                        )}
                        <Button
                            whereGo={dataArch.prawyPrzyciskPodSliderem.url}
                            text={dataArch.prawyPrzyciskPodSliderem.title}
                            textColor="var(--white)"
                            bgColor="var(--primary500)"
                            hasDeclaredPadding="8px 36px"
                            hasFontSize="21px"
                            hasFontWeight="700"
                            hasTarget={dataArch.prawyPrzyciskPodSliderem.target}
                            hoverBgColor="var(--primary900)"
                            hasBorder="2px solid var(--primary500)"
                            ariaLabel="link"
                        />
                    </StyledbuttonsWrapper>
                </>
            ) : null}
        </StyledScheduleArchExh>
    );
};

export default ScheduleArchExh;
