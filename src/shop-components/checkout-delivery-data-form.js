import React, { useState } from "react"
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { Button } from "./button"

export default function DeliveryDataForm({ shipingData, setShipingData, setStep }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            address: shipingData.address,
            postcode: shipingData.postcode,
            country: shipingData.country,
            city: shipingData.city,
            additionalinform: shipingData.additionalinform
        }
    });

    const submit = (data) => {
        localStorage.setItem('address', data.address)
        localStorage.setItem('postcode', data.postcode)
        localStorage.setItem('country', data.country)
        localStorage.setItem('city', data.city)
        localStorage.setItem('additionalinform', data.additionalinform)


        setShipingData({
            address: data.address,
            postcode: data.postcode,
            country: data.country,
            city: data.city,
            additionalinform: data.additionalinform
        })
        setStep('5')
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} className="form">
            <h2>4. Uzupełnij dane adresowe</h2>
            <h3>Adres dostawy</h3>
            <label>
                <span>Ulica i nr. domu/lokalu</span>
                <input {...register("address")} placeholder="Grzybowska 46/ 6" />
            </label>
            <div className="two-column">
                <label className="postal-code">
                    <span>Kod pocztowy</span>
                    <input {...register("postcode")} placeholder="00-132" />
                </label>
                <label>
                    <span>Miejscowość</span>
                    <input  {...register("country")} />
                </label>
            </div>
            <label className="country">
                <span>Kraj</span>
                <input  {...register("city")} />
            </label>
            <label >
                <span>Dodaj uwagi odnośnie realizacji zamówienia / informacje dla kuriera</span>
                <textarea  {...register("additionalinform")} rows='7' />
            </label>
            <Button >
                <span>
                    PRZECHODZĘ DALEJ
                </span>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: grid;
    grid-gap: 24px;

    .checkbox{
        margin-top: 16px !important;
    }

    .two-column{
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: 24px;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;

            .postal-code{
                max-width: 180px;
            }
        }
    }

    .country{
        max-width: 240px;
    }
    
    button{
        margin-left: 10px!important;
    }
`