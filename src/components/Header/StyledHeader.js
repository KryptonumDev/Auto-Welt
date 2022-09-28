import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    margin-top: 20px;
`
export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const StyledLeftWrapper = styled.div`
    background: var(--primary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    height: 42px;
    display: flex;  
    align-items: center;
    padding-left: 40px;
    clip-path: polygon(0 0, 94.5% 0, 100% 100%, 0% 100%);
    width: 439px;

    @media only screen and (max-width: 1107px){
        width: 100%;
        justify-content: space-evenly;
        padding-left: 0;
        > a {
            margin: 0;
        }
    }

    @media only screen and (max-width: 998px){
        > a {
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 903px){
        > a {
            font-size: 12px;
        }
    }
`
export const StyledRightWrapper = styled.div`
    background: var(--primary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    height: 42px;
    display: flex;  
    align-items: center;
    padding-right: 50px;
    clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 0% 100%);
    max-width: 439px;

    @media only screen and (max-width: 1107px){
        width: 100%;
        justify-content: space-evenly;
        padding-right: 0;
        > a {
            margin: 0;
        }
    }

    @media only screen and (max-width: 998px){
        > a {
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 903px){
        > a {
            font-size: 12px;
        }
    }
`
export const StyledLogoWrapper = styled.div`
    padding-top: 15px;
    position: relative;
    z-index: 2;
`