import styled from "styled-components"

export const StyledHomeRecommendations = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 120px;
`
export const StyledRecommendationsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const StyledButtonsWrapper = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 40px;
`

export const StyledSlides = styled.div`
    width: 87%;
    display: flex;
    justify-content: space-between;
`

export const StyledArrowWrapper = styled.div`
    width: 30px;
    height: 55px;
    cursor: pointer;
    svg {
        width: 100%;
        height: 100%;
    }
`