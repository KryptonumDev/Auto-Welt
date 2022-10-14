import styled from "styled-components";

export const StyledQuestions = styled.section`
  width: 100%;

  @media only screen and (max-width: 768px){
    > h2{
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 375px){
    > h2{
      font-size: 34px;
    }
  }
`;
export const StyledQuestionsWrapper = styled.div`
  width: 100%;
`;
