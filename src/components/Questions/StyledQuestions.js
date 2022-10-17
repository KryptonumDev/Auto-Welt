import styled from "styled-components";

export const StyledQuestions = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;

  @media only screen and (max-width: 768px){
    padding: ${({ iscontactpage }) => iscontactpage ? "0" : "0 16px"};
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
