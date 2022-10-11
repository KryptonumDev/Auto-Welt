import styled from "styled-components"

export const StyledExhibitionRegulations = styled.section`
    width: 100%;
    padding-bottom: 120px;
    @media only screen and (max-width: 768px){
        margin-top: 120px;
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
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2em;
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
        font-size: 16px;
        font-weight: 500;
        line-height: 1.2em;
        color: var(--primary500);
        font-family: 'Roboto';
    }
`