import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Button } from "./button"
import { toast } from "react-toastify"
import axios from "axios"

export default function PopUp({ intent, step, setStep, changePaymentMethod, orderNumber, clientSecret }) {
    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        const handleTabClose = event => {
            axios.post("/api/cancel-intent", {
                intent: intent,
                orderNumber: orderNumber
            }, {
                headers: { "Content-Type": "application/json" },
            })
        };

        if (step === '6') {
            window.addEventListener('beforeunload', handleTabClose);
        }

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, [step, intent, orderNumber])

    const handleSubmit = async (event) => {
        setStep('7')
        event.preventDefault()
        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: {
                return_url: `https://auto-welt.info/api/complete-payment?id=${orderNumber}`
            }
        })

        if (error) {
            toast.error(error.message)
        }

        if (paymentIntent?.status === 'succeeded' && typeof window !== 'undefined') {
            window.location.href = `https://auto-welt.info/api/complete-payment?id=${orderNumber}&redirect_status=${paymentIntent.status}&payment_intent=${paymentIntent.id}&payment_intent_client_secret=${clientSecret}`
        }

        if (paymentIntent?.last_payment_error) {
            toast.error('Wystąpił błąd podczas płatności. Spróbuj ponownie.')
        }
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Overlay onClick={() => { changePaymentMethod() }} />
            <Content>
                <PaymentElement />
                <Button disabled={!stripe} ><span>PŁACĘ</span></Button>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    position: fixed;
    z-index: 200;
    inset: 0;
`

const Content = styled.div`
    position: fixed;
    z-index: 201;
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
    z-index: 200;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
`