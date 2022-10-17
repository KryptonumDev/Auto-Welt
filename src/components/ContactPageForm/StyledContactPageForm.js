import styled from "styled-components"

export const StyledContactPageForm = styled.section`
    width: 100%;
    background: #FAF7F1;
    border-top: 6px solid #EDAC2A;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    min-height: 688px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 560px){
        flex-direction: column;
    }
`
export const StyledLeftWrapper = styled.div`
    width: 385px;
    height: 100%;
    @media only screen and (max-width: 768px){
        width: 256px;
        height: 832px;
    }
    @media only screen and (max-width: 560px){
        width: 100%;
        height: 440px;
    }
`
export const StyledModel = styled.div`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 768px){
        img{
            width: 100%;
            height: 100%;
        }
        .gatsby-image-wrapper{
            width: 100%;
            height: 100%;
        }
    }
`
export const StyledRightWrapper = styled.div`
    width: calc(100% - 385px);
    @media only screen and (max-width: 768px){
        width: calc(100% - 256px);
    }
    @media only screen and (max-width: 560px){
        width: 100%;
    }
`
export const StyledHeading = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media only screen and (max-width: 972px){
        p {
            font-size: 38px;
        }
    }
    @media only screen and (max-width: 375px){
        p {
            font-size: 24px;
        }
    }
`
export const StyledTitleImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
`
export const StyledHomeContactForm = styled.div`
    width: 100%;
    padding: 30px;
    > form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 25px;
    }

    @media only screen and (max-width: 1119px){
        padding: 22px;
    }
    @media only screen and (max-width: 768px){
        > form {
            gap: 24px;
        }
    }
`
export const StyledInputWrapper = styled.div`
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "50%")};
    max-width: ${({ fullwidth }) => (fullwidth ? "unset" : "255px")};
    position: relative;
    label {
        font: 500 16px/19px Roboto;
        color: ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
    }
    input {
        width: 100%;
        height: 38px;
        border: 2px solid ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        background-color: var(--creamBg);
        padding: 0 14px;
        outline-color: var(--primary500);
        font-family: 'Roboto';
    }
    textarea {
        width: 100%;
        height: 164px;
        border: 2px solid ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        background-color: var(--creamBg);
        resize: none;
        font-family: 'Roboto';
        padding: 10px;
    }

    @media only screen and (max-width: 1087px){
        width: ${({ fullwidth }) => (fullwidth ? "100%" : "47%")};
    }
    @media only screen and (max-width: 972px){
        max-width: unset;
    }
    @media only screen and (max-width: 912px){
        width: ${({ fullwidth }) => (fullwidth ? "100%" : "45%")};
    }
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`