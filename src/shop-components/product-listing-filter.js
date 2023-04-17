import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Select, { components } from 'react-select'

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 3L19 20L34.5 3" stroke="#23423D" strokeWidth="4" strokeLinecap="square" />
      </svg>
    </components.DropdownIndicator>
  )
}

const NoOptionsMessage = props => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>Brak wyników</span>
    </components.NoOptionsMessage>
  );
};

export default function Filter({ filter, setFilter, categories }) {
  return (
    <Wrapper>
      <div className="flex">
        <div className="input-wrap">
          <input className="react-select__control" onChange={(e) => {
            setFilter({
              ...filter,
              search: e.target.value
            })
          }} placeholder="Wyszukaj produkt po nazwie" />
          <StaticImage className="loupe" src="../../static/images/loupe.png" alt='obrazek dekaracyjny' />
        </div>
        {categories
          ? (
            <Select components={{ DropdownIndicator, NoOptionsMessage }} classNamePrefix="react-select" className="input yellow" placeholder="Wybierz kategorię" onChange={(e) => { setFilter({ ...filter, category: e.value }) }} options={(() => {
              const categoryArr = categories.map(el => {
                return { value: el.name, label: el.name }
              })
              return [{ value: '', label: 'Wszystkie kategorie' }, ...categoryArr]
            })()} />
          ) : (
            <Select components={{ DropdownIndicator, NoOptionsMessage }} classNamePrefix="react-select" defaultValue={{ value: '0', label: 'Po popularności' }} className="input" onChange={(e) => { setFilter({ ...filter, sort: e.value }) }} options={[
              { value: '0', label: 'Po popularności' },
              { value: '1', label: 'Po nazwie: A-Z' },
              { value: '2', label: 'Po nazwie: Z-A' },
              { value: '3', label: 'Cena: rosnąco' },
              { value: '4', label: 'Cena: malejąco' },
            ]} />
          )}

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
        {categories && (
          <Select components={{ DropdownIndicator, NoOptionsMessage }} classNamePrefix="react-select" defaultValue={{ value: '0', label: 'Po popularności' }} className="filter input" onChange={(e) => { setFilter({ ...filter, sort: e.value }) }} options={[
            { value: '0', label: 'Po popularności' },
            { value: '1', label: 'Po nazwie: A-Z' },
            { value: '2', label: 'Po nazwie: Z-A' },
            { value: '3', label: 'Cena: rosnąco' },
            { value: '4', label: 'Cena: malejąco' },
          ]} />
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: clamp(25px, ${25 / 768 * 100}vw, 40px) 0;

    .react-select__control{
        cursor: pointer;
        height: 53px;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: transparent;
        border: 2px solid #23423D;
        padding: 0 0 0 11px;
        font-size: clamp(16px, ${20 / 768 * 100}vw, 20px);
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
        z-index: 12;

        .react-select__option{
            font-size: clamp(16px, ${20 / 768 * 100}vw, 20px);
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
            opacity: 0;
            width: 0;
            height: 0;
            position: absolute;
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
        input:focus-visible ~ .checkmark {
          border-color: #EDAC2A;
        }
        input:checked ~ .checkmark {
            &::after{
                opacity: 1;
            }
        }

        span{
            font-size: clamp(16px, ${20 / 768 * 100}vw, 20px);
            color: #23423D;
            font-weight: 600;
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