import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "./product-card"

export default function ProductListing({ products, categories }) {

    const [filter, setFilter] = useState({
        search: '',
        category: '',
        onlyPromotions: false,
        sort: '0',
    })

    const [filtredProducts, setFiltredProducts] = useState(products)

    useEffect(() => {
        setFiltredProducts(() => {
            if (!filter.search && !filter.category && !filter.onlyPromotions && filter.sort === '0') {
                return products
            }

            const preFiltredProducts = products.filter(el => {
                let isFilterAccepted = false

                if (filter.search) {
                    isFilterAccepted = el.name.toLowerCase().includes(filter.search.toLowerCase())
                }
                if (filter.category) {
                    el.categories.forEach(cat => {
                        if (cat.name === filter.category) {
                            isFilterAccepted = true
                        }
                    })
                }
                if (filter.onlyPromotions) {
                    isFilterAccepted = el.on_sale
                }
                if (!filter.search && !filter.category && !filter.onlyPromotions) {
                    isFilterAccepted = true
                }

                return isFilterAccepted
            })
                debugger
            switch (filter.sort) {
                case '1':
                    return preFiltredProducts.sort((a, b) => a.name > b.name ? 1 : -1)
                case '2':
                    return preFiltredProducts.sort((a, b) => a.name < b.name ? 1 : -1)
                case '3':
                    return preFiltredProducts.sort((a, b) => a.price - b.price)
                case '4':
                    return preFiltredProducts.sort((a, b) => b.price - a.price)
                default:
                    return preFiltredProducts
            }
        })
    }, [filter, products])

    return (
        <Wrapper>
            <h1>Pełna oferta</h1>
            <Filter>
                <div className="flex">
                    <input onChange={(e) => {
                        setFilter({
                            ...filter,
                            search: e.target.value
                        })
                    }} placeholder="Wyszukaj produkt po nazwie" />
                    <select onChange={(e) => {
                        setFilter({
                            ...filter,
                            category: e.target.value
                        })
                    }} placeholder="" >
                        <option value="" selected>Wszystkie kategorie</option>
                        {categories.map(el => <option key={el.name} value={el.slug}>{el.name}</option>)}
                    </select>
                </div>
                <div className="alt-flex">
                    <label className="checkbox">
                        <input onChange={() => {
                            setFilter({
                                ...filter,
                                onlyPromotions: !filter.onlyPromotions
                            })
                        }} />
                        <span className="checkmark"></span>
                        <span>Pokaż tylko promocje</span>
                    </label>
                    <select onChange={(e) => {
                        setFilter({
                            ...filter,
                            sort: e.target.value
                        })
                    }} className="filter">
                        <option value='0'>Po popularności</option>
                        <option value='1'>Po nazwie: A-Z</option>
                        <option value='2'>Po nazwie: Z-A</option>
                        <option value="3">Cena: rosnąco</option>
                        <option value="4">Cena: malejąco</option>
                    </select>
                </div>
            </Filter>
            <Grid>
                {filtredProducts.map(el => <ProductCard key={el.name} data={el} />)}
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

