import { Link, navigate } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import { Button } from "./button"
import { toast } from "react-toastify"

export default function ProductCard({
    onMouseUp = (e, url) => {
        if (e.button === 0) {
            e.preventDefault()
            navigate(url)
        }
    },
    data
}) {
    const { addItem } = useCart()
    const addToCart = (data) => {
        addItem(data)
        toast(`${data.name} - dodano do koszyka`)
    }

    const isNewArrivals = useMemo(() => {
        const createTime = new Date(data.date_created)
        const currentTime = new Date()
        const difference = Math.ceil((currentTime - createTime) / (1000 * 60 * 60 * 24))

        return difference <= 31
    }, [data])

    const scale = useMemo(() => {
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
        <Wrapper className={data.on_sale || isNewArrivals ? "item yellow" : "item"}>
            <Link
                onDragStart={event => event.preventDefault()}
                onClick={(e) => { e.preventDefault() }}
                onMouseUp={(e) => { onMouseUp(e, `/sklep/${data.categories[0].slug}/${data.slug}/`) }}
                to={`/sklep/${data.categories[0].slug}/${data.slug}/`}
            />
            <GatsbyImage className="main-image" image={data.images[0].localFile.childImageSharp.gatsbyImageData} alt={data.images[0].alt} />
            <TextPart>
                {(data.on_sale || isNewArrivals) && (
                    <NewArrivalsLabel>
                        <StaticImage className="image" src='./../../static/images/product-card-label.png' alt='tło' />
                        {data.on_sale
                            ? <span className="yellow">PROMOCJA</span>
                            : <span>NOWOŚĆ</span>
                        }
                    </NewArrivalsLabel>
                )}
                <div>
                    <Title>{data.name}</Title>
                    {scale
                        ? <Scale>Skala: {scale}</Scale>
                        : null}
                    <Price className={data.on_sale ? 'discount' : ""}>
                        <span className={data.on_sale ? 'discount-regular-price' : 'regular-price'} >
                            {data.regular_price}&nbsp;zł
                        </span>
                        {data.on_sale && (
                            <span className="discount-price" >
                                {data.price}&nbsp;zł
                            </span>
                        )}
                    </Price>
                </div>
                <Button className="add-to-cart" onClick={() => { addToCart(data) }}><span>DO KOSZYKA</span></Button>
            </TextPart>
        </Wrapper>
    )
}

const NewArrivalsLabel = styled.div`
    position: absolute;
    z-index: 4;
    min-width: 167px;
    min-height: 32px;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    transform: translateY(-50%);

    .image{
        position: absolute;
        inset: 0;
    }

    span{
        padding: 6px 14px;
        font-family: 'Roboto Condensed';
        font-weight: 600;
        font-size: 18px;
        color: #FAF6EE;
        position: relative;
        z-index: 3;

        &.yellow{
            color: #EDAC2A;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    background: #FAF7F1;
    border-top: 4px solid #23423D;
    display: grid;

    .main-image{
        aspect-ratio: 3/2;
    }

    &.yellow{
        border-top: 4px solid #EDAC2A;
    }

    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

    a{
        position: absolute;
        inset: 0;
        z-index: 10;
        user-select: none;
        -webkit-user-drag: none;
    }

    .add-to-cart{
        position: relative;
        z-index: 11;
    }
`

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

const Title = styled.span`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 500;
    font-size: 24px !important;
    line-height: 124%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #23423D;
    text-align: center;
    display: block;
    margin-top: 30px;
`

const Scale = styled.span`
    display: block;
    text-align: center;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135.19%;
    font-feature-settings: 'pnum' on, 'onum' on;
    margin-top: 2px;
`

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
    
    span{
        font-weight: 400;
        color: #23423D;
        font-family: 'Nocturn Serif';
    }

    .regular-price{
        font-size: 24px !important;
    }

    .discount-regular-price{
        font-size: 18px !important;        
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

    .discount-price{
        color: #EDAC2A;
        font-size: 24px !important;
        background: #23423D;
    }
`