import styled from "styled-components";

export const StyledCheckOutWithOffer = styled.section`
  margin: 120px auto;
  padding: 0 32px;
  max-width: 1144px;
  @media only screen and (max-width: 768px) {
    margin: 60px auto;
    padding: 0 16px;
    > h2 {
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 375px) {
    > h2 {
      font-size: 34px;
    }
  }
`;
export const StyledImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;
export const StyledCheckOutButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  a {
    &:last-child {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      color: #23423d;
    }
  }

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
