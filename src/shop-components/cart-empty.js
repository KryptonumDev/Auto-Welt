import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { YellowButtonLink } from "./button"

export default function Empty() {
    return (
        <Wrapper>
            <StaticImage className="image" src='./../../static/images/cart.png' alt='koszyk zakupowy' />
            <h2>Twój koszyk jest pusty</h2>
            <YellowButtonLink to='/sklep/'><span>WRÓĆ DO ZAKUPÓW</span></YellowButtonLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h2{
        margin-top: 30px;
        text-align: center;
        font-family: 'Nocturne Serif';
        color: #23423D;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
    }

    .image{
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
`