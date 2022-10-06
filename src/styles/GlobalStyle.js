import React from "react"
import { createGlobalStyle } from "styled-components"
import { useMenuState } from "../context/menuContext"

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
    body {
      overflow-x: hidden;
      width: 100%;
      background-color: var(--background500);
      &.no-js {
        visibility: hidden;
      }
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::before,
    *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
`;

const GlobalStyle = () => {
  const { show } = useMenuState()
  return <Style showMenu={show} />
}

export default GlobalStyle