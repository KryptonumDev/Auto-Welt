import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./button"

const paymentMethods = [
    {
        name: 'Inpost – paczkomaty 24/7',
        description: '(następny dzień roboczy od momentu nadania)',
        price: 10
    },
    // {
    //     name: 'Pocztex kurier 48',
    //     description: '(2 dni robocze od momentu nadania)',
    //     price: 12
    // },
    // {
    //     name: 'Kurier DPD',
    //     description: '(1–2 dni robocze od momentu nadania)',
    //     price: 16
    // },
    {
        name: 'Odbiór osobisty',
        description: '(po wcześniejszym kontakcie)',
        price: null
    }
]

export default function Delivery({ setDelivery, setStep }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const submit = (data) => {
        localStorage.setItem('delivery-type', paymentMethods[data.method].name)
        localStorage.setItem('delivery-description', paymentMethods[data.method].description)
        localStorage.setItem('delivery-price', paymentMethods[data.method].price)

        setDelivery({
            type: paymentMethods[data.method].name,
            description: paymentMethods[data.method].description,
            price: paymentMethods[data.method].price
        })
        setStep(3)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>3. Wybierz opcję dostawy</h2>
            <h3>Przedpłata</h3>
            <div>
                {paymentMethods.map((el, index) => (
                    <label>
                        <div>
                            <input value={index} {...register("method")} defaultChecked={!index} type='radio' name='delivery' />
                            <div>
                                <h4>{el.name}</h4>
                                <p>{el.description}</p>
                            </div>
                        </div>
                        <span>
                            {el.price ? el.price + ' zł' : 'Gratis'}
                        </span>
                    </label>
                ))}
            </div>
            <Button type='submit' >
                <span>
                    PRZECHODZĘ DALEJ
                </span>
            </Button>
        </Wrapper >
    )
}

const Wrapper = styled.form`
    h3{
        margin-top: 30px;
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
    
    button{
        margin-left: 10px!important;
    }

`