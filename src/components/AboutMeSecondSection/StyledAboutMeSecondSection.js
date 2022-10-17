import styled from "styled-components"

export const StyledAboutMeSecondSection = styled.section`
    width: calc(100% - 32px);
    background: #FAF7F1;
    border-top: 6px solid #EDAC2A;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    padding: 52px 80px 80px 59px;
    max-width: 1262px;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    
    @media only screen and (max-width: 948px){
        padding-right: 30px;
    }
    @media only screen and (max-width: 768px){
        padding: 52px 30px 80px 16px;
        width: calc(100% - 16px);
    }
    @media only screen and (max-width: 670px){
        flex-direction: column-reverse;
        gap: 0;
    }
    @media only screen and (max-width: 574px){
        flex-direction: column-reverse;
        padding: 48px 19px 49px 28px;
    }
`
export const StyledLeftWrapper = styled.div`
    max-width: 657px;

    @media only screen and (max-width: 948px){
        width: 50%;
    }
    @media only screen and (max-width: 670px){
        width: 100%;
    }
`
export const StyledRightWrapper = styled.div`
    flex-shrink: 0;

    @media only screen and (max-width: 948px){
        width: 50%;
        flex-shrink: 1;
    }
    @media only screen and (max-width: 670px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const StyledTitleWrapper = styled.div`
    font-family: 'Nocturne Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 1.2em;
    color: #23423D;

    @media only screen and (max-width: 1036px){
        font-size: 38px;
    }
    @media only screen and (max-width: 450px){
        font-size: 34px;
    }
`
export const StyledDescWrapper = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2em;
    margin-top: 30px;

    @media only screen and (max-width:1036px){
        font-size: 20px;
    }
    @media only screen and (max-width: 816px){
        font-size: 18px;
    }
    @media only screen and (max-width: 375px){
        font-size: 16px;
    }
`
export const StyledTopImage = styled.div``
export const StyledBottomImage = styled.div`
    transform: translateY(-50px);
`

export const StyledGreetingSection = styled.section`
    margin: 0 auto;
    width: 100%;
    margin-top: 60px;
    padding: 0 32px 0 16px;
    max-width: 1144px;
    @media only screen and (max-width: 768px){
        padding: 0 16px 0 0;
    }
`
export const StyledGreetingPanel = styled.div`
    width: 100%;
    min-height: 198px;
    position: relative;
`
export const StyledButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    @media only screen and (max-width: 1065px){
        a{
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 768px){
        padding: 0 16px;
    }
    @media only screen and (max-width: 685px){
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-top: 25px;   
        > a {
            width: 95%;
            font-size: 16px;
        }
    }
    @media only screen and (max-width: 375px){
        margin-top: 20px;
        > a {
            font-size: 15px;
        }
    }
`
export const StyledGreetingImage = styled.div`
    width: 100%;
    min-height: 198px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img{
        width: 100%;
        height: 100%;
    }
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
`
export const StyledGreetingText = styled.div`
    position: relative;
    z-index: 1;
    width: 70%;
    max-width: 840px;
    height: 100%;
    font-family: 'Nocturne Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2em;
    padding: 48px 0 48px 59px;
    @media only screen and (max-width: 542px){
        font-size: 24px;
    }
`