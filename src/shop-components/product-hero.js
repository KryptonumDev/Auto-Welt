import { AnimatePresence, motion } from "framer-motion"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useMemo, useState } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button } from "./button"

export default function Hero({ data }) {

    const { addItem } = useCart()
    const [chosenImage, setChosenImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isPopupOpened, setIsPopopOpened] = useState(false)

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

    return (
        <Wrapper>
            <AnimatePresence>
                {isPopupOpened &&
                    <Popup initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div onClick={() => { setIsPopopOpened(false) }} className="wrap" />
                        <div className="content">
                            <div className="main">
                                {data.images.map((el, index) => {
                                    if (index !== chosenImage) return null

                                    return <motion.button onClick={() => { setIsPopopOpened(true) }} >
                                        <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt} />
                                    </motion.button>
                                })}
                                <span>{chosenImage + 1} z {data.images.length}</span>
                            </div>
                            <div className="carousel">
                                <div className="carousel-content">
                                    {data.images.map((el, index) => {
                                        if (index === chosenImage) return null

                                        return <motion.button onClick={() => { setChosenImage(index) }} ><GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt} /></motion.button>
                                    })}
                                </div>
                            </div>
                        </div>
                    </Popup>
                }
            </AnimatePresence>
            <Content>
                <div className="gallery">
                    <div className="main">
                        {data.images.map((el, index) => {
                            if (index) return null

                            return <motion.button onClick={() => { setIsPopopOpened(true) }} >
                                <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt} />
                                <span>1 z {data.images.length}</span>
                            </motion.button>
                        })}
                    </div>
                    <div className="carousel">
                        <div className="carousel-content">
                            {data.images.map((el, index) => {
                                if (!index) return null
                                return <motion.button onClick={() => { setIsPopopOpened(true); setChosenImage(index) }} ><GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.alt} /></motion.button>
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
                            {data.stock_status === 'outofstock' && 'nie dostępny'}
                        </span>
                    </div>
                    <div className="flex">
                        <span>Wysyłka w:</span>
                        <span>24 godziny</span>
                    </div>
                    <div className="price">
                        <span className="actual-price">{data.price}&nbsp;zł</span>
                        <span className="omnibus">Najniższa cena z TODO dni: {data.price}&nbsp;zł</span>
                    </div>
                    <div className="quantity-calculator">
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
                                <button onClick={() => { setQuantity(quantity + 1) }} className="plus">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7243 4.98047V7.01953H0V4.98047H11.7243ZM7.12129 0V12.4219H4.64493V0H7.12129Z" fill="#23423D" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Button onClick={() => { addItem(data, quantity) }} className="add-to-cart"><span>KUPUJĘ</span></Button>
                    </div>
                </div>
                <div className="description">
                    <div className="title-description">
                        <StaticImage className="image" src='./../../static/images/description-background.png' alt='tło' />
                        <h2>Opis produktu:</h2>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
                    <Button onClick={() => { addItem(data, quantity) }} className="description-add-to-cart"><span>KUPUJĘ</span></Button>
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
`

const Popup = styled(motion.div)`
    position: fixed;
    inset: 0;
    padding-bottom: 50px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.22);
    z-index: 10;

    .wrap{
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .content{
        position: absolute;
        z-index: 1;
        max-width: 1080px;
        left: 50%;
        transform: translateX(-50%);
        top: 50px;
        padding: 76px 130px;
        background: #FAF6EE;
        border: 6px solid #23423D;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

        button{
            border: none;
            background-color: transparent;
            width: fit-content;
        }

        .main{
            position: relative;

            span{
                position: absolute;
                right: 24px;
                bottom: 24px;
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
                display: flex;
                gap: 16px;
                button{
                    width: 40%;
                }
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
        margin: 40px 0 0 0;
        background: #EDAC2A;
        color: #1D2B29;
        font-weight: 600;
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
            margin: 0;
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

            &:disabled{
                cursor: unset;
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

            &:disabled{
                cursor: unset;
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
        button{
            border: none;
            background-color: transparent;
            width: fit-content;
        }
        .main{
            position: relative;

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
                display: flex;
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