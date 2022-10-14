import styled from "styled-components"

export const StyledContact = styled.section`
    padding-bottom: 120px;
`
export const StyledDesc = styled.div`
    font-size: 24px;
    line-height: 1.2em;
    max-width: 870px;
    font-family: 'Roboto';
    padding-bottom: 60px;
    width: 100%;
`
export const StyledBigImage = styled.div``
export const StyledButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
    @media only screen and (max-width: 450px) {
        flex-direction: column;
        gap: 12px;
        > div {
            width: 100%;
        }
    }
`
export const StyledBottomSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`