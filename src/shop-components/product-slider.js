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
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
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
              <StyledLeftArrow className="left" aria-label='prev'  onClick={() => slider?.current?.slickPrev()}>
                  <LeftArrow />
              </StyledLeftArrow>
              <Slider ref={slider} {...settings}>
                  {filtredProducts.map( (el, index) => (
                    <div 
                    onMouseMove={() => setMouseMoved(true)}
                    onMouseDown={() => setMouseMoved(false)}
                    key={index}>
                    <ProductCard onMouseUp={handleClick} data={el}/>
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

  .left{
    transform: translate(-100%, -50%);
  }
  .right{
    transform: translate(100%, -50%);
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
        }
    }
`

const Wrapper = styled.section`
    padding: 0 32px;
    max-width: 1080px;
    margin: 120px auto 0 auto;
    box-sizing: content-box;

    h2{
        margin-bottom: 40px;
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: 48px;
        color: #23423D;
    }

    .item{
      width: calc(100% - 36px);
      margin: 0 18px;
    }

    .slick-list{
      padding: 50px 0;
      margin: -50px 0;
    }
`

// const Grid = styled.div`
//     margin-top: 40px;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 24px;
// `

// const Item = styled.div`
//     background: #FAF7F1;
//     box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     .image{
//         width: 100%;
//         aspect-ratio: 1/1;
//     }

//     .title{
//         position: relative;

//         h3{
//             font-family: 'Roboto Condensed';
//             font-weight: 600;
//             font-size: 22px;
//             color: #23423D;
//             position: relative;
//             z-index: 2;
//             padding: 13px 26px;
//         }
//         .background{
//             position: absolute;
//             left: 0;
//             right: 0;
//             top: 0;
//             bottom: 0;
//             display: block;
//         }
//     }

//     .text{
//         font-family: 'Roboto Condensed';
//         > p {
//             &:first-child{
//                 &::first-letter{
//                 }
//             }
//         }
//     }

//     p{
//         padding: 13px 26px 24px 26px;
//     }
    
//     a{
//         margin-bottom: 36px;
//         margin-top: 0;
//     }
// `