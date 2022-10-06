import styled from "styled-components"

export const StyledCollectionTemplateDesc = styled.section`
    width: 100%;
    min-height: 500px;
    border-top: 6px solid var(--secondary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    margin-top: 60px;
`
export const StyledTextWrapper = styled.div`
    width: 55%;
    padding: 68px 58px;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
    line-height: 124%;
`
export const StyledImageWrapper = styled.div`
    width: 45%;
    height: 100%;
    flex: 1;
    img{
        width: 100%;
        height: 100%;
    }
`