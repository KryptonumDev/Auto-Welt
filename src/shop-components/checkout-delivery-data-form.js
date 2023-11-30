import React, { useState } from "react"
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { Button } from "./button"
import { Link } from "gatsby";

export default function DeliveryDataForm({ loading, shipingData, setShipingData, setStep }) {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            address: shipingData.address,
            postcode: shipingData.postcode,
            city: shipingData.city,
            additionalinform: shipingData.additionalinform
        }
    });

    const submit = (data) => {
        localStorage.setItem('address', data.address)
        localStorage.setItem('postcode', data.postcode)
        localStorage.setItem('city', data.city)
        localStorage.setItem('additionalinform', data.additionalinform)


        setShipingData({
            address: data.address,
            postcode: data.postcode,
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
                <input {...register("address", { required: true, minLength: 3 })} placeholder="Grzybowska 46/ 6" />
                {errors.address && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
            </label>
            <div className="two-column">
                <label className="postal-code">
                    <span>Kod pocztowy</span>
                    <input {...register("postcode", { required: true, minLength: 5 })} placeholder="00-132" />
                    {errors.postcode && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
                </label>
                <label>
                    <span>Miejscowość</span>
                    <input  {...register("city", { required: true, minLength: 3 })} />
                    {errors.city && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
                </label>
            </div>
            <label >
                <span>Dodaj uwagi odnośnie realizacji zamówienia / informacje dla kuriera</span>
                <textarea  {...register("additionalinform")} rows='7' />
            </label>
            <label className="checkbox">
                <input onClick={(e) => { setCheckboxValue(e.currentTarget.checked) }}  {...register("checkbox")} type='checkbox' />
                <span className="checkmark"></span>
                <span className="text">
                    Zapoznaem się i akceptuję <Link to='/polityka-prywatnosci/'>Politykę prywatności</Link> i <Link to='/regulamin-sklepu/'>Regulamin</Link> sklepu Auto-Welt.info*
                </span>
            </label>
            <Button disabled={loading} >
                <span>
                    PRZECHODZĘ DO PŁATNOŚCI
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
`