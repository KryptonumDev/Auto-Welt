import styled from "styled-components"

export const StyledHomeHeroSection = styled.section`
    display: grid;
    gap: 40px;
    margin-top: 52px;
    grid-template-areas: "left center center center right";
    
    @media only screen and (max-width: 829px){
        gap: 10px;
    }

    @media only screen and (max-width: 768px){
        margin-top: 0;
        grid-template-areas: 
            "center"
            "left"
            "right";
    }
    @media only screen and (max-width: 489px){
        gap: 8px;
    }
`
export const StyledImagesLeftWrapper = styled.div`
    width: 100%;
    max-width: 167px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-area: left;

    @media only screen and (max-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        max-width: unset;
        width: 100%;
    }
    @media only screen and (max-width: 489px){
        gap: 8px;
    }
`
export const StyledHeroImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-70px);
    grid-area: center;

    @media only screen and (max-width: 768px){
        transform: translateY(0);
    }
`
export const StyledImagesRightWrapper = styled.div`
    width: 100%;
    max-width: 167px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-area: right;

    @media only screen and (max-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        max-width: unset;
        width: 100%;
    }
    @media only screen and (max-width: 489px){
        gap: 8px;
    }
`
export const StyledHeroImage = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
`
export const StyledButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 60px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 768px){
        margin-top: 30px;
    }
    @media only screen and (max-width: 375px){
        flex-direction: column;
        gap: 12px;
        > div {
            width: 100%;
        }
    }
`
export const StyledImageWrapper = styled.div`
    width: 167px;
    height: 128px;
    img {
        width: 100%;
        height: 100%;
    }
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 768px){
        width: 33.33%;
        height: auto;
        max-width: 211px;
        max-height: 164px;
    }
`