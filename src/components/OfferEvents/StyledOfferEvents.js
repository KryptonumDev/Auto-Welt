import styled from "styled-components";

export const StyledOfferEvents = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;
export const StyledEventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 60px 0 40px;

  @media only screen and (max-width: 488px) {
    margin: 40px 0 20px;
  }
`;
export const StyledEventsButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

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
  @media only screen and (max-width: 488px) {
    flex-direction: column;
    gap: 12px;
    a {
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;
export const StyledTextWrapper = styled.div`
  font: 400 24px/1.2em "Roboto";
  color: #000;
  margin: 30px 0 60px;
`;
