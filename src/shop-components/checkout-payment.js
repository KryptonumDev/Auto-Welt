import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./button"
import { Link } from "gatsby"

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

    const [checkboxValue, setCheckboxValue] = useState(false)
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
        setStep('6')
    }

    return (
        <Wrapper className="form" onSubmit={handleSubmit(submit)} >
            <h2>5. Wybierz metodę płatności</h2>
            {paymentMethods.map((el, index) => (
                <label key={index} className="radio">
                    <input onClick={() => { handleChange(index) }} checked={selected === index} value={index} {...register("paymanet")} type='radio' name='paymanet' />
                    <span className="button" />
                    <div>
                        <h3>{el.name}</h3>
                    </div>
                </label>
            ))}
            <label className="checkbox">
                <input onClick={(e) => { setCheckboxValue(e.currentTarget.checked) }}  {...register("checkbox")} type='checkbox' />
                <span className="checkmark"></span>
                <span className="text">Akceptuję <Link to='/polityka-prywatnosci/'>Politykę prywatności</Link> i <Link to='/regulamin-wystaw/'>Regulamin</Link> sklepu Auto-Welt.info*</span>
            </label>
            <Button disabled={!checkboxValue}>
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

    &.form{ 
        label{
            margin-top: 20px;
            display: grid;
            gap: 12px;
            align-items: center !important;
            grid-template-columns: 1fr auto;
            width: fit-content;
            cursor: pointer;
        }

        .checkbox{
            color: #23423D;
            a{
                font-family: 'Roboto Condensed';
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
                font-feature-settings: 'pnum' on, 'onum' on;
                color: #23423D;
                transition: color .2s ease-out;

                &:hover{
                    color: #EDAC2A;
                }
            }

            .text{
                margin-top: 3px;
            }
        }
    }
        
    button{
        margin-left: 10px !important;
    }
`