import React, { useRef, useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { StyledLeftArrow, StyledRightArrow } from "../components/CollectionElementSlider/StyledCollectionElementSlider"

import LeftArrow from "./../images/left_arrow.svg"
import RightArrow from "./../images/right_arrow.svg"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({ title, text, gallery }) {
    const slider = useRef(null);
    const [chosenSlide, setChosenSlide] = useState(0)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        beforeChange: (current, next) => setChosenSlide(next),
    };

    return (
        <Wrapper>
            {gallery && (
                <SliderWrapper>
                    <StyledLeftArrow className="left" aria-label='prev' onClick={() => slider?.current?.slickPrev()}>
                        <LeftArrow />
                    </StyledLeftArrow>
                    <Slider ref={slider} {...settings}>
                        {gallery.map((el, index) => (
                            <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt} />
                        ))}
                    </Slider>
                    <Buttons>
                        {gallery.map((el, index) => (
                            <button className={index === chosenSlide ? 'active' : ''} key={index} onClick={() => { slider?.current?.slickGoTo(index) }}></button>
                        ))}
                    </Buttons>
                    <StyledRightArrow className="right" aria-label='next' onClick={() => slider?.current?.slickNext()}>
                        <RightArrow />
                    </StyledRightArrow>
                </SliderWrapper>
            )}
            <h1 className="title">{title}</h1>
            <p className="text">{text ? text : `Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
        </Wrapper>
    )
}

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 32px;
    @media (max-width: 546px){
        display: none;
    }

    button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: none;
        background-color: #EDC169;

        &.active{
            width: 12px;
            height: 12px;
            background: #DA9610;
        }
    }
`

const SliderWrapper = styled.div`
    position: relative;
    padding: 0 29px;
    margin-bottom: 60px;

    @media (max-width: 1140px){
        padding: 0 16px;
    }

    @media (max-width: 546px){
        padding: 0 ;
        margin-bottom: 146px;
    }

    .image{
        min-height: 183px;
    }

    .left{
        left: -26px;
        background-color: #EDAC2A;

        @media (max-width: 1140px) {
            left: -3px;
        }

        path{
            stroke: #23423D;
        }
    }

    .right{
        right: -26px;
        background-color: #EDAC2A;

        path{
            stroke: #23423D;
        }

        @media (max-width: 1140px) {
            right: -3px;
        }
    }
`

const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 1080px;
    margin: 0 auto 0 auto;
    box-sizing: content-box;

    p{
        margin-top: 20px;
        max-width: 800px;
    }

    .text{
        font-family: 'Roboto Condensed';
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    }

    .title{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }
`