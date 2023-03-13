import { Link } from "gatsby";
import styled from "styled-components";

export const Button = styled.button`
    max-width: 288px;
    width: 100%;
    margin: 20px 0 30px 0;
    &.add-to-cart{
        max-width: calc(100% - 80px);
        margin: 20px auto 30px auto;
    }
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px solid transparent;
    outline: 0;
    background: #23423D;
    color: #fff;
    height: 44px;
    transform: skew(-26deg);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    flex: none;
    min-height: unset;
    transition: background 250ms linear;

    > span {
        font-family: "Roboto Condensed";
        display: block;
        transform: skew(26deg);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3em;
    }

    &:hover {
        background: #23423D;
        border: 2px solid transparent;
    }

    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #da9610;
        outline-offset: 4px;
    }
`

export const YellowButtonLink = styled(Link)`
max-width: 240px;
width: 100%;
margin: 30px auto 0 auto;
-webkit-tap-highlight-color: transparent;
display: flex;
align-items: center;
justify-content: center;
border: 0px solid transparent;
outline: 0;
background: #EDAC2A;
color: #1D2B29;
height: 44px;
transform: skew(-26deg);
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
cursor: pointer;
flex: none;
min-height: unset;
transition: background 250ms linear;
text-decoration: unset;

> span {
    font-family: "Roboto Condensed";
    display: block;
    transform: skew(26deg);
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3em;
    font-size: 19px;
      font-weight: 600;
}

&:hover {
    background: #EDAC2A;
    border: 2px solid transparent;
}

&:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
}
`

export const OutlinedLink = styled(Link)`
    max-width: 320px;
    width: 100%;
    margin: 30px auto 0 auto;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #23423D;
    outline: 0;
    background: transparent;
    color: #1D2B29;
    height: 44px;
    transform: skew(-26deg);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    flex: none;
    min-height: unset;
    transition: background 250ms linear, color 250ms linear;
    text-decoration: unset;

    > span {
        font-family: "Roboto Condensed";
        display: block;
        transform: skew(26deg);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3em;
        font-size: 19px;
        font-weight: 600;
    }

    &:hover {
        background: #23423D;
        color: #fff;
        border: 2px solid #23423D;
    }

    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #da9610;
        outline-offset: 4px;
    }

`