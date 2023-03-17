import React from "react"
import styled from "styled-components"
import ProductCard from "./product-card"

export default function ProductListing({ products }) {
    return (
        <Wrapper>
            <h1>Pełna oferta</h1>
            <Filter>
                <div className="flex">
                    <input placeholder="Wyszukaj produkt po nazwie" />
                    <input placeholder="Wybierz kategorię" />
                </div>
                <div className="alt-flex">
                    <label className="checkbox">
                        <input />
                        <span class="checkmark"></span>
                        <span>Pokaż tylko promocje</span>
                    </label>
                    <input className="filter" placeholder='Po nazwie: A-Z' />
                </div>
            </Filter>
            <Grid>
                {products.map(el => <ProductCard data={el} />)}
            </Grid>
            pagination
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 32px;
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    h1{
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        color: #23423D;
    }
`

const Filter = styled.div`
    margin: 40px 0;

    input{
        width: 100%;
        background-color: transparent;
        border: 2px solid #23423D;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        padding: 10px 16px;
        font-size: 16px;
        font-family: 'Roboto Condensed';
    }

    .filter{
        width: 260px;
    }

    .checkbox{
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

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 48px;
    }

    .alt-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
`

