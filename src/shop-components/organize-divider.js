import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { YellowButtonLink } from "./button"

export default function Divider() {
    return (
        <Wrapper>
            <Content>
                <StaticImage src="./../../static/images/organize-exhibition.jpg" alt='obrazek wystawy' />
                <div>
                    <h2>Zorganizuj wystawę </h2>
                    <p>Przenieś się do niesamowitego świata historycznych modeli kolekcjonerskich</p>
                    <YellowButtonLink to='/sklep/wystawy/'>
                        <span>DOWIEDZ SIĘ WIĘCEJ</span>
                    </YellowButtonLink>
                    <StaticImage className="background" src="./../../static/images/organize-exhibition-background.jpg" alt='tło' />
                </div>
            </Content>
        </Wrapper>
    )
}

const Content = styled.div`
    background: #FAF7F1;
    border-bottom: 6px solid #EDAC2A;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;

    @media (max-width: 680px) {
        display: block;
    }

    .background{
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
    }

    div{
        position: relative;
        padding: clamp(18px, ${18 / 768 * 100}vw, 36px);
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2{

            font-family: 'Nocturne Serif';
            font-weight: 400;
            font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
            color: #23423D;
            z-index: 2;
            position: relative;
        }

        p{
            padding: 20px 0 30px 0;
            font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
            font-family: 'Roboto Condensed';
            z-index: 2;
            position: relative;
        }

        a{
            z-index: 2;
            position: relative;
            margin: 0;
            margin-left: 10px;
        }
    }
`

const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    @media (max-width: 380px) {
        a{
            margin: 0 auto !important; 
        }
    }
`