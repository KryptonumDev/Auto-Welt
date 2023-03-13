import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"
import styled from "styled-components"

export default function PopUp({ }) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) return;


        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:8000/podziekowanie/", // success url
            },
        })


        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.


            // WooCommerce.post("orders", data)
            // .then((response) => {
            //   debugger
            // })
            // .catch((error) => {
            //   debugger
            // });
        }
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