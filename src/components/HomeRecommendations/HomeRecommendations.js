/** @format */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import HomeRecommendationsElement from "../HomeRecommendationsElement/HomeRecommendationsElement";

import {
    StyledHomeRecommendations,
    StyledRecommendationsWrapper,
    StyledButtonsWrapper,
    StyledArrowWrapper,
} from "./StyledHomeRecommendations";
import { StyledText } from "../Text/StyledText";

import LeftArrow from "../../images/left_arrow.svg";
import RightArrow from "../../images/right_arrow.svg";
import LeftLightArrow from "../../images/leftLightArrow.svg";
import RightLightArrow from "../../images/rightLightArrow.svg";

import useWindowSize from "../../utils/getWindowSize";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../Button/Button";

const HomeRecommendations = ({ isAboutPage }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

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
    const slider = React.useRef(null);

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
                            className="left"
                            onClick={() => slider?.current?.slickPrev()}
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

                        <Slider ref={slider} {...settings}>
                            {allWpRekomendacja.nodes.map((el, index) => (
                                <HomeRecommendationsElement
                                    key={
                                        `${el.rekomendacje.imieNazwisko}` +
                                        index
                                    }
                                    data={el}
                                />
                            ))}
                        </Slider>
                        <StyledArrowWrapper
                            className="right"
                            onClick={() => slider?.current?.slickNext()}
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
