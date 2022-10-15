import styled from "styled-components"

export const StyledExhibitionRegulations = styled.section`
    width: 100%;
    margin: 0 auto 120px;
    max-width: 1144px;
    padding: 0 32px;
    @media only screen and (max-width: 768px){
        margin-top: 120px;
        padding: 0 16px
    }
`
export const StyledContentWrapper = styled.div`
    margin-top: 20px;
    @media only screen and (max-width: 768px){
        h1{
            font-size: 38px;
        }
    }
    @media only screen and (max-width: 375px){
        h1{
            font-size: 34px; 
        }
    }
`
export const StyledTextWrapper = styled.div`
    color: #000;
    font: 400 24px/1.2em 'Roboto';
    margin-top: 20px;

    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
    @media only screen and (max-width: 375px){
        font-size: 16px;
    }
`
export const StyledLinkWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    a{
        color: var(--primary500);
        font: 500 16px/1.2em 'Roboto';
    }
`