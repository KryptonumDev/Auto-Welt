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
  @media only screen and (max-width: 768px){
    padding: 0 16px 435px 16px;
  }
`;
export const StyledFooterCar = styled.div`
  position: absolute;
  bottom: -20px;
  left: -260px;
  z-index: 2;
`;
export const StyledButtonWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`