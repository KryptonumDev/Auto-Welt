import styled from "styled-components";

export const StyledHomeCalendar = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px 435px 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px 285px 16px;
    > h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 516px) {
    > h2 {
      font-size: 34px;
    }
  }

  @media only screen and (max-width: 375px) {
    padding: 0 8px 180px 8px;
  }
`;

export const StyledFooterCar = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -20px;
  left: -260px;

  @media only screen and (max-width: 768px) {
    width: 464px;
    left: -100px;
    bottom: -10px;
  }

  @media only screen and (max-width: 375px) {
    width: 370px;
    left: -50px;
  }

  @media only screen and (max-width: 332px){
    width: 292px;
  }
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
