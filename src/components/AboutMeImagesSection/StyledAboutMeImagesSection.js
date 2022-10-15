import styled from "styled-components"

export const StyledAboutMeImagesSection = styled.section`
    width: 100%;
    max-width: 1144px;
    margin: 120px auto;
    padding: 0 32px;
    @media only screen and (max-width: 768px){
        padding: 0 16px;
    }
`
export const StyledImagesWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 100px;
`
export const StyledImage = styled.div`
    width: 49%;
    img{
        width: 100%;
        height: 100%;
    }
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
`
export const StyledRightImage = styled.div`
    position: absolute;
    bottom: -100px;
    right: -200px;
`
export const StyledAparatWrapper = styled.div`
    display: flex;
    margin-top: 100px;
    align-items: center;
    gap: 20px;
`
export const StyledIconWrapper = styled.div``
export const StyledTextWrapper = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2em;

    a{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.2em;
        text-decoration-line: underline;
        color: #23423D;
    }
`