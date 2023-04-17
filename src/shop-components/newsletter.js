import React from "react"
import styled from "styled-components"
import { Button } from "./button"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"

const getItem = (name, altVal = '') => {
    return localStorage.getItem(name) !== 'null' ? localStorage.getItem(name) : altVal
}

export default function Newsletter() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: getItem('name'),
            email: getItem('email'),
        }
    })

    const submit = (data) => {
        axios.post(`${process.env.GATSBY_WORDPRESS_URL}/wp-json/newsletter/v2/subscribers`, {
            email: data.email,
            first_name: data.name.split(' ')[0],
            last_name: data.name.split(' ')[1],
            status: "confirmed"
        }, {
            auth: {
                username: process.env.NEWSLETTER_USER,
                password: process.env.NEWSLETTER_PASSWORD
            }
        }).then(() => {
            toast('Zapisano do newslettera ')
        }).catch(() => {
            toast('Wystąpił błąd, spróbuj ponownie później')
        })
    }

    return (
        <Wrapper >
            <Content onSubmit={handleSubmit(submit)} >
                <h2>Newsletter</h2>
                <p className="text">
                    Bądź na bieżąco! Zapisz się do newslettera Auto-Welt,
                    aby dostać dużą dawkę motoryzacyjnych ciekawostek.
                </p>
                <div className="flex">
                    <label className="name">
                        <span>Imię</span>
                        <input {...register("name", { minLength: 3, required: true })} />
                        {errors.name && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
                    </label>
                    <label className="email">
                        <span>E-mail</span>
                        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                        {errors.email && <span className="error">Proszę poprawnie uzupełnić to pole</span>}
                    </label>
                    <Button type="submit" className="button"><span>ZAPISUJĘ SIĘ</span></Button>
                    <label className="checkbox">
                        <input type='checkbox' {...register("check", { required: true })} />
                        <span className="checkmark" />
                        <span>
                            Zapisując się do newslettera, wyrażasz zgodę na przesyłanie Ci informacji o nowościach, promocjach.
                            Szczegóły związane z przetwarzaniem Twoich danych osobowych znajdziesz w <Link to='/polityka-prywatnosci/'>polityce prywatności</Link>.
                        </span>
                        {errors.check && <span className="error">Ta zgoda jest wymagana</span>}
                    </label>
                </div>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 16px;
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    *{
        font-family: 'Roboto Condensed';
    }

    .error{
        font-size: 13px !important;
        color: red !important;
        font-weight: 600 !important;
        height: 0;
        position: absolute;
        bottom: -4px;
    }
`

const Content = styled.form`

    background: #FAF7F1;
    border: 6px solid #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    padding: clamp(32px, ${48 / 768 * 100}vw, 64px);

    h2{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
        margin-bottom: 20px;
    }

    .text{
        max-width: 530px;
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    }
    
    .flex{
        display: grid;
        grid-template-columns: 25fr 35fr 25fr;
        grid-template-areas: 'name mail button'
        'checkbox checkbox checkbox';
        align-items: flex-end;
        gap: clamp(32px, ${32 / 768 * 100}vw, 48px);
        margin: 36px 0 0 0;

        @media (max-width: 768px) {
            grid-template-columns: 25fr 35fr;
            grid-template-areas: 
            'name mail'
            'checkbox checkbox'
            'button button';
        }

        @media (max-width: 480px) {
            grid-template-columns: auto;
            grid-template-areas: 
            'name'
            'mail'
            'checkbox'
            'button';
            gap: 24px;
        }

        .checkbox{
            grid-area: checkbox;
        }

        .name{
            grid-area: name;
        }

        .email{
            grid-area: mail;
        }

        .button{
            grid-area: button;
        }
    }

    .checkbox{
        display: flex;
        align-items: flex-start;
        gap: 16px;
    }

    button{
        margin: 0;
    }

    label{
        display: grid;
        align-items: flex-end;
        grid-gap: 4px;
        position: relative;

        span{
            font-weight: 600;
            font-size: 16px;
            color: #23423D;
        }

        input, textarea{
            width: 100%;
            background-color: transparent;
            border: 2px solid #23423D;
            padding: 10px 16px;
            font-size: 16px;
        }

        &.checkbox{
            display: flex;
            gap: 16px;
            width: fit-content;
            span{
                font-size: clamp(13px, ${16 / 768 * 100}vw, 16px );
                font-weight: 400;
                max-width: 560px;
                color: #000000;

                a{
                    color: #23423D;
                    font-weight: 600;
                }
            }
            input{
                width: fit-content;
                box-shadow: unset;
                display: none;
            }
            .checkmark{
                border: 2px solid #3E635D;
                width: 24px;
                height: 24px;
                display: block;
                min-width: 24px;
                position: relative;

                &::after{
                    content: "✔";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: #EDAC2A;
                    opacity: 0;
                }
            }
            input:checked ~ .checkmark {
                &::after{
                    opacity: 1;
                }
            }
        }
    }
`
