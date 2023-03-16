import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Delivery from "./checkout-delivery"
import DeliveryDataForm from "./checkout-delivery-data-form"
import Payment from "./checkout-payment"
import PopUp from "./checkout-payment-pop-up"
import PersonalDataForm from "./checkout-personal-data-form"
import Steps from "./checkout-steps"
import Summary from "./checkout-summary"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const WooCommerce = new WooCommerceRestApi({
    url: `${process.env.GATSBY_WORDPRESS_URL}/`,
    consumerKey: process.env.GATSBY_WOO_KEY,
    consumerSecret: process.env.GATSBY_WOO_SECRET,
    version: 'wc/v3'
});
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISH_KEY);

export default function Checkout({ items, sum }) {
    const [clientSecret, setClientSecret] = useState("");
    const [step, setStep] = useState(1)
    const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod'))
    const [orderNumber, setOrderNumber] = useState(null)
    const [delivery, setDelivery] = useState({
        type: localStorage.getItem('delivery-type'),
        description: localStorage.getItem('delivery-description'),
        price: localStorage.getItem('delivery-price') ? localStorage.getItem('delivery-price') : 10,
        pricetext: 'od 10 zł'
    })
    const [personalData, setPersonalData] = useState({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        forFirm: localStorage.getItem('forFirm'),// not used
        nip: localStorage.getItem('nip'), // not used
        firmName: localStorage.getItem('firmName'), // not used
        firmAdres: localStorage.getItem('firmAdres'), // not used
    })
    const [shipingData, setShipingData] = useState({
        address: localStorage.getItem('address'),
        postcode: localStorage.getItem('postcode'),
        country: localStorage.getItem('country'),
        city: localStorage.getItem('city'),
        additionalinform: localStorage.getItem('additionalinform'), // not used
    })


    useEffect(() => {
        if (step === 5) {

            let line_items = items.map(el => {
                return {
                    product_id: el.databaseId,
                    quantity: el.quantity
                }
            });
            let params = {
                method_title: delivery.type,
                method_description: delivery.description,
                method_supports: [
                    "products"
                ],
                set_paid: false,
                billing: {
                    first_name: personalData.name.split(' ')[0],
                    last_name: personalData.name.split(' ')[1],
                    address_1: shipingData.address,
                    address_2: "",
                    city: shipingData.city,
                    postcode: shipingData.postcode,
                    state: "",
                    country: shipingData.country,
                    email: personalData.email,
                    phone: personalData.phone
                },
                shipping: {
                    first_name: personalData.name.split(' ')[0],
                    last_name: personalData.name.split(' ')[1],
                    address_1: shipingData.address,
                    address_2: "",
                    city: shipingData.city,
                    postcode: shipingData.postcode,
                    state: "",
                    country: shipingData.country
                },
                line_items: line_items
            }

            WooCommerce.post("orders", params) // add delivery price to params
                .then((response) => {
                    setOrderNumber(response.data.id)
                    debugger
                    fetch("/api/create-intent", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ count: (sum + delivery.price) * 100, id: response.data.id }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            setClientSecret(data.clientSecret)

                            // CHANGE STATUS AFTER PAYMENT
                            // CAN I USE SOME TYPE OF PROMISE IN STRIPE FOR THAT??
                            // WooCommerce.put(`orders/${orderNumber}`, { status: "processing" })
                            //     .then((response) => {
                            //         console.log(response.data);
                            //     })
                        })
                        .catch(erorr => {
                            debugger
                            // ANULATE order
                        })
                })
                .catch(erorr => {
                    debugger
                    // SHOW ERROR
                })



        }
    }, [step, shipingData, delivery, personalData, sum, items])

    return (
        <Wrapper>
            <div className="content">
                <Link to='/koszyk/'>Powrót do koszyka</Link>
                <Steps setStep={setStep} step={step} />
                {step === 1 && (
                    <PersonalDataForm personalData={personalData} setPersonalData={setPersonalData} setStep={setStep} />
                )}
                {step === 2 && ( // REMEMBER NOT WORK
                    <Delivery setDelivery={setDelivery} setStep={setStep} />
                )}
                {step === 3 && (
                    <DeliveryDataForm shipingData={shipingData} setShipingData={setShipingData} setStep={setStep} />
                )}
                {step >= 4 && ( // REMEMBER NOT WORK
                    <Payment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setStep={setStep} />
                )}
                {step === 5 && (
                    <>
                        {clientSecret
                            ? <Elements options={{ clientSecret: clientSecret }} stripe={stripePromise} >
                                <PopUp clientSecret={clientSecret} />
                            </Elements>
                            : <div>Loader</div>
                        }
                    </>
                )}
            </div>
            <Summary delivery={delivery} sum={sum} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 64px;

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

    .form{
        label{
            display: grid;
            grid-gap: 4px;

            span{
                font-weight: 600;
                font-size: 18px;
            }

            input, textarea{
                width: 100%;
                background-color: transparent;
                border: 2px solid #23423D;
                box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
                padding: 10px 16px;
                font-size: 16px;
            }

            &.checkbox{
                margin-top: 36px;
                display: flex;
                align-items: center;
                gap: 10px;
                width: fit-content;
                input{
                    width: fit-content;
                    box-shadow: unset;
                    display: none;
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