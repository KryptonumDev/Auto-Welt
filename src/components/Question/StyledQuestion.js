import styled from "styled-components";

export const StyledQuestion = styled.div`
  width: 100%;
  padding-bottom: ${({ isopen }) => (isopen ? "0" : "20px")};
`;
export const StyledAnswerWrapper = styled.div`
  width: 100%;
  padding: 15px 59px 20px 59px;
`;
export const StyledQuestionWrapper = styled.div`
  display: flex;
  gap: 17px;
  background-color: green;
  min-height: 59px;
  padding: 23px;
  > svg {
    transition: transform 250ms ease-in-out;
    transform: ${({ isopen }) => (isopen ? "rotate(0)" : "rotate(180deg)")};
  }
`;
