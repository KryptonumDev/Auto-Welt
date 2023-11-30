import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import Delivery from "./checkout-delivery"
import DeliveryDataForm from "./checkout-delivery-data-form"
import PersonalDataForm from "./checkout-personal-data-form"
import Steps from "./checkout-steps"
import Summary from "./checkout-summary"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import { toast } from "react-toastify"
import axios from "axios"

const WooCommerce = new WooCommerceRestApi({
    url: `${process.env.GATSBY_WORDPRESS_URL}/`,
    consumerKey: process.env.GATSBY_WOO_KEY,
    consumerSecret: process.env.GATSBY_WOO_SECRET,
    version: 'wc/v3'
});

const getItem = (name, altVal = '') => {
    return localStorage.getItem(name) !== 'null' ? localStorage.getItem(name) : altVal
}

export default function Checkout({ items, sum }) {
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState('2')
    const [delivery, setDelivery] = useState({
        type: getItem('delivery-type'),
        description: getItem('delivery-description'),
        price: getItem('delivery-price', 10),
        pricetext: 'od 20 zł'
    })
    const [personalData, setPersonalData] = useState({
        name: getItem('name'),
        email: getItem('email'),
        phone: getItem('phone'),
        forFirm: getItem('forFirm'),
        nip: getItem('nip'),
        firmName: getItem('firmName'),
        firmAdres: getItem('firmAdres'),
    })
    const [shipingData, setShipingData] = useState({
        address: getItem('address'),
        postcode: getItem('postcode'),
        city: getItem('city'),
        additionalinform: getItem('additionalinform'),
    })

    useEffect(() => {
        if (step === '5') {
            setLoading(true)
            let line_items = items.map(el => ({
                product_id: el.databaseId,
                quantity: el.quantity,
            }))

            let params = generateParams(line_items, delivery, personalData, shipingData)

            WooCommerce.post("orders", params)
                .then((response) => {
                    axios.post('/api/create-transaction', {
                        "description": 'Zamówienie w sklepie Auto Welt nr. ' + response.data.number,
                        "id": response.data.id,
                        "key": response.data.number,
                        "amount": response.data.total * 100,
                        "sessionId": response.data.number,
                        "email": response.data.billing.email,
                        "urlReturn": `${window?.location?.origin}/api/verify-transaction?session=${response.data.number}&id=${response.data.id}&origin=${window?.location?.origin}`,
                        "urlStatus": `${window?.location?.origin}/api/complete-transaction?session=${response.data.number}&id=${response.data.id}`,
                    })
                        .then(function (value) {
                            localStorage.setItem('woo-next-cart', null);
                            localStorage.setItem('payLink', value.data.link)
                            window.location.href = value.data.link
                            setLoading(false)
                        })
                        .catch(() => {
                            toast.error('Nie udało się utworzyć bramkę płatności. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami.')
                            setStep('4')
                            setLoading(false)
                        });

                })
                .catch(() => {
                    toast.error('Nie udało się utworzyć zamówienia. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami.')
                    setStep('4')
                    setLoading(false)
                })
        }

        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
        }
    }, [step, delivery, shipingData, personalData, sum, items])

    return (
        <Wrapper>
            <div className="content">
                <Link className="back-link" to='/koszyk/'>Powrót do koszyka</Link>
                <button disabled={step <= '2'} onClick={() => { setStep((step - 1).toString()) }} className="back-link second" to='/koszyk/'>Powrót do poprzedniego kroku</button>
                <Steps setStep={setStep} step={step} />
                {step === '2' && (
                    <PersonalDataForm personalData={personalData} setPersonalData={setPersonalData} setStep={setStep} />
                )}
                {step === '3' && (
                    <Delivery delivery={delivery} setDelivery={setDelivery} setStep={setStep} />
                )}
                {step >= '4' && (
                    <DeliveryDataForm loading={loading} shipingData={shipingData} setShipingData={setShipingData} setStep={setStep} />
                )}
            </div>
            <Summary delivery={delivery} sum={sum} />
        </Wrapper>
    )
}

const loaderAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`

const Loader = styled.div`
    position: fixed;
    z-index: 2000;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
    display: flex;
    justify-content: center;
    align-items: center;

    .wrap{
        width: 80px;
        height: 80px;
        position: relative;
    }

    .wrap div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: ${loaderAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .wrap div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    .wrap div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    .wrap div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
`

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 64px;

    button{
        margin-left: 11px !important;
        margin-right: 11px !important;
        width: calc(100% - 22px) !important;

        &.back-link{
            margin-left: 0 !important;
            width: fit-content !important;
            text-align: left;
        }
    }

    .back-link{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        text-decoration: none;

        &.second{
            display: block;
            cursor: pointer;
            margin-top: 24px;
            border: none;
            background-color: transparent;

            &:disabled{
                cursor: default;
                opacity: .5;
            }
        }
    }

    @media (max-width: 840px) {
        display: block;
    }

    .content{
        width: 100%;
    }

    h2{
        font-family: 'Nocturne Serif';  
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }

    h3{
        font-size: 24px;
        color: #23423D;
    }

    .radio{
        input{
            display: none;
        }

        input:checked ~ .button::after{
            opacity: 1;
        }

        .button{
            position: relative;
            width: 28px;
            height: 28px;   
            border: 2px solid #EDAC2A;
            border-radius: 50%;
            display: block;

            &::after{
                
            content: "";
                position: absolute;
                left: 4px;
                right: 4px;
                top: 4px;
                bottom: 4px;
                border-radius: 50%;
                background-color: #EDAC2A;
                opacity: 0;
                transition: opacity .2s ease-out;
            }
        }
    }

    .form{
        label{
            display: grid;
            grid-gap: 4px;
            transition: opacity .3s ease-out;

            &.disabled{
                opacity: .5;
                pointer-events: none;
            }

            span{
                font-weight: 600;
                font-size: 18px;

                &.error{
                    font-size: 13px;
                    color: #D63D3D;
                    height: 0;
                }
            }

            input, textarea{
                width: 100%;
                background-color: transparent;
                border: 2px solid #23423D;
                padding: 10px 16px;
                font-size: 16px;
            }

            &.checkbox{
                margin-top: 36px;
                display: grid;
                align-items: flex-start;
                grid-template-columns: 24px auto;
                gap: 10px;
                width: fit-content;
                input{
                    width: fit-content;
                    box-shadow: unset;
                    opacity: 0;
                    position: absolute;
                    width: 0;
                    height: 0;

                    &:focus-visible ~ .checkmark{
                        outline: 2px solid #EDAC2A;
                    }
                }
                .checkmark{
                    border: 2px solid #3E635D;
                    width: 24px;
                    height: 24px;
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
    }
`

const generateParams = (line_items, delivery, personalData, shipingData) => ({
    method_title: delivery.type,
    method_description: delivery.description,
    method_supports: [
        "products"
    ],
    set_paid: false,
    payment_method_title: 'Przelewy24',
    customer_note: shipingData.additionalinform,
    billing: {
        first_name: personalData.name.split(' ')[0],
        last_name: personalData.name.split(' ')[1],
        address_1: shipingData.address,
        address_2: personalData.forFirm ? personalData.firmAdres : '',
        city: shipingData.city,
        postcode: shipingData.postcode,
        country: 'PL',
        email: personalData.email,
        phone: personalData.phone,
        company: personalData.forFirm ? personalData.firmName : '',
    },
    shipping: {
        first_name: personalData.name.split(' ')[0],
        last_name: personalData.name.split(' ')[1],
        address_1: shipingData.address,
        address_2: personalData.firmAdres,
        city: shipingData.city,
        postcode: shipingData.postcode,
        state: "",
        country: 'PL',
        phone: personalData.phone,
    },
    meta_data: [
        {
            key: '_billing_nip',
            value: personalData.forFirm ? personalData.nip : ''
        }
    ],
    line_items: line_items,
    shipping_lines: [
        delivery.type === 'Inpost – paczkomaty 24/7' ? {
            method_id: "easypack_parcel_machines",
            method_title: "InPost Paczkomat 24/7",
            total: `${delivery.price}`,
            meta_data: [
                {
                    key: "Numer paczkomatu",
                    value: delivery.inpostNumber
                }
            ]
        } : {
            method_id: "local_pickup",
            method_title: "Odbiór osobisty",
            total: `0`
        }
    ]
})