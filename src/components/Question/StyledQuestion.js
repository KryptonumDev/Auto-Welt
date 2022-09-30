import styled from "styled-components"

export const StyledQuestion = styled.div`
    width: 100%;
    min-height: 59px;
`
export const StyledAnswerWrapper = styled.div``
export const StyledQuestionWrapper = styled.div`
    > svg {
        transition: transform 250ms ease-in-out;
        transform: ${({ isopen }) => isopen ? "rotate(0)" : "rotate(180deg)"};
    }
`