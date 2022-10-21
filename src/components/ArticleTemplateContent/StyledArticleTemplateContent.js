import styled from "styled-components";

export const StyledArticleTemplateContent = styled.section`
    margin: 120px 0;
    display: flex;
    justify-content: space-between;
    gap: 70px;

    @media only screen and (max-width: 768px){
        margin: 60px 0;
    }
`;
export const StyledAside = styled.aside`
    width: calc(40% - 35px);
    max-width: 364px;
`;
export const StyledTextContent = styled.div`
    width: calc(60% - 35px);
`;
