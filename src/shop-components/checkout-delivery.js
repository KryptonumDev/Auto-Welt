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
            price: deliveryMethods[data.method].price ? deliveryMethods[data.method].price : '0'
        })
        setStep('4')
    }

    const onPointCallback = (e) => {
        console.log(e);
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} >
            <h2>3. Wybierz opcję dostawy</h2>
            <h3>Przedpłata</h3>
            <div>
                {deliveryMethods.map((el, index) => (
                    <label className="radio">
                        <div className="radio-flex">
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
                        </div>
                        {el.name === 'Inpost – paczkomaty 24/7' && (
                            <InpostGeowidget
                                token={process.env.INPOST_GEO_KEY}
                                onPoint={onPointCallback}
                            />
                        )}
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

    .radio{
        display: block;
    }
    .radio-flex{
        display: flex;
    }

`