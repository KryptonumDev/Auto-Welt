import React from "react"
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { Button } from "./button"

export default function PersonalDataForm({ personalData, setPersonalData, setStep }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: personalData.name,
            email: personalData.email,
            phone: personalData.phone,
            forFirm: personalData.forFirm,
            nip: personalData.nip,
            firmName: personalData.firmName,
            firmAdres: personalData.firmAdres,
        }
    });

    const submit = (data) => {
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', data.email)
        localStorage.setItem('phone', data.phone)
        localStorage.setItem('forFirm', data.forFirm)
        localStorage.setItem('nip', data.nip)
        localStorage.setItem('firmName', data.firmName)
        localStorage.setItem('firmAdres', data.firmAdres)

        setPersonalData({
            name: data.name,
            email: data.email,
            phone: data.phone,
            forFirm: data.forFirm,
            nip: data.nip,
            firmName: data.firmName,
            firmAdres: data.firmAdres,
        })
        setStep(2)
    }

    return (
        <Wrapper onSubmit={handleSubmit(submit)} className="form">
            <h2>2. Uzupełnij dane osobiste</h2>
            <h3>Dane do wysyłki</h3>
            <label>
                <span>Imię i Nazwisko</span>
                <input {...register("name")} />
            </label>
            <label>
                <span>E-mail</span>
                <input {...register("email")} />
            </label>
            <label>
                <span>Nr. telefonu</span>
                <input {...register("phone")} />
            </label>
            <label className="checkbox">
                <input {...register("forFirm")} type='checkbox' />
                <span className="checkmark"></span>
                <span>Kupuję na firmę</span>
            </label>
            <label>
                <span>NIP</span>
                <input {...register("nip")} placeholder='___-___-__-__' />
            </label>
            <label>
                <span>Nazwa firmy</span>
                <input {...register("firmName")} />
            </label>
            <label>
                <span>Adres firmy</span>
                <input {...register("firmAdres")} />
            </label>

            <span className="anotation">Upewnij się, że Twoje dane są poprawne.</span>

            <Button type='submit' >
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

    h3{
        margin-top: 20px;
    }

    .anotation{
        font-size: 18px;
        color: #3E635D;
    }
    
    button{
        margin-left: 10px!important;
    }

`