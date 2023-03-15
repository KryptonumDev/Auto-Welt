import React from "react"
import styled from "styled-components"

export default function CanInterest () {
    return(
        <Wrapper>
            <h2>Mogą cię zainteresować</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 120px;

    h2{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }
`