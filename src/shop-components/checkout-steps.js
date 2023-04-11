import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Steps({ setStep, step }) {
    return (
        <>
            <NumbersGrid step={step}>
                <Step className={step > 0 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>1</span>
                    </Image>
                    <p>Wybierz produkty</p>
                </Step>
                <span className={step > 0 ? 'active line' : 'line'} />
                <Step onClick={() => { setStep(step > 1 ? 1 : step) }} className={step > 0 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>2</span>
                    </Image>
                    <p>Dane osobowe</p>
                </Step>
                <span className={step > 0 ? 'active line' : 'line'} />
                <Step onClick={() => { setStep(step > 2 ? 2 : step) }} className={step > 1 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>3</span>
                    </Image>
                    <p>Opcje dostawy</p>
                </Step>
                <span className={step > 1 ? 'active line' : 'line'} />
                <Step onClick={() => { setStep(step > 3 ? 3 : step) }} className={step > 2 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>4</span>
                    </Image>
                    <p>Adres dostawy</p>
                </Step>
                <span className={step > 2 ? 'active line' : 'line'} />
                <Step onClick={() => { setStep(step > 4 ? 4 : step) }} className={step > 3 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>5</span>
                    </Image>
                    <p>Płatność</p>
                </Step>
            </NumbersGrid>
            <MobileGrid>
                <Step as='div'>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>{step + 1}<b> / 5</b></span>
                    </Image>
                    <div>
                        <p className="title">
                            {step === 0 && 'Wybierz produkty'}
                            {step === 1 && 'Dane osobowe'}
                            {step === 2 && 'Opcje dostawy'}
                            {step === 3 && 'Adres dostawy'}
                            {step === 4 && 'Płatność'}
                        </p>
                        <p className="text">
                            {step === 0 && 'Wybierz produkty, które chcesz zamówić'}
                            {step === 1 && 'Uzupełnij dane osobowe'}
                            {step === 2 && 'Wybierz opcję dostawy, która Ci pasuje'}
                            {step === 3 && 'Wpisz adres, pod który ma być wysłana paczka'}
                            {step === 4 && 'Dokonaj płatności i ciesz się udanym zamówieniem!'}
                        </p>
                    </div>
                </Step>
            </MobileGrid>
        </>
    )
}

const MobileGrid = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: block;
        margin: 20px 0 30px 0;
    }
`

const NumbersGrid = styled.div`

    @media (max-width: 480px) {
        display: none;
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

    @media (max-width: 480px) {
        text-align: left;
        width: fit-content;
        span{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #EDAC2A;
            white-space: nowrap;
            letter-spacing: -.7px;

            b{        
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                font-feature-settings: 'pnum' on, 'onum' on;
                color: #FFF;
            }
        }
    }
`

const Step = styled.button`
    border: none;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    opacity: .5;

    &.active{
        opacity: 1;
    }
    
    p{
        margin-top: 8px;
    }

    @media (max-width: 480px) {
        opacity: 1;
        display: flex;
        gap: 8px;
        align-items: center;
        text-align: left;

        img{
            transform: rotateZ(150deg) !important;
        }

        .title{
            font-family: 'Nocturne Serif';
            font-style: normal;
            font-size: 16px;
            line-height: 19px;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #000000;
            margin-top: 0;
            max-width: 135px;
        }

        .text{
            font-style: normal;
            font-size: 12px;
            line-height: 135.19%;
            color: #000000;
            margin-top: 4px;
            max-width: 135px;
        }
    }

`