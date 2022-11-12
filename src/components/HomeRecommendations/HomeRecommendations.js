/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { AnimatePresence } from "framer-motion";

import HomeRecommendationsElement from "../HomeRecommendationsElement/HomeRecommendationsElement";
import Button from "../Button/Button";

import {
    StyledHomeRecommendations,
    StyledRecommendationsWrapper,
    StyledButtonsWrapper,
    StyledSlides,
    StyledArrowWrapper,
} from "./StyledHomeRecommendations";
import { StyledText } from "../Text/StyledText";

import LeftArrow from "../../images/left_arrow.svg";
import RightArrow from "../../images/right_arrow.svg";
import LeftLightArrow from "../../images/leftLightArrow.svg";
import RightLightArrow from "../../images/rightLightArrow.svg";

import useWindowSize from "../../utils/getWindowSize";

const HomeRecommendations = ({ isAboutPage }) => {
    const width = useWindowSize();
    const { allWpRekomendacja, wpPage } = useStaticQuery(graphql`
        query rekomendacje {
            allWpRekomendacja {
                nodes {
                    rekomendacje {
                        imieNazwisko
                        rekomendacja
                        linkPodImieniem {
                            target
                            title
                            url
                        }
                    }
                }
            }
            wpPage(id: { eq: "cG9zdDozMw==" }) {
                globalConfig {
                    informacjeDoRekomendacjiNaStronieGlownej {
                        przyciskLewy {
                            target
                            title
                            url
                        }
                        przyciskPrawy {
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

    const [renderElements, setRenderElements] = useState([]);
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isPrev, setIsPrev] = useState(false);

    const handlePrev = useCallback((e) => {
        e.preventDefault();
        setIsPrev(true);
        setPrevIndex(index);
        if (index === 0) {
            setIndex(allWpRekomendacja.nodes.length - 1);
        } else {
            setIndex(index - 1);
        }
    }, [index]);

    const handleNext = useCallback((e) => {
        e.preventDefault();
        setIsPrev(false);
        setPrevIndex(index);
        if (index === allWpRekomendacja.nodes.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, [index]);

    useEffect(() => {
        let sliderElements = allWpRekomendacja.nodes.slice(
            index,
            index + (width < 649 ? 1 : 2)
        );
        if (width > 648) {
            if (index === allWpRekomendacja.nodes.length - 1) {
                sliderElements = [
                    allWpRekomendacja.nodes[allWpRekomendacja.nodes.length - 1],
                    allWpRekomendacja.nodes[0],
                ];
            }
            if (index === 0 && isPrev && prevIndex !== 1) {
                sliderElements = [
                    allWpRekomendacja.nodes[allWpRekomendacja.nodes.length - 1],
                    allWpRekomendacja.nodes[0],
                ];
            }
        }

        setRenderElements(sliderElements);
    }, [index, width, allWpRekomendacja.nodes, isPrev, prevIndex]);

    return (
        <StyledHomeRecommendations hasmargin={allWpRekomendacja.nodes !== 0} isaboutpage={isAboutPage}>
            {allWpRekomendacja.nodes !== 0 ? (
                <>
                    <StyledText
                        as="h2"
                        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                        hasdeclaredtextalign="center"
                        hasdeclaredfontcolor="var(--primary500)"
                        hasdeclaredmargin="0 0 40px"
                        hasdeclaredfontfamily="Nocturne Serif"
                    >
                        {wpPage.globalConfig
                            .informacjeDoRekomendacjiNaStronieGlownej
                            ?.tytulSekcji ?
                            wpPage.globalConfig
                                .informacjeDoRekomendacjiNaStronieGlownej
                                ?.tytulSekcji : null}
                    </StyledText>
                    <StyledRecommendationsWrapper>
                        <StyledArrowWrapper
                            onClick={handlePrev}
                            hasdeclaredtransform={width < 463 ? "-5px" : "20px"}
                        >
                            {width <= 768 ? (
                                width < 463 ? (
                                    <LeftArrow />
                                ) : (
                                    <LeftLightArrow />
                                )
                            ) : (
                                <LeftArrow />
                            )}
                        </StyledArrowWrapper>
                        <StyledSlides>
                            <AnimatePresence initial={false} mode="wait">
                                {renderElements?.map((e, index) => (
                                    <HomeRecommendationsElement
                                        key={
                                            `${e.rekomendacje.imieNazwisko}` +
                                            index
                                        }
                                        data={e}
                                        isPrev={isPrev}
                                    />
                                ))}
                            </AnimatePresence>
                        </StyledSlides>
                        <StyledArrowWrapper
                            onClick={handleNext}
                            hasdeclaredtransform={width < 463 ? "5px" : "-20px"}
                        >
                            {width <= 768 ? (
                                width < 463 ? (
                                    <RightArrow />
                                ) : (
                                    <RightLightArrow />
                                )
                            ) : (
                                <RightArrow />
                            )}
                        </StyledArrowWrapper>
                    </StyledRecommendationsWrapper>
                    <StyledButtonsWrapper>
                        {wpPage.globalConfig
                            .informacjeDoRekomendacjiNaStronieGlownej
                            ?.przyciskLewy?.title ? (
                            <Button
                                whereGo={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskLewy?.url
                                }
                                text={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskLewy?.title
                                }
                                hasBorder="2px solid var(--primary500)"
                                textColor="var(--primary500)"
                                hasFontSize="21px"
                                hasDeclaredPadding={
                                    width < 769 ? "10px 53px" : "10px 33px"
                                }
                                bgColor="var(--background500)"
                                hasTarget={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskLewy?.target
                                }
                                hoverBgColor="#F6E2BA"
                                ariaLabel="link"
                            />
                        ) : null}
                        {wpPage.globalConfig
                            .informacjeDoRekomendacjiNaStronieGlownej
                            ?.przyciskPrawy?.url ? (
                            <Button
                                whereGo={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskPrawy?.url
                                }
                                text={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskPrawy?.title
                                }
                                textColor="var(--white)"
                                bgColor="var(--primary500)"
                                hasFontSize="21px"
                                hasBorder="2px solid var(--primary500)"
                                hasDeclaredPadding={
                                    width < 769 ? "10px 63px" : "10px 33px"
                                }
                                hasTarget={
                                    wpPage.globalConfig
                                        .informacjeDoRekomendacjiNaStronieGlownej
                                        ?.przyciskPrawy?.target
                                }
                                hoverBgColor="var(--primary900)"
                                ariaLabel="link"
                            />
                        ) : null}
                    </StyledButtonsWrapper>
                </>
            ) : null}
        </StyledHomeRecommendations>
    );
};

export default HomeRecommendations;
