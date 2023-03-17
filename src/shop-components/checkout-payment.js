import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./button"

const paymentMethods = [
    {
        name: 'Przelewy 24',
        type: 'p24'
    },
    {
        name: 'BLIK',
        type: 'blik'
    }
]

export default function Payment({ paymentMethod, setPaymentMethod, setStep }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [selected, setSelected] = useState(() => {
        let id = 0
        paymentMethods.forEach((el, index) => {
            if (el.type === paymentMethod) {
                id = index
            }
        })
        return id
    })

    const handleChange = index => {
        setSelected(index)
    }

    const submit = (data) => {
        localStorage.setItem('paymentMethod', paymentMethods[data.paymanet].type)
        setPaymentMethod(paymentMethods[data.paymanet].type)
        setStep(5)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>5. Wybierz metodę płatności</h2>
            {paymentMethods.map((el, index) => (
                <label className="radio">
                    <input onClick={() => { handleChange(index) }} checked={selected === index} value={index} {...register("paymanet")} type='radio' name='paymanet' />
                    <span className="button" />
                    <div>
                        <h3>{el.name}</h3>
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
    
    h2{
        margin-bottom: 40px;
    }

    h3{
        font-family: 'Roboto Condensed';
        font-weight: 600;
        font-size: 18px;
        color: #23423D;
    }

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

    label{
        margin-top: 20px;
        display: grid;
        grid-gap: 8px;
        align-items: center;
        grid-template-columns: 1fr auto;
        width: fit-content;
    }
    
    button{
        margin-left: 10px !important;
    }
`