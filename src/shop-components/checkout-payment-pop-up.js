import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"
import styled from "styled-components"
import { Button } from "./button"

export default function PopUp({ orderNumber, clientSecret }) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) return;

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `https://autoweltshop.gatsbyjs.io/api/complete-payment?id=${orderNumber}`
            }
        })
            .then(function (result) {
                if (result.error) {
                    // Inform the customer that there was an error.
                }
            });
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Overlay />
            <Content>
                <PaymentElement />
                <Button disabled={!stripe} ><span>PŁACĘ</span></Button>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    position: fixed;
    z-index: 20;
    inset: 0;
`

const Content = styled.div`
    position: fixed;
    z-index: 21;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    max-width: 1080px;
    width: 80vw;
    max-height: 90vh;
    overflow-y: auto;
    padding: clamp(32px, ${32 / 768 * 100}vw, 64px);
    background: #FAF6EE;
    border: 6px solid #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;

    @media (max-width: 480px) {
        width: 95vw;
        max-height: 95vh;
    }


    button{
        margin: 32px auto 0 auto;
    }
`

const Overlay = styled.div`
    position: fixed;
    z-index: 20;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
`