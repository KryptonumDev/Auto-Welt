import React from "react"
import styled from "styled-components"

export default function Hero({ title, text }) {
    return (
        <Wrapper>
            Tu będzie slider
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 1080px;
    margin: 120px auto 0 auto;
    box-sizing: content-box;

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