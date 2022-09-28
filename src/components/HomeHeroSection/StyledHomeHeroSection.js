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
        grid-template-areas: 
            "center"
            "left"
            "right";
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
`
export const StyledHeroImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-70px);
    grid-area: center;
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
`
export const StyledHeroImage = styled.div`
    width: 100%;
    transform: scale(1.25);
    img {
        width: 100%;
        height: 100%;
    }
`
export const StyledButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 60px;
`
export const StyledImageWrapper = styled.div`
    width: 167px;
    height: 128px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 768px){
        width: 33.33%;
        max-width: 211px;
    }
`