import styled from "styled-components"

export const StyledFooterLeftWrapper = styled.div`
    width: 30%;
    max-width: 268px;
`
export const StyledLogoWrapper = styled.div`
    width: 100%;
    max-width: 268px;
    height: 117px;
    > a {
        width: 100%;
        height: 100%;
        svg {
            width: 100%;
            height: 100%;
        }
    }
`;
export const StyledSubLogoText = styled.div`
    width: 100%;
    margin-top: 32px;
`
export const StyledContactWrapper = styled.div`
    width: 100%;
    margin-top: 48px;
`
export const StyledIconsWrapper = styled.div`
    width: 100%;
    display: flex;
    > a {
        width: 42px;
        height: 42px;
        background-color: red;
        > svg {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 2;
        }
    }
`