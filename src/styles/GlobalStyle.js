import React from "react";
import { createGlobalStyle } from "styled-components";
import { useMenuState } from "../context/menuContext";
import "./fonts.css";
import "./normalize.css";
// import Right from './../../static/images/right.png'
// import Left from './../../static/images/left.svg'

const Style = createGlobalStyle`
    html{
        --background900: #CCC6B7;
        --background800: #DFD9C8;
        --background700: #E9E4D6;
        --background500: #FAF6EE;
        --background100: #FEFCF8;
        --background50: #FEFDFB;
        --primary900: #1D2B29;
        --primary800: #233532;
        --primary500: #23423D;
        --primary300: #3E635D;
        --primary200: #7A8D8A;
        --primary100: #B0BBBA;
        --secondary900: #B87C05;
        --secondary700: #DA9610;
        --secondary500: #EDAC2A;
        --secondary300: #EDC169;
        --secondary200: #F6E2BA;
        --secondary50: #FAF1DE;
        --success900: #396439;
        --success800: #528952;
        --success500: #5A9E5A;
        --success400: #73B573;
        --success200: #9FC69F;
        --success100: #C0D8C0; 
        --danger900: #960101;
        --danger800: #B90202;
        --danger700: #CE1E1E;
        --danger500: #D63D3D;
        --danger100: #DF6060;
        --danger50: #E99696;
        --warning900: #BF3300;
        --warning800: #E85D00;
        --warning700: #F27D00;
        --warning500: #F99D00;
        --warning100: #FEB331;
        --warning50: #FEC96E;
        --black: #000;
        --white: #fff;
        --creamText: #F2EBD8;
        --borderTopOrange: #EDAC29;
        --creamBg: #faf7f1;
    }

    .Toastify__progress-bar-theme--light{
      background: rgb(35, 66, 61) !important;
    }

    .Toastify__toast-theme--light{
      background-color: var(--background500) !important;
    }

    .Toastify__progress-bar--warning {
      background-color: rgb(237, 172, 42) !important;
    }

    .Toastify__progress-bar--error{
      background-color: #D63D3D !important;
    } 

    .Toastify__toast-icon{
      display: none !important; 
    }

    body {
      overflow-x: hidden;
      width: 100%;
      background-color: var(--background500);
      font-family: 'Roboto Condensed', sans-serif;
      
      &.no-js {
        visibility: hidden;
      }
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-variant-numeric: oldstyle-nums;
    }

    *:focus {
      outline: none
    }
    *:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    p{
      font-variant-numeric: oldstyle-nums;
    }

    *::before,
    *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    .lg-backdrop{
      background: rgba(0, 0, 0, 0.22) !important;
    }

    .lg-image{
      border: 6px solid #23423D;
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
      background: #FAF6EE;
    }

    .lg-thumb-outer{
      background: #FAF6EE !important;
      border-top: 2px solid #23423D !important;
    }

    .lg-thumb{
      margin: 0 auto;
    }

  .lg-outer .lg-thumb-item{
    transition: border-color .2s ease-out;
  }

  .lg-outer .lg-thumb-item:hover{
    border-color: #E2AC2A !important;
  }

  .lg-outer .lg-thumb-item.active{
      border-color: #23423D !important;
    }

    .lg-toggle-thumb{
      background: #FAF6EE !important;
      border: 2px solid #23423D !important;
    }

    .lg-outer .lg-toggle-thumb:after{
      color: #23423D;
    }

    .lg-actions .lg-next{
      width: 50px !important;
      height: 66px !important;
      background: #23423D !important;
      border-radius: 0 !important;

      @media (max-width: 640px) {
        display: none !important;
      }

      &::before{
        content: url("/images/right.png") !important;
      }
    }

    .lg-actions .lg-prev{
      width: 50px !important;
      height: 66px !important;
      background: #23423D !important;
      border-radius: 0 !important;

      @media (max-width: 640px) {
        display: none !important;
      }

      &::after{
        content: url("/images/left.png") !important;
      }
    }

    .lg-toolbar{
      background: #23423D !important;
    }

    .lg-outer .lg-image{
      max-width: calc(100% - 160px) !important;
      max-height: 73% !important;

      @media (max-width: 640px) {
        max-width: 100% !important;
      }
    }

    #lg-counter{
      @media (max-width: 370px) {
        display: none !important; 
      }
    }

    input:focus-visible, textarea:focus-visible{
      outline: none !important; 
      border-color: #EDAC2A !important;

    }

    input:focus-visible + label::after{
      outline: rgb(237, 172, 42) solid 2px !important;
      outline-offset: 0 !important;
    }
`;

const GlobalStyle = () => {
  const { show } = useMenuState();
  return <Style showMenu={show} />;
};

export default GlobalStyle;
