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
    const [prevIndex, setPrevIndex] = useState(0);
    const [isPrev, setIsPrev] = useState(false);

    const handlePrev = useCallback(() => {
        setIsPrev(true);
        setPrevIndex(index);

        if (index === 0) {
            setIndex(scheduleData.length - 1);
        } else {
            setIndex(index - 1);
        }
    }, [ index, setIndex, setIsPrev, setPrevIndex ]);

    const handleNext = useCallback(() => {
        setIsPrev(false);
        setPrevIndex(index);

        if (index === scheduleData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, [ index, setIndex, setIsPrev, setPrevIndex ]);

    useEffect(() => {
        if (scheduleData.length < 3 && width > 648) {
            return setRenderElements(scheduleData);
        }

        let sliderElements = scheduleData.slice(
            index,
            index + (width < 649 ? 1 : 2)
        );

        if (width > 648) {
            if (index === scheduleData.length - 1) {
                sliderElements = [
                    scheduleData[scheduleData.length - 1],
                    scheduleData[0],
                ];
            }
            if (index === 0 && isPrev && prevIndex !== 1) {
                sliderElements = [
                    scheduleData[scheduleData.length - 1],
                    scheduleData[0],
                ];
            }
        }

        setRenderElements(sliderElements);
    }, [index, width]);

    return (
        <StyledScheduleSlider slides={scheduleData.length}>
            {(
                (width > 648 && scheduleData.length > 2) ||
                (width < 649 && scheduleData.length > 1)
            ) ? (
                <StyledPrevArrow onClick={handlePrev}>
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
                <StyledNextArrow onClick={handleNext}>
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
