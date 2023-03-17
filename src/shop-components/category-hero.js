import React from "react"
import styled from "styled-components"

export default function Hero({ title, text }) {
    return (
        <Wrapper>
            <h1 className="title">{title}</h1>
            <p className="text">{text}</p>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 1080px;
    margin: 120px auto 0 auto;
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