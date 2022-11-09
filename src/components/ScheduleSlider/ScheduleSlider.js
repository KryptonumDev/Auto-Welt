/** @format */

import React, { useState, useEffect } from "react";
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

    const handlePrev = () => {
        setIsPrev(true);
        setPrevIndex(index);

        if (index === 0) {
            setIndex(scheduleData.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        setIsPrev(false);
        setPrevIndex(index);

        if (index === scheduleData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

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
            {width > 648 ? (
                scheduleData.length < 3 ? null : (
                    <StyledPrevArrow onClick={handlePrev}>
                        {variant === "orange" ? (
                            <PrevGreenArrow />
                        ) : (
                            <PrevYellowArrow />
                        )}
                    </StyledPrevArrow>
                )
            ) : scheduleData.length === 1 ? null : (
                <StyledPrevArrow onClick={handlePrev}>
                    {variant === "orange" ? (
                        <PrevGreenArrow />
                    ) : (
                        <PrevYellowArrow />
                    )}
                </StyledPrevArrow>
            )}
            <StyledSlides slides={scheduleData.length}>
                <AnimatePresence initial={false} exitBeforeEnter>
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
            {width > 648 ? (
                scheduleData.length < 3 ? null : (
                    <StyledNextArrow onClick={handleNext}>
                        {variant === "orange" ? (
                            <NextGreenArrow />
                        ) : (
                            <NextYellowArrow />
                        )}
                    </StyledNextArrow>
                )
            ) : scheduleData.length === 1 ? null : (
                <StyledNextArrow onClick={handleNext}>
                    {variant === "orange" ? (
                        <NextGreenArrow />
                    ) : (
                        <NextYellowArrow />
                    )}
                </StyledNextArrow>
            )}
        </StyledScheduleSlider>
    );
};

export default ScheduleSlider;
