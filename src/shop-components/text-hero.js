import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Hero({ maintitle, title, text }) {
    return (
        <Wrapper>
            <div className="background">
                <StaticImage className="image" src='./../../static/images/hero-background.png' alt='tło' />
                <h1>{maintitle}</h1>
            </div>
            <p className="title" dangerouslySetInnerHTML={{ __html: title }}></p>
            <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 32px;
    @media (max-width: 768px) {
        padding: 0 16px;
    }
    max-width: 1080px;
    margin: clamp(60px, ${60/768*100}vw, 90px) auto 0 auto;
    box-sizing: content-box;

    @media (max-width: 768px) {
    margin-top: 90px;
    .breadcrumbs{
        padding: 0;
    }
    }

    h1{
        font-family: 'Roboto Condensed';
        font-weight: 600;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        color: #EDAC2A;
        margin: 0 24px;
        padding: 7px 0;
    }

    p{
        margin-top: 20px;
        max-width: 800px;
    }

    strong{
        font-weight: unset;
        position: relative;
        white-space: nowrap;

        &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 50%;
        background-color: #F6E2BA;
        z-index: -1;
        }
    }

    .background{
        position: relative;
        min-height: 35px;
        display: flex;
        align-items: center;

        .image{
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: -1;


            @media (max-width: 640px) {
                right: 0;
            }
        }
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