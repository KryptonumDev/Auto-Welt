import styled from "styled-components"

export const StyledModelCollections = styled.section`
    width: 100%;
    max-width: 1144px;
    margin: 0 auto;
    padding: 0 32px;
    @media only screen and (max-width: 768px){
        padding: 0 16px;
    }
`
export const StyledContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 30px 0 60px;

    @media only screen and (max-width: 768px){
        margin-top: 130px;
    }
`