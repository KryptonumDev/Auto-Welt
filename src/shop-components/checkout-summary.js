import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Summary({ delivery, sum }) {
    return (

        <Sticky>
            <div className="title">
                <StaticImage className="image" src="../../static/images/order-background.png" alt='background' />
                <h2>Twoje zamówienie</h2>
            </div>
            <div className="text">
                <div>
                    <span>Wartość zamówienia:</span>
                    <span>{sum} zł</span>
                </div>
                <div>
                    <span>Dostawa:</span>
                    <span>{delivery.type
                        ? delivery.price !== '0'
                            ? delivery.price + ' zł'
                            : 'Gratis'
                        : delivery.pricetext}
                    </span>
                </div>
                {delivery.type && (
                    <div>
                        <span>Opcja dostawy:</span>
                        <span>{delivery.type}</span>
                    </div>
                )}
                <div>
                    <span>Razem:</span>
                    <span>{+delivery.price + sum} zł</span>
                </div>
            </div>
        </Sticky>
    )
}

const Sticky = styled.div`
    display: sticky;
    top: 0;
    background: #FAF7F1;
    border: 2px solid #EDAC2A;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    height: fit-content;
    min-width: 350px;

    .title{
        position: relative;
        padding: 12px 28px;
    }

    .text{
        padding: 32px 16px;
        display: grid;
        gap: 8px;

        div{
            display: flex;
            justify-content: space-between;
            gap: 12px;

            span{
                font-size: 18px;
                color: #22423D;

                &:first-child{
                    font-weight: 600;
                }
            }

            &:last-child{
                span{
                    font-size: 24px;

                    &:first-child{
                        font-weight: 600;
                    }
                }
            }
        }
    }

    .image{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
    }

    h2{
        text-align: center;
        font-family: 'Nocturne Serif';
        color: #22423D;
        mix-blend-mode: normal;
        font-size: 24px !important;
        position: relative;
        z-index: 2;
    }
`