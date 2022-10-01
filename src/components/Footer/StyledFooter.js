import styled from "styled-components"

export const StyledFooter = styled.footer`
    width: 100%;
    min-height: 700px;
    display: flex;
    position: relative;
`
export const StyledImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
`
export const StyledFooterMainWrapper = styled.div`
    width: 100%;
    max-width: 1112px;
    margin: 0 auto;
    padding: 52px 16px 89px 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
`;