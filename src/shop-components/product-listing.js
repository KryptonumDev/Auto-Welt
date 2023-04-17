import React from "react"
import styled from "styled-components"
import ProductCard from "./product-card-transformed"
import Pagination from "./pagination";
import { useFiltration } from "../hooks/use-filtration";
import Filter from "./product-listing-filter";

export default function ProductListing({ products, categories }) {

    const [filtredProducts, page, setPage, filter, setFilter] = useFiltration(products)

    return (
        <Wrapper>
            <h1>Pełna oferta</h1>
            <Filter filter={filter} setFilter={setFilter} categories={categories} />
            <Grid>
                {filtredProducts.map((el, index) => {
                    if ((index >= (8 * (page - 1) + (page - 1))) && index <= (8 * page) + (page - 1)) {
                        return <ProductCard key={el.name} data={el} />
                    }
                })}
            </Grid>
            {filtredProducts.length < 1 && <p className="no-items">Brak produktów spełniających kryteria wyszukiwania</p>}
            <Pagination currentPage={page} itemCount={filtredProducts.length} changeCurrentPage={setPage} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 clamp(16px, ${16 / 768 * 100}vw, 32px);
    max-width: 1080px;
    margin: clamp(60px, ${60 / 768 * 100}vw, 120px) auto 0 auto;
    box-sizing: content-box;

    .no-items{
        margin-top: clamp(36px, ${36 / 768 * 100}vw, 64px);
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        line-height: 58px;
        text-align: center;
        font-feature-settings: 'pnum' on, 'onum' on;
        color: #23423D;
    }

    h1{
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(34px, ${38 / 768 * 100}vw, 48px);
        color: #23423D;
    }

    .input-wrap{
        position: relative;

        .loupe{
            position: absolute;
            right: 11px;
            top: 50%;
            transform: translateY(-50%);
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

