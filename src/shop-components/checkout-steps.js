import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Steps({ setStep, step }) {
    return (

        <NumbersGrid step={step}>
            <Step className={step > 0 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>1</span>
                </Image>
                <p>Wybierz produkty</p>
            </Step>
            <span className={step > 0 ? 'active line' : 'line'} />
            <Step onClick={() => { setStep(step > 1 ? 1 : step) }} className={step > 0 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>2</span>
                </Image>
                <p>Dane osobowe</p>
            </Step>
            <span className={step > 0 ? 'active line' : 'line'} />
            <Step onClick={() => { setStep(step > 2 ? 2 : step) }} className={step > 1 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>3</span>
                </Image>
                <p>Opcje dostawy</p>
            </Step>
            <span className={step > 1 ? 'active line' : 'line'} />
            <Step onClick={() => { setStep(step > 3 ? 3 : step) }} className={step > 2 ? 'active' : ''}>
                <Image>
                    <StaticImage src="../../static/images/circle.png" />
                    <span>4</span>
                </Image>
                <p>Adres dostawy</p>
            </Step>
            <span className={step > 2 ? 'active line' : 'line'} />
            <Step onClick={() => { setStep(step > 4 ? 4 : step) }} className={step > 3 ? 'active' : ''}>
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

    @media(max-width: 840px){
        min-width: 640px;
    }

    @media (max-width: 666px) {
        transition: transform .3s ease-out;
        position: relative;
        left: 0;
        transform: translateX(${props => (props.step - 1) * -15}%);
    }

    align-items: flex-start;
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

const Step = styled.button`
    border: none;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    p{
        margin-top: 8px;
    }

    opacity: .5;

    &.active{
        opacity: 1;
    }
`