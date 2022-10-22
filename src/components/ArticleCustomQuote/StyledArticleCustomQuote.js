import styled from "styled-components";

export const StyledArticleCustomQuote = styled.div`
    width: 100%;
    background: #FAF6EE;
    border-width: 6px 0px 0px 6px;
    border-style: solid;
    border-color: #EDAC2A;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    padding: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`;
export const StyledIconWrapper = styled.div``;
export const StyledTextWrapper = styled.div`
    font-family: 'Nocturne Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: #23423D;

    @media only screen and (max-width: 768px){
        font-size: 24px;
    }
`;
