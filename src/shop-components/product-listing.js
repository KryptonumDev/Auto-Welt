import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "./product-card-transformed"
import Select, { components } from 'react-select'
import Pagination from "./pagination";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3L19 20L34.5 3" stroke="#23423D" strokeWidth="4" strokeLinecap="square" />
            </svg>
        </components.DropdownIndicator>
    )
}

export default function ProductListing({ products, categories }) {
    const [page, setPage] = useState(1)
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
                if (!filter.search && !filter.category && !filter.onlyPromotions) {
                    return true
                }

                let isFilterAccepted = {
                    search: false,
                    category: false,
                    onlyPromotions: false,
                }

                if (filter.search) {
                    isFilterAccepted.search = el.name.toLowerCase().includes(filter.search.toLowerCase())
                } else {
                    isFilterAccepted.search = true
                }

                if (filter.category) {
                    el.categories.forEach(cat => {
                        if (cat.name === filter.category) {
                            isFilterAccepted.category = true
                        }
                    })
                } else {
                    isFilterAccepted.category = true
                }

                if (filter.onlyPromotions) {
                    isFilterAccepted.onlyPromotions = el.on_sale
                } else {
                    isFilterAccepted.onlyPromotions = true
                }

                return isFilterAccepted.search && isFilterAccepted.category && isFilterAccepted.onlyPromotions
            })
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
        setPage(1)
    }, [filter, products])

    return (
        <Wrapper>
            <h1>Pełna oferta</h1>
            <Filter>
                <div className="flex">
                    <input className="react-select__control" onChange={(e) => {
                        setFilter({
                            ...filter,
                            search: e.target.value
                        })
                    }} placeholder="Wyszukaj produkt po nazwie" />
                    <Select components={{ DropdownIndicator }} classNamePrefix="react-select" className="input yellow" placeholder="Wybierz kategorię" onChange={(e) => { setFilter({ ...filter, category: e.value }) }} options={(() => {
                        const categoryArr = categories.map(el => {
                            return { value: el.name, label: el.name }
                        })
                        return [{ value: '', label: 'Wszystkie kategorie' }, ...categoryArr]
                    })()} />
                </div>
                <div className="alt-flex">
                    <label className="checkbox">
                        <input type="checkbox" onChange={() => {
                            setFilter({
                                ...filter,
                                onlyPromotions: !filter.onlyPromotions
                            })
                        }} />
                        <span className="checkmark"></span>
                        <span>Pokaż tylko promocje</span>
                    </label>
                    <Select components={{ DropdownIndicator }} classNamePrefix="react-select" defaultValue={{ value: '0', label: 'Po popularności' }} className="filter input" onChange={(e) => { setFilter({ ...filter, sort: e.value }) }} options={[
                        { value: '0', label: 'Po popularności' },
                        { value: '1', label: 'Po nazwie: A-Z' },
                        { value: '2', label: 'Po nazwie: Z-A' },
                        { value: '3', label: 'Cena: rosnąco' },
                        { value: '4', label: 'Cena: malejąco' },
                    ]} />
                </div>
            </Filter>
            <Grid>
                {filtredProducts.map((el, index) => {
                    if ((index >= (8 * (page - 1) + (page - 1))) && index <= (8 * page) + (page - 1)) {
                        return <ProductCard key={el.name} data={el} />
                    }
                })}
            </Grid>
            <Pagination currentPage={page} itemCount={filtredProducts.length} changeCurrentPage={setPage} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 clamp(16px, ${16 / 768 * 100}vw, 32px);
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    h1{
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }
`

const Filter = styled.div`
    margin: clamp(25px, ${25 / 768 * 100}vw, 40px) 0;

    .react-select__control{
        height: 53px;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: transparent;
        border: 2px solid #23423D;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        padding: 0 16px;
        font-size: 20px;
        color: #7A8D8A;
        font-family: 'Roboto Condensed';
        background-color: transparent;
        border-radius: 0px;

        &:hover{
            color: #3E635D;
            border-color: #23423D;
        }

        &:focus{
            outline: none;
        }

        &:focus-visible{
            outline: none;
            border-color: #EDAC2A;
        }

        &.react-select__control--is-focused{
            border-color: #EDAC2A;
        }

        &.react-select__control--menu-is-open{
            border-color: #23423D;

            svg{
                transform: rotateZ(180deg);
            }
        }

        .react-select__value-container{
            padding-left: 0;
        }
    }

    .yellow {
        path{
            stroke: #EDAC2A;
        }
    }

    .react-select__menu{
        margin: 0;
        border-radius: 0px;
        border: 2px solid rgb(35, 66, 61);
        border-top: unset;
        z-index: 10;

        .react-select__option{
            font-size: 20px;
            line-height: 121.19%;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #23423D;
            font-family: 'Roboto Condensed';
            background: #FAF7F1;
            cursor: pointer;

            &:hover{
                background-color: #F6E2BA;
            }
        }

        .react-select__menu-list{
            padding: 0;
        }

        .react-select__option--is-selected{
            background-color: #F6E2BA;
            cursor: unset;
        }
    }

    .react-select__indicator-separator{
        display: none;
    }
    
    .filter{
        width: 260px;

        @media (max-width: 480px){
            width: 100%;
        }
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

        @media (max-width: 840px) {
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
    }

    .alt-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        @media (max-width: 480px) {
            flex-direction: column-reverse;
            justify-content: stretch;
            align-items: stretch;
            gap: 20px;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 840px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    @media (max-width: 700px){
        grid-template-columns: 1fr;
    }
`

