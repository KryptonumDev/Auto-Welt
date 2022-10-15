import styled from "styled-components"

export const StyledPrivacyPolicy = styled.section`
    width: 100%;
    margin: 30px auto 60px;
    max-width: 1144px;
    padding: 0 32px;
    @media only screen and (max-width: 768px){
        padding: 0 16px;
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
    color: #000;
    width: 49%;
    max-width: 530px;
    margin-top: 30px;
    font: 400 24px/1.2em 'Roboto';

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
    font: 400 28px/1.2em 'Nocturne Serif';

    @media only screen and (max-width: 375px){
        font-size: 24px;
    }
`
export const StyledContentWrapper = styled.div`
    font: 400 24px/1.2em 'Roboto';
    margin-top: 20px;

    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
    @media only screen and (max-width: 375px){
        font-size: 16px;
    }
`