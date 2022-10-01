import styled from "styled-components"

export const StyledHomeCollections = styled.section`
    width: 100%;
    padding-right: 23px;
    margin-bottom: 120px;
`
export const StyledImagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 936px){
        justify-content: space-evenly;
        margin-bottom: 300px;
    }
`
export const StyledImage = styled.div`
    position: absolute;
    bottom: -100px;
    right: -200px;
    width: 900px;
    height: 489px;
    z-index: 1;
    img {
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 1000px){
        right: -300px;
    }

    @media only screen and (max-width: 936px){
        width: 620px;
        height: 350px;
        right: -50px;
        bottom: -300px;
    }
`

export const StyledCollectionFooter = styled.div`
    width: 100%;
    min-height: 131px;
    margin-top: 30px;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledFooterImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
        transform: translateY(5px);
    }
`
export const StyledContentWrapper = styled.div`
    margin-top: 72px;
`