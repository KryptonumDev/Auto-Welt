import React from "react"
import styled from "styled-components"
import { Button } from "./button"

export default function Newsletter() {
    return (
        <Wrapper>
            <Content>
                <h2>Newsletter</h2>
                <p className="text">
                    Bądź na bieżąco! Zapisz się do newslettera Auto-Welt,
                    aby dostać dużą dawkę motoryzacyjnych ciekawostek.
                </p>
                <div className="flex">
                    <label className="name">
                        <span>Imię</span>
                        <input />
                    </label>
                    <label className="email">
                        <span>E-mail</span>
                        <input />
                    </label>
                    <Button className="button"><span>ZAPISUJE SIĘ</span></Button>
                    <label className="checkbox">
                        <input type='checkbox' />
                        <span className="checkmark" />
                        <span>
                            Zapisując się do newslettera, wyrażasz zgodę na przesyłanie Ci informacji o nowościach, promocjach.
                            Szczegóły związane z przetwarzaniem Twoich danych osobowych znajdziesz w polityce prywatności.
                        </span>
                    </label>
                </div>

            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 16px;
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    *{
        font-family: 'Roboto Condensed';
    }
`

const Content = styled.form`

    background: #FAF7F1;
    border: 6px solid #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    padding: clamp(32px, ${48 / 768 * 100}vw, 64px);

    h2{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
        margin-bottom: 20px;
    }

    .text{
        max-width: 530px;
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    }
    
    .flex{
        display: grid;
        grid-template-columns: 25fr 35fr 25fr;
        grid-template-areas: 'name mail button'
        'checkbox checkbox checkbox';
        align-items: flex-end;
        gap: clamp(32px, ${32 / 768 * 100}vw, 48px);
        margin: 36px 0 0 0;

        @media (max-width: 768px) {
            grid-template-columns: 25fr 35fr;
            grid-template-areas: 
            'name mail'
            'checkbox checkbox'
            'button button';
        }

        @media (max-width: 480px) {
            grid-template-columns: auto;
            grid-template-areas: 
            'name'
            'mail'
            'checkbox'
            'button';
            gap: 24px;
        }

        .checkbox{
            grid-area: checkbox;
        }

        .name{
            grid-area: name;
        }

        .email{
            grid-area: mail;
        }

        .button{
            grid-area: button;
        }
    }

    .checkbox{
        display: flex;
        align-items: flex-start;
        gap: 16px;
    }

    button{
        margin: 0;
    }

    label{
        display: grid;
        align-items: flex-end;
        grid-gap: 4px;

        span{
            font-weight: 600;
            font-size: 16px;
        }

        input, textarea{
            width: 100%;
            background-color: transparent;
            border: 2px solid #23423D;
            box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
            padding: 10px 16px;
            font-size: 16px;
        }

        &.checkbox{
            display: flex;
            gap: 10px;
            width: fit-content;
            span{
                font-size: clamp(13px, ${16 / 768 * 100}vw, 16px );
                font-weight: 400;
                max-width: 560px;
            }
            input{
                width: fit-content;
                box-shadow: unset;
                display: none;
            }
            .checkmark{
                border: 2px solid #3E635D;
                width: 24px;
                height: 24px;
                display: block;
                min-width: 24px;
                position: relative;

                &::after{
                    content: "✔";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: #EDAC2A;
                    opacity: 0;
                }
            }
            input:checked ~ .checkmark {
                &::after{
                    opacity: 1;
                }
            }
        }
    }
`
