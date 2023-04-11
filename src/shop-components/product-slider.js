import React, { useMemo, useRef, useState } from "react"
import styled from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import ProductCard from "./product-card"
import { navigate } from "gatsby"
import { StyledLeftArrow, StyledRightArrow } from "../components/CollectionElementSlider/StyledCollectionElementSlider"

import LeftArrow from "./../images/left_arrow.svg"
import RightArrow from "./../images/right_arrow.svg"

export default function ProductSlider({ title, products }) {

  const filtredProducts = useMemo(() => {
    return products.filter((data) => {
      const createTime = new Date(data.date_created)
      const currentTime = new Date()
      const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

      return difference <= 31
    })
  }, [products])

  const slider = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const [mouseMoved, setMouseMoved] = useState(false)
  const handleClick = (e, url) => {
    e.preventDefault()
    if (!mouseMoved) {
      if (e.button === 0) {
        navigate(url)
      }
    }
  }

  return (
    <Wrapper>
      <h2>{title}</h2>
      <SliderWrapper>
        <StyledLeftArrow className="left" aria-label='prev' onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </StyledLeftArrow>
        <Slider ref={slider} {...settings}>
          {filtredProducts.map((el, index) => (
            <div
              onMouseMove={() => setMouseMoved(true)}
              onMouseDown={() => setMouseMoved(false)}
              key={index}>
              <ProductCard onMouseUp={handleClick} data={el} />
            </div>
          ))}
        </Slider>
        <StyledRightArrow className="right" aria-label='next' onClick={() => slider?.current?.slickNext()}>
          <RightArrow />
        </StyledRightArrow>
      </SliderWrapper>
    </Wrapper>
  )
}

const SliderWrapper = styled.div`
  position: relative;

  @media (max-width: 768px){
    padding-bottom: 86px;
  }

  .left{
    transform: translate(-100%, -50%);

    @media (max-width: 768px){
      transform: unset;
      bottom: 0;
      top: unset;
      left: 16px;
      width: 50px;
      height: 66px;

      svg{
        padding: 4px;
      }
    }
  }
  .right{
    transform: translate(100%, -50%);

    @media (max-width: 768px){
      transform: unset;
      bottom: 0;
      top: unset;
      right: 16px;
      width: 50px;
      height: 66px;

      svg{
        padding: 4px;
      }
    }
  }

  .slick-track{
        display: flex !important;
    }

    .slick-slide{
        height: inherit !important;
    }

    .slick-slide > div{
        height: 100%;
        >div{
          height: 100%;
        }
        .item {
          height: 100%;
          display: grid;
          grid-template-rows: auto 1fr;
        }
    }
`

const Wrapper = styled.section`
    padding: 0 32px;
    @media (max-width: 768px){
        padding: 0 ;
    }
    max-width: 1080px;
    margin: clamp(60px, 7.8125vw, 120px) auto 0 auto;
    box-sizing: content-box;

    h2{
        margin-bottom: 40px;
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;

        @media (max-width: 768px){
          padding: 0 16px;
        }
    }

    .item{
      width: calc(100% - 36px);
      margin: 0 18px;
      @media (max-width: 768px){
        margin: 0 16px;
      }
    }

    .slick-list{
      padding: 50px 0;
      margin: -50px 0;
    }
`