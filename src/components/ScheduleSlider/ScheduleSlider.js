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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ScheduleSlider = ({ scheduleData, variant }) => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <StyledScheduleSlider slides={scheduleData.length}>

            {scheduleData.length > 1
                ? <>
                    <StyledPrevArrow
                        onClick={() => slider?.current?.slickPrev()}>
                        {variant === "orange" ? (
                            <PrevGreenArrow />
                        ) : (
                            <PrevYellowArrow />
                        )}
                    </StyledPrevArrow>
                    <Slider ref={slider} {...settings}>
                        {scheduleData.map((e) => (
                            <HomeExhibitionsElement
                                key={e.slug + e.node.wystawa.informacjeOgolne.data}
                                exhibitionData={e.node}
                                buttonVariant={variant}
                                isSchdeuleElement="true"
                            />
                        ))}
                    </Slider>
                    <StyledNextArrow
                        onClick={() => slider?.current?.slickNext()}>
                        {variant === "orange" ? (
                            <NextGreenArrow />
                        ) : (
                            <NextYellowArrow />
                        )}
                    </StyledNextArrow>
                </>
                : <div className="one-el">
                    {scheduleData.map((e) => (
                        <HomeExhibitionsElement
                            key={e.slug + e.node.wystawa.informacjeOgolne.data}
                            exhibitionData={e.node}
                            buttonVariant={variant}
                            isSchdeuleElement="true"
                        />
                    ))}
                </div>}
        </StyledScheduleSlider>
    );
};

export default ScheduleSlider;
