import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"
import styled from "styled-components"

export default function PopUp({ orderNumber, clientSecret }) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) return;

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
        if (paymentIntent && paymentIntent.status === 'succeeded') {
            console.log(paymentIntent.status)
            // Handle successful payment here
            debugger
        } else {
            console.log(paymentIntent.status)
            // Handle unsuccessful, processing, or canceled payments and API errors here
            debugger
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `http://localhost:8000/api/complete-payment?id=${orderNumber}`
            }
        })
            .then(function (result) {
                debugger
                if (result.error) {
                    // Inform the customer that there was an error.
                }
            });
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe} >Submit</button>
        </Wrapper>
    )
}

const Wrapper = styled.form`

`