import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useMemo, useState } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button, ButtonLink } from "./button"
import { LightgalleryItem } from "react-lightgallery"
import { toast } from "react-toastify"

export default function Hero({ data }) {

    const { addItem, inCart, updateItemQuantity, getItem } = useCart()
    const [quantity, setQuantity] = useState(1)

    let scale = useMemo(() => {
        let val = null

        data.attributes.every(el => {
            if (el.name === 'Skala') {
                val = el.options[0]
                return false
            }
            return true
        })

        return val
    }, [data])

    const addToCart = (item, quantity) => {
        if (inCart(item.id)) {
            if (getItem(item.id).quantity !== quantity) {
                updateItemQuantity(item.id, quantity)
                toast.warn(`${item.name} ilość w koszyku została zaktualizowana`)
            }
        } else {
            addItem(item, quantity)
            toast(`${item.name} został dodany do koszyka`)
        }
    }

    return (
        <Wrapper>
            <Content>
                <div className="gallery">
                    <div className="main">
                        {data.images.map((el, index) => {
                            if (index) return null

                            return <LightgalleryItem src={el.localFile.publicURL}>
                                <StaticImage className="loupe" src="../../static/images/loupe.png" alt='obrazek dekaracyjny' />
                                <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt || ' '} />
                                {data.images.length > 1 && <span>1 z {data.images.length}</span>}
                            </LightgalleryItem>
                        })}
                    </div>
                    <div className="carousel">
                        <div className="carousel-content">
                            {data.images.map((el, index) => {
                                if (!index) return null
                                return <LightgalleryItem src={el.localFile.publicURL}><GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt || ' '} /></LightgalleryItem>
                            })}
                        </div>
                    </div>
                </div>
                <div className="inform">
                    <h1>{data.name}</h1>
                    {scale
                        ? <p className="scale">Skala: {scale}</p>
                        : null}
                    <div className="flex">
                        <span>Dostępność:</span>
                        <span>
                            {data.stock_status === 'instock' && 'dostępny'}
                            {data.stock_status === 'onbackorder' && 'na zamówienie'}
                            {data.stock_status === 'outofstock' && 'niedostępny'}
                        </span>
                    </div>
                    {data.stock_status === 'instock' && (
                        <div className="flex">
                            <span>Wysyłka w:</span>
                            <span>24 godziny</span>
                        </div>
                    )}
                    <div className="price">
                        <div className="flex-price">
                            {data.on_sale
                                && <div className="discount" >
                                    {data.regular_price}&nbsp;zł
                                </div>}
                            <div className={data.on_sale ? "colored regular" : "regular"} >
                                {data.price}&nbsp;zł
                            </div>
                        </div>
                        <span className="omnibus">Najniższa cena z 30 dni: {data.price}&nbsp;zł</span>
                    </div>
                    <div className="quantity-calculator">
                        {data.stock_status === 'instock' && (
                            <div className="quantity-calculator__content">
                                <span>Ilość:</span>
                                <div className="calculator">
                                    <button disabled={quantity <= 1} onClick={() => { setQuantity(quantity - 1) }} className="minus">
                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 0V2H0V0H14Z" fill="#23423D" />
                                        </svg>
                                    </button>
                                    <div className="quantity">
                                        {quantity}
                                    </div>
                                    <button disabled={quantity >= data.stock_quantity} onClick={() => { setQuantity(quantity + 1) }} className="plus">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7243 4.98047V7.01953H0V4.98047H11.7243ZM7.12129 0V12.4219H4.64493V0H7.12129Z" fill="#23423D" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                        {data.stock_status !== 'instock'
                            ? <ButtonLink to='/kontakt/' className="add-to-cart"><span>ZAPYTAJ O PRODUKT</span></ButtonLink>
                            : <Button disabled={data.stock_status !== 'instock'} onClick={() => { addToCart(data, quantity) }} className="add-to-cart"><span>KUPUJĘ</span></Button>}
                    </div>
                </div>
                <div className="description">
                    <div className="title-description">
                        <StaticImage className="image" src='./../../static/images/description-background.png' alt='tło' />
                        <h2>Opis produktu:</h2>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
                    {data.stock_status !== 'instock'
                        ? <ButtonLink to='/kontakt/' className="description-add-to-cart"><span>ZAPYTAJ O PRODUKT</span></ButtonLink>
                        : <Button disabled={data.stock_status !== 'instock'} onClick={() => { addToCart(data, quantity) }} className="description-add-to-cart"><span>KUPUJĘ</span></Button>}
                </div>
                <div className="details">
                    <div className="details-title">
                        <StaticImage className="image" src='./../../static/images/details-background.png' alt='tło' />
                        <h2>Szczegóły produktu</h2>
                    </div>
                    <div className="grid">
                        {data.attributes.map(el => (
                            <div className="row">
                                <span>{el.name}</span>
                                <div>{el.options[0]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    *{
        font-family: 'Roboto Condensed';
    }

    .flex-price{
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;

        .regular{
            font-size: 28px;
            font-family: 'Nocturne Serif';

            &.colored{
            background: #23423D;
            color: #EDAC2A;
            padding: 2px;
            }
        }

        .discount{
            font-size: 24px;
            font-family: 'Nocturne Serif';
            position: relative;

            &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #EDAC2A;
            left: 0;
            bottom: 0;
            transform: rotateZ(-20deg);
            transform-origin: 0 100%;
            }
        }
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 53fr 47fr;
    grid-gap: 60px clamp(25px, ${25 / 768 * 100}vw,100px);

    @media (max-width: 768px) {
        grid-template-areas: 
        'gallery inform'
        'description description'
        'details details';

        .gallery{
            grid-area: gallery;
        }

        .inform{
            grid-area: inform;
        }

        .description{
            grid-area: description;
        }

        .details{
            grid-area: details;
        }
    }

    @media (max-width: 680px){
        grid-template-columns: 1fr;
        grid-template-areas: 
        'gallery'
        'inform'
        'description'
        'details';
    }


    .description-add-to-cart{
        width: fit-content;
        padding: 0 43px;
        margin: 40px 11px 0 11px;
        background: #EDAC2A;
        color: #1D2B29;
        font-weight: 600;

        span{
            white-space: nowrap;
        }

        &:hover{
            background: #DA9610;
        }
    }

    

  .quantity-calculator{
        margin-top: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 32px;

        .add-to-cart{
            width: fit-content;
            padding: 0 43px;
            margin: 0 11px 0 11px;

            @media (max-width: 680px) {
                max-width: 100%;
            }
            span{
                white-space: nowrap;
            }
        }

        .calculator{
            display: flex;
            justify-content: center;
            width: fit-content;
        }

        .quantity-calculator__content{
            display: flex;
            gap: 20px;
            align-items: center;

            span{
                font-size: 24px;
                color: #23423D;
            }
        }

        .minus, .plus, .quantity{
            background-color: unset;
            border-radius: unset;
            border: 2px solid #EDAC2A;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .minus{
            width: 36px;
            height: 42px;
            cursor: pointer;
            border-right: unset;
            transition: background-color .3s ease-out;
            background-color: #EDAC2A;
            &:hover{
                background-color: #DA9610;
            }

            &:disabled{
                cursor: unset;
                background-color: transparent;
            }
        }

        .quantity{
            height: 42px;
            width: 42px;
            font-size: 24px;
        }

        .plus{
            width: 36px;
            height: 42px;
            background-color: #EDAC2A;
            cursor: pointer;
            border-left: unset;
            transition: background-color .3s ease-out;
            &:hover{
                background-color: #DA9610;
            }

            &:disabled{
                cursor: unset;
                background-color: transparent;
            }
        }
    }

    .grid{

        .row{
            display: grid;
            grid-template-columns: 130px 1fr;

            span{
                padding: 5px 12px;
                display: block;
                background: #EDAC2A;
                border-bottom: 2px solid #FFFFFF;
            }

            div{
                padding: 5px 12px;
                border-bottom: 2px solid #EDAC2A;
                border-right: 2px solid #EDAC2A;
                font-size: 16px;
                color: #23423D;
                text-align: right;
            }

            &:last-child{
                span{
                    border-bottom: 2px solid #EDAC2A;
                }
            }
        }
    }

    .details{
        height: fit-content;
        .details-title{
            padding: 16px;
            position: relative;
            border: 2px solid #EDAC2A;

            .image{
                position: absolute;
                inset: 0;
                z-index: -1;
            }

            h2{
                font-family: 'Nocturne Serif';
                font-weight: 400;
                font-size: 24px;
                color: #23423D;
                text-align: center;
            }
        }
    }

    .gallery{
        .image{
            width: 100%;
            height: 100%;

            img{
                transition: transform .3s ease-out;
            }

            &:hover{
                img{
                    transform: scale(1.07);
                }
            }
        }
        img{
            cursor: pointer;
        }
        button{
            cursor: pointer;
            border: none;
            background-color: transparent;
            width: fit-content;
        }
        .main{
            position: relative;

            .loupe{
                opacity: 0;
                transition: opacity .3s ease-out;
                position: absolute;
                right: 9px;
                top: 9px;
                z-index: 4;
            }

            &:hover{
                .loupe{
                    opacity: 1;
                }
            }

            span{
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 10px;
                font-size: 24px;
                background: #23423D;
                color: #fff;
                font-variant-numeric: initial;
            }
        }
        .carousel{
            margin-top: 20px;
            overflow: hidden;
            .carousel-content{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                button{
                    width: 40%;
                }
            }
        }
    }


    h1{
        font-family: 'Nocturne Serif';
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }

    .scale{
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    }

    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        &:first-child{
            margin-top: 24px;
        }

        span{
            font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
            &:first-child{
                color: #23423D;
            }
        }
    }

    .price{
        margin-top: 40px;
        display: grid;
        grid-gap: 8px;
        text-align: right;

        .actual-price{
            font-family: 'Nocturne Serif';
            font-size: 28px;
            color: #23423D;
        }

        .omnibus{
            font-size: 16px;
            color: #7A8D8A;
        }
    }

    .title-description{
        position: relative;
        min-height: 72.5px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        max-width: 530px;
        h2{
            padding: 16px 20px;
            font-family: 'Nocturne Serif';
            font-weight: 400;
            font-size: clamp(24px, ${24 / 768 * 100}vw, 28px);
            color: #FEFDFB;
        }
        .image{
            position: absolute;
            inset: 0;
            z-index: -1;
        }
    }

    .description{
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
        line-height: 124%;
    }
` 