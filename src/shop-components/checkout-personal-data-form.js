import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { Button } from "./button"
import axios from "axios";
import { toast } from "react-toastify";

export default function PersonalDataForm({ personalData, setPersonalData, setStep }) {
    const { setValue, register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: personalData.name || '',
            email: personalData.email,
            phone: personalData.phone,
            forFirm: personalData.forFirm === 'true' || personalData.forFirm === true,
            nip: personalData.nip,
            firmName: personalData.firmName,
            firmAdres: personalData.firmAdres,
        }
    });

    const [nipValue, setNipValue] = useState(personalData.nip)
    const [isTrueNip, setIsTrueNip] = useState(false)
    const [checkboxValue, setCheckboxValue] = useState(personalData.forFirm === 'true' || personalData.forFirm === true)
    useEffect(() => {
        if (!checkboxValue) {
            setValue('nip', '')
            setValue('firmName', '')
            setValue('firmAdres', '')
        }
    }, [checkboxValue])
    useEffect(() => {
        setIsTrueNip(false)
    }, [nipValue])


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
        setStep('3')
    }

    useEffect(() => {
        // https://wl-api.mf.gov.pl/api/search/nip/9512465557?date=2023-04-14
        const date = new Date().toISOString().split('T')[0]
        if (nipValue?.length === 10) {
            axios.get(`https://wl-api.mf.gov.pl/api/search/nip/${nipValue}?date=${date}`)
                .then(res => {
                    if (res.data.result.subject) {
                        setValue('firmName', res.data.result.subject.name)
                        setValue('firmAdres', res.data.result.subject.workingAddress)
                        setIsTrueNip(true)
                    } else {
                        toast.warn('Brak informacji w bazie NIP')
                    }
                })
                .catch(err => {
                    toast.error(err.response.data.message)
                })
        }
    }, [nipValue])


    return (
        <Wrapper onSubmit={handleSubmit(submit)} className="form">
            <h2>2. Uzupełnij dane osobiste</h2>
            <h3>Dane do wysyłki</h3>
            <label>
                <span>Imię i Nazwisko*</span>
                <input {...register("name", { required: true, minLength: 3 })} />
                {errors.name && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
            </label>
            <label>
                <span>E-mail*</span>
                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                {errors.email && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
            </label>
            <label>
                <span>Nr. telefonu*</span>
                <input
                    maxLength={11}
                    placeholder="_ _ _  _ _ _  _ _ _" {...register("phone", { required: true, minLength: 11 })}
                    onChange={(e) => {
                        e.target.value = (
                            [...e.target.value.replaceAll(' ', '')].map((val, idx) => {
                                if (val === ' ')
                                    return [val];

                                let ret = [];

                                if (!isNaN(parseInt(val))) {
                                    if (idx > 0 && idx % 3 === 0)
                                        ret.push(' ');
                                    ret.push(val);
                                }

                                return ret;
                            })
                                .reduce((prev, cur) => prev.concat(cur), [])
                                .reduce((prev, cur) => prev += cur, "")
                        );
                        return e;
                    }} />
                {errors.phone && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
            </label>
            <label className="checkbox">
                <input onClick={(e) => { setCheckboxValue(e.currentTarget.checked) }} {...register("forFirm")} type='checkbox' />
                <span className="checkmark"></span>
                <span>Kupuję na firmę</span>
            </label>
            <label className={checkboxValue ? '' : 'disabled'}>
                <span>NIP</span>
                <input maxLength='10' disabled={!checkboxValue} {...register("nip", { required: checkboxValue, maxLength: 10, minLength: 10, onChange: (e) => { setNipValue(e.currentTarget.value) } })} placeholder='___-___-__-__' />
                {((errors.nip && checkboxValue) || (!isTrueNip && checkboxValue)) && <span className="error">Proszę wpisać poprawny NIP</span>}
            </label>
            <label className={checkboxValue ? '' : 'disabled'}>
                <span>Nazwa firmy</span>
                <input disabled={!checkboxValue} {...register("firmName")} />
            </label>
            <label className={checkboxValue ? '' : 'disabled'}>
                <span>Adres firmy</span>
                <input disabled={!checkboxValue} {...register("firmAdres")} />
            </label>

            <span className="anotation">Upewnij się, że Twoje dane są poprawne.</span>

            <Button disabled={!isTrueNip && checkboxValue} type='submit'>
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
