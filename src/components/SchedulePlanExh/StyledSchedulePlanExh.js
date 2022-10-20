import styled from "styled-components";

export const StyledSchedulePlanExh = styled.section`
  width: 100%;
  max-width: 1144px;
  padding: 0 32px;
  margin: 120px auto 0;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;
export const StyledSliderWrapper = styled.div`
  margin-top: 60px;
`;
export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;
