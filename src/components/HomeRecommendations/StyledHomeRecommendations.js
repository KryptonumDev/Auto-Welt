import styled from "styled-components";

export const StyledHomeRecommendations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 120px;

  @media only screen and (max-width: 768px){
    padding: 0;
  }
  @media only screen and (max-width: 599px){
    padding: 0 16px;
  }
`;
export const StyledRecommendationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;

  @media only screen and (max-width: 768px){
    flex-direction: column;
    gap: 12px;
  }

  @media only screen and (max-width: 599px){
    width: 92%;
    a{
      width: 100%;
    }
  }
`;

export const StyledSlides = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 599px){
    width: 100%;
    justify-content: center;
  }
`;

export const StyledArrowWrapper = styled.div`
  width: 30px;
  height: 55px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px){
    background-color: var(--primary500);
    width: 40px;
    height: 56px;
    padding: 6px;
    transform: translateX(${({ hasdeclaredtransform }) => hasdeclaredtransform ? hasdeclaredtransform : "0"});
  }
  @media only screen and (max-width: 599px){
    background: transparent;
    transform: translateX(0);
  }
`;
