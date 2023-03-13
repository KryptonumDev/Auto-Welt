import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./button"

const paymentMethods = [
    {
        name: 'Przelewy 24',
    },
    {
        name: 'BLIK'
    }
]

export default function Payment({ paymentMethod, setPaymentMethod, setStep }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const submit = (data) => {
        localStorage.setItem('paymentMethod', 'chosen method')
        setPaymentMethod('chosen method')
        setStep(5)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>5. Wybierz metodę płatności</h2>
            {paymentMethods.map((el, index) => (
                <label>
                    <input value={index} {...register("method")} defaultChecked={!index} type='radio' name='delivery' />
                    <div>
                        <h4>{el.name}</h4>
                        <p>{el.description}</p>
                    </div>
                </label>
            ))}
            <Button >
                <span>
                    KUPUJĘ I PŁACĘ
                </span>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    

    > div{
        display: grid;
        grid-gap: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
            label{
                display: flex;
                justify-content: space-between;

                div{
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;

                    div{
                        display: grid;
                        grid-gap: 6px;
                    }
                }
            }
    }
`