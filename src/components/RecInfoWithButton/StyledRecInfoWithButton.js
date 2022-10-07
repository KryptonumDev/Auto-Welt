import styled from "styled-components"

export const StyledRecInfoWithButton = styled.div`
    width: 100%;
    min-height: 131px;
    margin-top: 30px;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 936px){
        transform: translateX(${({ ismoveleft }) => ismoveleft ? "-32px" : "0"})
    }
    @media only screen and (max-width: 580px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-height: 141px;

        > p
            padding-left: 16px;
        }
        a {
            width: 100%;
            max-width: 255px;
            margin 12px 26px 0;
        }
    }
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