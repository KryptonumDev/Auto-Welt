import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
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

    const { register, handleSubmit } = useForm()
    const [inpostNumber, setInpostNumber] = useState(() => {
        if (typeof window !== 'undefined') {
            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
                return 'WAW171M'
            }
        }
        return ''
    })
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
        setInpostNumber(e.name)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>3. Wybierz opcję dostawy</h2>
            <h3>Przedpłata</h3>
            <div>
                {deliveryMethods.map((el, index) => (
                    <label className="radio" key={index}>
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
                                            token={process.env.GATSBY_INPOST_GEO_KEY}
                                            config='parcelCollect'
                                            onPoint={onPointCallback}
                                        />
                                    </aside>
                                )}
                            </>
                        )}
                    </label>
                ))}
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
        cursor: pointer;
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