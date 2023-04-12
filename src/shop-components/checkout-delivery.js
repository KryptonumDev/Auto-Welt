import { graphql, useStaticQuery } from "gatsby"
import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button } from "./button"
import { InpostGeowidget } from "react-inpost-geowidget";

export default function Delivery({ delivery, setDelivery, setStep }) {

    const { wpPage: { shopParametrs: { deliveryMethods } } } = useStaticQuery(graphql`
    query deliveryMethods {
        wpPage(id: {eq: "cG9zdDoyOTI1"}) {
          shopParametrs {
            deliveryMethods {
              price
              name
              description
            }
          }
        }
    }
  `)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [inpostNumber, setInpostNumber] = useState('')
    const [selected, setSelected] = useState(() => {
        let id = 0
        deliveryMethods.forEach((el, index) => {
            if (el.name === delivery.type) {
                id = index
            }
        })
        return id
    })

    const handleChange = index => {
        setSelected(index)
    }

    const submit = (data) => {
        localStorage.setItem('delivery-type', deliveryMethods[data.method].name)
        localStorage.setItem('delivery-description', deliveryMethods[data.method].description)
        localStorage.setItem('delivery-price', deliveryMethods[data.method].price ? deliveryMethods[data.method].price : 0)

        setDelivery({
            type: deliveryMethods[data.method].name,
            description: deliveryMethods[data.method].description,
            price: deliveryMethods[data.method].price ? deliveryMethods[data.method].price : '0',
            inpostNumber: inpostNumber
        })
        setStep('4')
    }

    const onPointCallback = (e) => {
        console.log(e);
        setInpostNumber(e.name)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>3. Wybierz opcję dostawy</h2>
            <h3>Przedpłata</h3>
            <div>
                {deliveryMethods.map((el, index) => (
                    <label className="radio">
                        <header className="radio-flex">
                            <div>
                                <input onClick={() => { handleChange(index) }} checked={selected === index} value={index} {...register("method")} type='radio' name='method' />
                                <span className="button" />
                                <div>
                                    <h4>{el.name}</h4>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                            <span>
                                {el.price ? el.price + ' zł' : 'Gratis'}
                            </span>
                        </header>
                        {(el.name === 'Inpost – paczkomaty 24/7') && (
                            <>
                                {inpostNumber ? (
                                    <div className={selected === index ? "chosen-inpost active" : "chosen-inpost"}>
                                        Wybrany paczkomat: {inpostNumber} <button onClick={() => { setInpostNumber('') }}>Zmienić paczkomat</button>
                                    </div>
                                ) : (
                                    <aside className={selected === index ? "geo-widget active" : "geo-widget"}>
                                        <InpostGeowidget
                                            token={'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjE5OTY2Nzc0MDEsImlhdCI6MTY4MTMxNzQwMSwianRpIjoiZDgxNDRkNTMtMjI1MS00MDRlLThlZTctYzRiZmQzMjJjYWU1IiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTo3Tm8ydDZILUxqb3V5RklmdmtVVHVwT1RId3VwMnZPYm5nelkwWnBmdkQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiNGYzNTcxMDYtOWQxYy00Mjc4LTlmNWQtZWYyNWM4NjYxMmIwIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6IjRmMzU3MTA2LTlkMWMtNDI3OC05ZjVkLWVmMjVjODY2MTJiMCIsImFsbG93ZWRfcmVmZXJyZXJzIjoiYXV0b3dlbHRzaG9wLmdhdHNieWpzLmlvIiwidXVpZCI6ImZlZDg4NTlhLTY5YTUtNDVlZS1hNmNkLTZjNzNiOWE5YzNkMiJ9.BUTt3DMh_utg06AEPexvCPEYM4ODavkDiJ8tG4CkvrmfsX6Sx2O_C_7KWhO8XK6uBmhvinC0q8Q4DnaE8MNiYO10YdIEPS_7_SWDSYB2euURR6FE87KK3sE6FgqV4xV7P0l5k52Gi3QkrqeUnao2RjgpIyYhM5tRYTXyr4zDbrFuwJjWPdPXZqWNw1KPB9bAOD_gDwYkS13Vz04kSIVH-o1l0ivvIGD5oQYDnzDdZFVLOrPaBduO9Qoen9M3BgJIFWVFaRN1v1DvSc8wH432LdQsvmWZLe-goIa-FGOWNGifhmqJTCGZOwC_GgtY_-zP8t2a7sCIY349PuiLTPIjSw'}
                                            onPoint={onPointCallback}
                                            config='parcelCollect'
                                        />
                                    </aside>
                                )}
                            </>
                        )}
                    </label>
                ))}f
            </div>
            <Button type='submit' disabled={!inpostNumber && selected === 0}>
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

    .geo-widget{
        transition: height .3s ease-out;
        height: 0px;
        margin-top: 0;

        &.active{
            height: 500px;
            margin-top: 32px;
        }
    }

    label{
        span{
            font-size: 18px;
            font-weight: 600;
            white-space: nowrap;
        }
    }

    .chosen-inpost{
        margin-left: 40px;
        margin-top: 16px;
        opacity: 0;
        height: 0;

        &.active{
            opacity: 1;
            height: auto;
        }
        
        button{
            border: none;
            background-color: transparent;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: rgb(0, 0, 0);
            text-decoration: none;
        }
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

    .radio{
        display: block;
    }
    .radio-flex{
        display: flex;
        justify-content: space-between;
        >div{
            display: grid;
            grid-template-columns: 28px 1fr;
        }
    }

`