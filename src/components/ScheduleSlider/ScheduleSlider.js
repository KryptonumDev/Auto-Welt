/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement";

import {
    StyledScheduleSlider,
    StyledPrevArrow,
    StyledSlides,
    StyledNextArrow,
} from "./StyledScheduleSlider";

import NextGreenArrow from "../../images/nextGreenArrow.svg";
import PrevGreenArrow from "../../images/prevGreenArrow.svg";
import NextYellowArrow from "../../images/nextYellowArrow.svg";
import PrevYellowArrow from "../../images/prevYellowArrow.svg";

import useWindowSize from "../../utils/getWindowSize";

const ScheduleSlider = ({ scheduleData, variant }) => {
    const width = useWindowSize();
    const [renderElements, setRenderElements] = useState([]);
    const [index, setIndex] = useState(0);
    const [isPrev, setIsPrev] = useState(false);

    const handlePrev = useCallback(() => {
        setIsPrev(true);

        if (index === 0) {
            setIndex(scheduleData.length - 1);
        } else {
            setIndex(index - 1);
        }
    }, [ scheduleData.length, index, setIndex, setIsPrev ]);

    const handlePrevOnKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault();
            handlePrev();
        }
    }, [handlePrev]);

    const handleNext = useCallback(() => {
        setIsPrev(false);

        if (index === scheduleData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, [ scheduleData.length, index, setIndex, setIsPrev ]);

    const handleNextOnKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault();
            handleNext();
        }
    }, [handleNext]);

    useEffect(
        () => {
            const numElements = (width < 649 ? 1 : 2),
                sliderElements = [...scheduleData].slice(index, index + numElements);

            if (sliderElements.length < numElements)
                sliderElements.push(
                    ...(
                        [...scheduleData]
                        .slice(0, numElements - sliderElements.length)
                    )
                );

            setRenderElements(sliderElements);
        },
        [ scheduleData, index, width, setRenderElements ]
    );

    return (
        <StyledScheduleSlider slides={scheduleData.length}>
            {(
                (width > 648 && scheduleData.length > 2) ||
                (width < 649 && scheduleData.length > 1)
            ) ? (
                <StyledPrevArrow
                    onClick={handlePrev}
                    onKeyUp={handlePrevOnKeyUp}
                    tabIndex='0'
                >
                    {variant === "orange" ? (
                        <PrevGreenArrow />
                    ) : (
                        <PrevYellowArrow />
                    )}
                </StyledPrevArrow>
            ) : (null)}
            <StyledSlides slides={scheduleData.length}>
                <AnimatePresence initial={false} mode="wait">
                    {renderElements.map((e) => (
                        <HomeExhibitionsElement
                            key={e.slug + e.node.wystawa.informacjeOgolne.data}
                            exhibitionData={e.node}
                            buttonVariant={variant}
                            isSchdeuleElement="true"
                            isPrev={isPrev}
                        />
                    ))}
                </AnimatePresence>
            </StyledSlides>
            {(
                (width > 648 && scheduleData.length > 2) ||
                (width < 649 && scheduleData.length > 1)
            ) ? (
                <StyledNextArrow
                    onClick={handleNext}
                    onKeyUp={handleNextOnKeyUp}
                    tabIndex='0'
                >
                    {variant === "orange" ? (
                        <NextGreenArrow />
                    ) : (
                        <NextYellowArrow />
                    )}
                </StyledNextArrow>
            ) : (null)}
        </StyledScheduleSlider>
    );
};

export default ScheduleSlider;
