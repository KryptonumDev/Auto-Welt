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

const ScheduleSlider = ({ scheduleData, variant }) => {

    return (
        <StyledScheduleSlider slides={scheduleData.length}>
            {/* {(
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
            ) : (null)} */}
        </StyledScheduleSlider>
    );
};

export default ScheduleSlider;
