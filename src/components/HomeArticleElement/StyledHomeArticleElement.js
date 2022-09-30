import styled from "styled-components"

export const StyledHomeArticleElement = styled.div`
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    width: 49%;
    max-width: 526px;
    background: var(--creamBg);
    padding-bottom: 44px;
`;
export const StyledImageWrapper = styled.div`
    width: 100%;
    height: 275px;
    background-color: aqua;
`
export const StyledTitleWrapper = styled.div`
    width: 100%;
    min-height: 60px;
`
export const StyledTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        &:first-letter {
            font-size: 44px;
            color: #edac29;
            font-family: "Nocturne Serif";
        }
    }
`;