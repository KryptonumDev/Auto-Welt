import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Steps({ step }) {
    return (

        <NumbersGrid>
            <Step className={step > 0 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>1</span>
                </Image>
                <p>Wybierz produkty</p>
            </Step>
            <span className={step > 0 ? 'active line' : 'line'} />
            <Step className={step > 0 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>2</span>
                </Image>
                <p>Dane osobowe</p>
            </Step>
            <span className={step > 0 ? 'active line' : 'line'} />
            <Step className={step > 1 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>3</span>
                </Image>
                <p>Opcje dostawy</p>
            </Step>
            <span className={step > 1 ? 'active line' : 'line'} />
            <Step className={step > 2 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>4</span>
                </Image>
                <p>Adres dostawy</p>
            </Step>
            <span className={step > 2 ? 'active line' : 'line'} />
            <Step className={step > 3 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>5</span>
                </Image>
                <p>Płatność</p>
            </Step>
        </NumbersGrid>
    )
}

const NumbersGrid = styled.div`
    display: grid;
    grid-template-columns: 68px 1fr 68px 1fr 68px 1fr 68px 1fr 68px;
    grid-gap: 10px;
    margin-bottom: 40px;
    margin-top: 30px;

    .line{
        margin-top: 36px;
        width: 100%;
        height: 3px;
        background-color: #F6E2BA;

        &.active{
            background-color: #23423D;
        }
    }
`

const Image = styled.div`
    position: relative;
    span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Nocturne Serif';
        font-size: 40px;
        color: #EDAC2A;
    }
`

const Step = styled.div`
    text-align: center;
    p{
        margin-top: 8px;
    }

    opacity: .5;

    &.active{
        opacity: 1;
    }
`