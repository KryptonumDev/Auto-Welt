/** @format */

import React from "react";

import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement";

import {
    StyledScheduleSlider,
    StyledPrevArrow,
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
    const settings = {
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
                },
            },
        ],
    };

    return (
        <StyledScheduleSlider slides={scheduleData.length}>
            {scheduleData.length > 1 ? (
                <>
                    <StyledPrevArrow
                        aria-label="next"
                        onClick={() => slider?.current?.slickPrev()}
                        slides={scheduleData.length}
                    >
                        {variant === "orange" ? (
                            <PrevGreenArrow />
                        ) : (
                            <PrevYellowArrow />
                        )}
                    </StyledPrevArrow>
                    <Slider ref={slider} {...settings}>
                        {scheduleData.map((e) => (
                            <HomeExhibitionsElement
                                key={
                                    e.slug +
                                    e.node.wystawa.informacjeOgolne.data
                                }
                                exhibitionData={e.node}
                                buttonVariant={variant}
                                isSchdeuleElement={true}
                            />
                        ))}
                    </Slider>
                    <StyledNextArrow
                        aria-label="next"
                        onClick={() => slider?.current?.slickNext()}
                        slides={scheduleData.length}
                    >
                        {variant === "orange" ? (
                            <NextGreenArrow />
                        ) : (
                            <NextYellowArrow />
                        )}
                    </StyledNextArrow>
                </>
            ) : (
                <div className="one-el">
                    {scheduleData.map((e) => (
                        <HomeExhibitionsElement
                            key={e.slug + e.node.wystawa.informacjeOgolne.data}
                            exhibitionData={e.node}
                            buttonVariant={variant}
                            isSchdeuleElement="true"
                        />
                    ))}
                </div>
            )}
        </StyledScheduleSlider>
    );
};

export default ScheduleSlider;
