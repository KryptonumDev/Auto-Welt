import React, { useState, useEffect } from "react"

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

const elements = [
    {
        id: 1,
        text: "Pierwszy",
    },
    {
        id: 2,
        text: "Drugi",
    },
    {
        id: 3,
        text: "Trzeci",
    },
    {
        id: 4,
        text: "Czwarty",
    },
    {
        id: 5,
        text: "Piąty",
    },
    {
        id: 6,
        text: "szósty",
    },
];

const HomeRecommendations = () => {
    const [renderElements, setRenderElements] = useState([])
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index === 0) {
            setIndex(elements.length - 2)
        }else {
            setIndex(index - 1)
        }
    }
    const handleNext = () => {
        if (index === elements.length - 2) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }

    useEffect(() => {
        const sliderElements = elements.slice(index, index + 2);

        setRenderElements(sliderElements);
    }, [index])
    
    return (
        <StyledHomeRecommendations>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="0 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Rekomendacje:
            </StyledText>
            <StyledRecommendationsWrapper>
                <StyledArrowWrapper onClick={handlePrev}>
                    <LeftArrow />
                </StyledArrowWrapper>
                <StyledSlides>
                    {renderElements.map((e) => (
                        <HomeRecommendationsElement key={e.id} data={e} />
                    ))}
                </StyledSlides>
                <StyledArrowWrapper onClick={handleNext}>
                    <RightArrow />
                </StyledArrowWrapper>
            </StyledRecommendationsWrapper>
            <StyledButtonsWrapper>
                <Button
                    whereGo="/kolekcje-modeli"
                    text="KULTOWE SAMOCHODY PRL"
                    hasBorder="2px solid var(--primary500)"
                    hasMaxWidth="330px"
                    textColor="var(--primary500)"
                    hasFontSize="21px"
                />
                <Button
                    whereGo="/kontakt"
                    text="NAPISZ DO MNIE"
                    textColor="var(--white)"
                    bgColor="var(--primary500)"
                    hasMaxWidth="220px"
                    hasFontSize="21px"
                />
            </StyledButtonsWrapper>
        </StyledHomeRecommendations>
    );
}

export default HomeRecommendations;