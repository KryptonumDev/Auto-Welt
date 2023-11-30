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
                <Step className={step > 1 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>2</span>
                    </Image>
                    <p>Dane osobowe</p>
                </Step>
                <span className={step > 1 ? 'active line' : 'line'} />
                <Step className={step > 2 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>3</span>
                    </Image>
                    <p>Opcje dostawy</p>
                </Step>
                <span className={step > 2 ? 'active line' : 'line'} />
                <Step className={step > 3 ? 'active' : ''}>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>4</span>
                    </Image>
                    <p>Adres dostawy</p>
                </Step>
            </NumbersGrid>
            <MobileGrid>
                <Step as='div'>
                    <Image>
                        <StaticImage src="../../static/images/circle.png" alt="tło" />
                        <span>{step > 4 ? 5 : step}<b> / 5</b></span>
                    </Image>
                    <div>
                        <p className="title">
                            {step === '1' && 'Wybierz produkty'}
                            {step === '2' && 'Dane osobowe'}
                            {step === '3' && 'Opcje dostawy'}
                            {step === '4' && 'Adres dostawy'}
                            {step >= '5' && 'Płatność'}
                        </p>
                        <p className="text">
                            {step === '1' && 'Wybierz produkty, które chcesz zamówić'}
                            {step === '2' && 'Uzupełnij dane osobowe'}
                            {step === '3' && 'Wybierz opcję dostawy, która Ci pasuje'}
                            {step === '4' && 'Wpisz adres, pod który ma być wysłana paczka'}
                            {step >= '5' && 'Dokonaj płatności i ciesz się udanym zamówieniem!'}
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
    grid-template-columns: 68px 1fr 68px 1fr 68px 1fr 68px;
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

const Step = styled.div`
    border: none;
    background-color: transparent;
    text-align: center;
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