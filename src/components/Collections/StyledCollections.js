import styled from "styled-components"

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