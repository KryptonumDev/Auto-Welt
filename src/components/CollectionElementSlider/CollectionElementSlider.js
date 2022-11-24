/** @format */

import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
    StyledCollectionElementSlider,
    StyledLeftArrow,
    StyledRightArrow,
    StyledImage,
} from "./StyledCollectionElementSlider";

import LeftArrow from "../../images/left_arrow.svg";
import RightArrow from "../../images/right_arrow.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CollectionElementSlider = ({ imagesData }) => {
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
                }
            },
        ]
    };

    return (
        <StyledCollectionElementSlider length={imagesData.length}>
            <StyledLeftArrow aria-label='prev' length={imagesData.length} onClick={() => slider?.current?.slickPrev()}>
                <LeftArrow />
            </StyledLeftArrow>
            <Slider ref={slider} {...settings}>
                {imagesData.map((e, index) => (
                    <StyledImage key={index}>
                        <GatsbyImage image={getImage(e.localFile)} alt={e.altText || " "} title={e.title} />
                    </StyledImage>
                ))}
            </Slider>
            <StyledRightArrow aria-label='next' length={imagesData.length} onClick={() => slider?.current?.slickNext()}>
                <RightArrow />
            </StyledRightArrow>
        </StyledCollectionElementSlider>
    );
};

export default CollectionElementSlider;
