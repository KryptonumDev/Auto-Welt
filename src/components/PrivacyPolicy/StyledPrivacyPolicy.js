import styled from "styled-components"

export const StyledPrivacyPolicy = styled.section`
    width: 100%;
    margin: 30px 0 60px;

    @media only screen and (max-width: 768px){
        margin-top: 134px;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
        width: 49%;
        max-width: 530px;
    }

    @media only screen and (max-width: 768px){
        flex-wrap: wrap;
        > div {
            width: 100%;
            max-width: unset;
        }
    }
`
export const StyledOneLineWrapper = styled.div`
    width: 100%;
    margin-top: 60px;
`
export const StyledOneLineContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`
export const StyledTextOut = styled.div`
    font-size: 24px;
    font-family: "Roboto";
    line-height: 1.2em;
    color: #000;
    font-weight: 400;
    width: 49%;
    max-width: 530px;
    margin-top: 30px;

    @media only screen and (max-width: 768px){
        width: 100%;
        max-width: unset;
        font-size: 20px;
    }
    @media only screen and (max-width: 375px){
        font-size: 16px;
    }
`
export const StyledElement = styled.div`
    width: 100%;
    margin-top: 40px;
`
export const StyledTitleWrapper = styled.div`
    color: #23423D;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2em;
    font-family: 'Nocturne Serif';

    @media only screen and (max-width: 375px){
        font-size: 24px;
    }
`
export const StyledContentWrapper = styled.div`
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